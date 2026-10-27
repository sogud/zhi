# Zhi Skill

让 Agent 使用 Zhi 的实际 API 和设计语言，按需读取安装、组件组合、主题和素材。Skill 与代码一起发布，不需要 MCP 或 Figma 登录才能使用本地资源。

## 安装

```sh
npx skills add sogud/zhi --skill zhi
```

这条命令将通过 skills CLI 选择目标 Agent 并安装。也可以[下载 ZIP](https://sogud.github.io/zhi/downloads/zhi-skill.zip)，将其中的 zhi 目录放入目标 Agent 支持的 skills 目录。

## 包含内容

- SKILL.md：什么时候使用 Zhi、如何发现组件、如何组合和验证。
- references：安装指南、设计规范、组件目录与 26 个独立组件指南。
- assets：主题 tokens、生成的主题 CSS、四个原始组件的三主题 SVG、设计预览与 MIT 许可。

入口文件保持简短，具体组件参考按需加载。素材和参考文件从项目的 design、docs 与 registry 构建生成，与官网使用同一份来源。

## 使用示例

```text
使用 Zhi Skill，为阅读工具做一个设置页。
采用宣纸主题，突出主要操作，支持键盘和手机布局。
```

```text
使用 Zhi 的 Dialog 和 Select，给作品添加发布设置。
请先检查项目已有组件和别名，保留本地修改。
```

Skill 只影响 Agent 如何完成已授权的任务，不授予发布、上传或修改账户的权限。当前目录只有 26 个组件，Skill 会明确处理尚未提供的组件，而不是虚构导入。

## 开源参考

结构参考了 [shadcn Skill](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md) 的项目检查、组合规则和按需引用，以及 [coss Skill](https://github.com/cosscom/ui/blob/main/apps/ui/skills/coss/SKILL.md) 的组件索引和 Base UI 使用说明。Zhi 的正文、规则与素材按自身实际实现编写，没有复制其他组件库的 API 或视觉规范。
