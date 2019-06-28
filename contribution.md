---
title: 贡献指南
lang: zh-CN
---

# 贡献指南

## 贡献方式

如果您会使用Git和GitHub：

* 若您希望长期参与，可以联系管理人员，成为Collaborators
* 若您仅希望贡献少量内容，或者修复某些错误，您可以fork本仓库，修改完成后提交Pull request

如果您不会：

* 您可以[提交issue](https://github.com/GKD-OW/docs/issues/new)，来描述您所遇到的问题
* 您可以在群内联系管理人员
* 您还可以尝试[学习如何使用Git](https://blog.sylingd.com/archives/346.html)

当仓库内容更新后，一般网站会在五分钟内更新。您可以[查看Travis-CI构建状态](https://travis-ci.org/GKD-OW/docs)

## 插入图片

**不建议使用大量图片，如果可以的话，尽量使用文字。**

图片上传前请先压缩，压缩工具：
* [compressjpeg.com](https://compressjpeg.com/zh/)
* [yasuotu.com](https://www.yasuotu.com/)
* [iloveimg.com](https://www.iloveimg.com/zh-cn/compress-image/compress-jpg)

上传至公共图床，如[路过图床](https://imgchr.com/)、[SM.MS](https://sm.ms/)，然后复制Markdown代码，粘贴到文章中

## 创建新文档

* 在相应目录下创建Markdown文件（扩展名为`.md`），命名为英文命名。基本内容如下：

```
---
title: 文档标题
lang: zh-CN
---

# 文档标题

文档内容
```

* 加入侧边栏：修改`/.vuepress/list.js`，按照[此说明](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html#侧边栏)，将您的文档加入到侧边栏
