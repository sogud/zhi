# 阅读与草稿管理

[打开应用示例](https://sogud.github.io/zhi/examples/)。同一个阅读与写作空间，组合使用 15 个基础组件；沿用默认的 4 px 控件圆角、8 px 容器圆角。

静态预览：[阅读页](https://github.com/sogud/zhi/blob/main/design/studies/reading-example.png) · [草稿页](https://github.com/sogud/zhi/blob/main/design/studies/drafts-example.png)。

## 阅读页

清单、正文和札记各有自己的位置。侧栏通过 Input 搜索篇目，Button 切换文章，Badge 区分类别；Checkbox 标记读完后，Progress 同步反映完成比例。Switch 进入专注阅读时收起清单。

正文保持独立排版，札记使用 Card、Label、Textarea 和保存操作。空札记显示关联错误，保存后用 Alert 给出反馈。Separator 区分正文与记录区域。

## 草稿管理页

Tabs 切换工作区。Input 与 Select 联合筛选草稿，Checkbox 支持批量选择和归档。筛选变化时清除选择，避免操作看不见的条目。空结果提供清除筛选操作。

Dialog 支持新建和编辑草稿，必填标题有错误提示。保存后列表更新，取消或 Escape 关闭时返回原触发位置。归档内容可以筛选、编辑和恢复；Accordion 解释归档的用途。

## 状态与范围

札记、完成标记与草稿只保留在本次预览中；切换工作区时保留，刷新后重置。全部使用示例内容，不连接真实账户、云存储或发布服务。

设置页的 RadioGroup 与其他控件组合见[圆角对照](settings.md)。这些场景合起来覆盖其中 16 个基础组件，不按子组件数量重复计数。

[查看组合源码](https://github.com/sogud/zhi/blob/main/src/ApplicationExamples.tsx)。
