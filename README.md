# 二次开发 CloudBase CMS

## 功能特性

| 特性       | 介绍                                                                       |
| ---------- | -------------------------------------------------------------------------- |
| 免开发     | 基于模板配置生成内容管理界面，无须编写代码                                 |
| 功能丰富   | 支持文本、图片、文件、枚举等多种类型内容的可视化编辑，并且支持内容关联     |
| 权限控制   | 基于自定义角色的资源级权限管理，满足企业级需求                             |
| 系统集成   | 支持 Webhook 触发，可以方便的与外部系统集成                                |
| 数据源兼容 | 支持管理已有的云开发数据，也可以在 CMS 后台创建新的内容和数据集合          |
| 部署简单   | 可在云开发控制台扩展管理界面一键部署和升级，也可通过项目提供的脚本自动部署 |

## 🚀 快速开始

你可以通过下面的方式快速部署 CloudBase CMS

<!-- ### 一键部署

使用一键部署，将 CMS 部署到云托管。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=github&tdl_site=0&appUrl=https://github.com/TencentCloudBase/cloudbase-extension-cms)

**注：一键部署使用云托管部署，将会运行费用，计费标准[参考文档](https://cloud.tencent.com/document/product/1243/48037)。** -->

### 扩展安装

在[云开发控制台](https://console.cloud.tencent.com/tcb/extensions/index)安装

### 源码部署

参考 CMS 使用说明[文档](https://docs.cloudbase.net/cms/install/source.html)

## [示例](https://cms-demo-1252710547.tcloudbaseapp.com)

![](https://main.qcloudimg.com/raw/9fde303ac81a3d3028552f73337726ee.png)

![](https://main.qcloudimg.com/raw/feb1a82b40ab99dd131add674c82fd2d.png)

## 技术栈

- ❤️ React
- ❤️ Node.js + Nest.js + [CloudBase](https://cloudbase.net)
- ❤️ TypeScript

## 使用案例

<table>
  <tr>
    <td align="center"><a href="https://cloudbase.net">
      <img src="./docs/examples/cloudbase.png" width="100px;" alt="云开发"/>
      <br /><sub><b>云开发</b></sub></a>
    </td>
    <td align="center">
      <a href="https://face.xiaoxili.com/">
      <img src="./docs/examples/hi-avatar.jpg" width="100px;" alt="Hi 头像"/><br />
      <sub><b>Hi 头像</b></sub>
    </a>
    </td>
    <td align="center"><a href="https://featwork.com/blog">
      <img src="./docs/examples/featblog.png" width="100px;" alt="轻博客"/>
      <br /><sub><b>轻博客</b></sub></a>
    </td>
    <td align="center">
      <img src="./docs/examples/yami.png" width="100px;" alt="密鸭车服"/>
      <br /><sub><b>密鸭车服</b></sub>
    </td>
    <td align="center"><a href="https://github.com/wforguo/wedding-app">
      <img src="./docs/examples/wedding-app.jpeg" width="100px;" alt="趣婚礼"/>
      <br /><sub><b>趣婚礼</b></sub></a>
    </td>
    <td align="center">
      <img src="./docs/examples/realtime-earthquake.jpeg" width="100px;" alt="实时地震"/>
      <br /><sub><b>实时地震</b></sub>
    </td>
  </tr>
</table>

## RoadMap

🚀 表示已经实现的功能，👷 表示进行中的功能，⏳ 表示规划中的功能，🏹 表示技术方案设计中的功能。

| 功能                                             | 状态      | 发布版本 |
| ------------------------------------------------ | --------- | -------- |
| 字段禁止编辑                                     | 👷 进行中 |          |
| 地图组件                                         | 👷 进行中 |          |
| 图片、文件支持上传多个                           | 👷 进行中 |          |
| 支持以微前端的模式嵌入系统                       | 🏹 设计中 |          |
| 提供项目模板，支持从模板创建项目                 | 🏹 设计中 |          |
| 支持操作记录                                     | 🏹 设计中 |          |
| 支持 GraphQL                                     | ⏳ 规划中 |          |
| 内容表字段索引支持                               | ⏳ 规划中 |          |
| 定时任务 ⇒ 统计报表                              | ⏳ 规划中 |          |
| 支持默认排序字段                                 | 🚀 已完成 | V2.5     |
| 支持复制内容模型                                 | 🚀 已完成 | V2.4     |
| 支持导出数据到 CSV、JSON 文件                    | 🚀 已完成 | V2.4     |
| 支持云应用部署                                   | 🚀 已完成 | V2.4     |
| 支持修改系统内置的创建时间、修改时间等字段的属性 | 🚀 已完成 | V2.4     |
| 支持 RESTful API                                 | 🚀 已完成 | V2.3     |
| 模型字段支持拖拽排序                             | 🚀 已完成 | V2.1     |
| 模型支持导入、导出                               | 🚀 已完成 | V2.1     |
| 支持 JSON 对象                                   | 🚀 已完成 | V2.1     |
| 支持通过 CSV，JSON Line 导入数据                 | 🚀 已完成 | V2.1     |
| 图片、文件数组支持                               | 🚀 已完成 | V2.1     |
| CMS 2.0 使用文档                                 | 🚀 已完成 | V2.0     |
| 富文本编辑器优化，支持上传图片                   | 🚀 已完成 | V2.0     |
| 登录使用云开发账号密码登录                       | 🚀 已完成 | V2.0     |
| 支持枚举类型                                     | 🚀 已完成 | V2.0     |
| 细粒度角色权限管理权限控制                       | 🚀 已完成 | V2.0     |

## 在线交流

如果在使用、安装过程中有任何问题，或者建议，欢迎加群讨论、反馈问题，或加云开发小助手微信： Tcloudedu1，发送 CMS 入群。

<div align="center">
  <img src="https://main.qcloudimg.com/raw/c78005f04eb42e64e687cb690798af13.png" height="300px" />
  <img src="https://main.qcloudimg.com/raw/b0e6c47ee41ef561cd02ec9e2af6c3b1.jpg" height="300px" alt=""/>
  <img src="https://main.qcloudimg.com/raw/a07b103a276b42fa727102e66c54f787.jpg" height="300px" alt=""/>
</div>

## 🤝 贡献指南

欢迎大家参与到 CloudBase CMS 的开发工作，贡献一份力量

您可以选择如下的贡献方式：

- 贡献一篇技术文章
- 贡献代码，提交 Pull Request
- 反馈 bug，提交 Issue
- 在技术会议上发表技术演讲
- 贡献方式请参考 贡献指南 文档

### 本地开发

参考[贡献指南](./CONTRIBUTING.md)

## 更新日志

见[更新日志](./CHANGELOG.md)

## 📝 License

开源协议文档请参阅 [Apache License 2.0](./LICENSE)

## Contributors ✨

贡献人员

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/chhpt"><img src="https://avatars2.githubusercontent.com/u/19288423?v=4" width="100px;" alt=""/><br /><sub><b>chhpt</b></sub></a><br /><a href="#infra-chhpt" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/TencentCloudBase/cloudbase-extension-cms/commits?author=chhpt" title="Code">💻</a> <a href="https://github.com/TencentCloudBase/cloudbase-extension-cms/commits?author=chhpt" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/binggg"><img src="https://avatars2.githubusercontent.com/u/7686861?v=4" width="100px;" alt=""/><br /><sub><b>Booker Zhao</b></sub></a><br /><a href="https://github.com/TencentCloudBase/cloudbase-framework/commits?author=binggg" title="Code">💻</a></td>
    <td align="center"><a href="https://www.zzkai.com"><img src="https://avatars0.githubusercontent.com/u/7334950?v=4" width="100px;" alt=""/><br /><sub><b>幻魂</b></sub></a><br /><a href="https://github.com/TencentCloudBase/cloudbase-extension-cms/commits?author=fantasticsoul" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/geeeeeeeeeek"><img src="https://avatars0.githubusercontent.com/u/9697715?v=4" width="100px;" alt=""/><br /><sub><b>June</b></sub></a><br /><a href="https://github.com/TencentCloudBase/cloudbase-extension-cms/commits?author=geeeeeeeeeek" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
