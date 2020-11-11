import _ from 'lodash'
import {
  Post,
  Body,
  Get,
  Query,
  Delete,
  Param,
  Controller,
  Patch,
  Put,
  UseGuards,
} from '@nestjs/common'
import { CloudBaseService } from '@/services'
import { ApiService } from './api.service'
import { Collection } from '@/constants'
import { IsJSON, IsNumber } from 'class-validator'
import { ActionGuard } from '@/guards/action.guard'

class IQuery {
  @IsNumber()
  limit: number

  @IsNumber()
  skip: number

  @IsJSON()
  fields: string

  @IsJSON()
  sort: string
}

/**
 * 查询 doc 处理说明
 * 1. hiddenInApi 的字段要在返回值中隐藏
 * 2. 批量查询时，order 字段要处理
 * 3. 返回值中的关联字段要转换成对应的数据
 */
@Controller('/v1.0')
export class ApiController {
  constructor(
    private readonly cloudbaseService: CloudBaseService,
    private readonly apiService: ApiService
  ) {}

  // 获取单个文档
  @UseGuards(ActionGuard('read'))
  @Get(':collectionName/:docId')
  async getDocument(@Param() params: { collectionName: string; docId: string }) {
    const { collectionName, docId } = params

    // 获取数据原型
    const {
      data: [docSchema],
    }: { data: Schema[] } = await this.collection(Collection.Schemas)
      .where({
        collectionName,
      })
      .get()

    // 查询数据库
    let dbQuery = this.collection(collectionName).doc(docId)

    // 内置过滤字段，拼接查询条件
    const hiddenFields = docSchema?.fields?.filter((field) => field.isHiddenInApi)
    if (hiddenFields?.length) {
      const fieldsObject = hiddenFields.reduce((prev, current) => {
        prev[current.name] = false
        return prev
      }, {})
      dbQuery = dbQuery.field(fieldsObject)
    }

    // 查询数据
    const { data } = await dbQuery.get()
    // 处理返回值
    const [doc] = await this.apiService.transformResData(data, collectionName)

    return {
      // doc 不存在时，返回 null
      data: doc || null,
    }
  }

  // 简单查询
  @UseGuards(ActionGuard('read'))
  @Get(':collectionName')
  async getDocuments(@Param('collectionName') collectionName: string, @Query() query: IQuery) {
    const apiQuery = await this.apiService.getMergedQuery(collectionName, query as any)

    // 查询数据
    const res = await this.apiService.callOpenApi({
      collectionName,
      action: 'find',
      query: apiQuery,
    })

    // 查询 total 的值
    const { data: countRes } = await this.apiService.callOpenApi({
      collectionName,
      action: 'count',
      query: apiQuery,
    })

    res.data = await this.apiService.transformResData(res.data, collectionName)

    return { ...res, total: countRes.total }
  }

  /**
   * 支持 command 操作符的复杂操作
   */
  @UseGuards(ActionGuard('read'))
  @Post(':collectionName/find')
  async findDocuments(
    @Param('collectionName') collectionName: string,
    @Query() query,
    @Body() payload
  ) {
    const apiQuery = await this.apiService.getMergedQuery(collectionName, query as any)

    const countRes = await this.apiService.callOpenApi({
      collectionName,
      action: 'count',
      data: payload,
      query: apiQuery,
    })

    const res = await this.apiService.callOpenApi({
      collectionName,
      action: 'find',
      data: payload,
      query: apiQuery,
    })

    res.data = await this.apiService.transformResData(res.data, collectionName)

    return {
      ...res,
      total: countRes.total,
    }
  }

  // 创建文档
  @UseGuards(ActionGuard('modify'))
  @Post(':collectionName')
  async createDocument(@Param('collectionName') collectionName: string, @Body() payload) {
    return this.collection(collectionName).add(payload)
  }

  // 更新文档
  @UseGuards(ActionGuard('modify'))
  @Patch(':collectionName/:docId')
  async updateDocument(
    @Param() params: { collectionName: string; docId: string },
    @Body() payload: any
  ) {
    const { docId, collectionName } = params
    return this.collection(collectionName).doc(docId).update(payload)
  }

  // 批量更新文档
  @UseGuards(ActionGuard('modify'))
  @Patch(':collectionName')
  async patchUpdateDocuments(
    @Param('collectionName') collectionName: string,
    @Body() payload: any
  ) {
    return this.apiService.callOpenApi({
      collectionName,
      action: 'updateMany',
      data: payload,
    })
  }

  // 替换文档
  @UseGuards(ActionGuard('modify'))
  @Put(':collectionName/:docId')
  async setDocument(@Param() params: { collectionName: string; docId: string }, @Body() payload) {
    const { collectionName, docId } = params
    return this.collection(collectionName).doc(docId).set(payload)
  }

  // 删除指定文档
  @UseGuards(ActionGuard('modify'))
  @Delete(':collectionName/:docId')
  async deleteDocument(@Param() params: { collectionName: string; docId: string }) {
    const { collectionName, docId } = params
    return this.collection(collectionName).doc(docId).remove()
  }

  // 批量删除文档
  @UseGuards(ActionGuard('modify'))
  @Delete(':collectionName')
  async batchDeleteDocument(@Param('collectionName') collectionName: string, @Body() payload) {
    return this.apiService.callOpenApi({
      collectionName,
      action: 'deleteMany',
      data: payload,
    })
  }

  private collection(name: string) {
    return this.cloudbaseService.collection(name)
  }
}