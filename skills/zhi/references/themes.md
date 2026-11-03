# Zhi 编辑器主题

Zhi UI 与 Zhi Themes 在同一个仓库维护，共用官网和文档。Obsidian、Zed、VS Code 源码位于 `themes/`；原 Xuan 仓库保留为迁移参考。

## 下载与源码

| 平台 | 下载 | 源码 |
| --- | --- | --- |
| Obsidian | [主题 ZIP](https://sogud.github.io/zhi/downloads/zhi-obsidian.zip) | [SCSS 与发布文件](https://github.com/sogud/zhi/blob/main/themes/obsidian/README.md) |
| Zed | [主题 ZIP](https://sogud.github.io/zhi/downloads/zhi-zed.zip) | [原生主题 JSON](https://github.com/sogud/zhi/blob/main/themes/zed/README.md) |
| VS Code | [扩展源码 ZIP](https://sogud.github.io/zhi/downloads/zhi-vscode-source.zip) | [扩展与主题 JSON](https://github.com/sogud/zhi/blob/main/themes/vscode/README.md) |

下载随文档站构建生成；本地修改需要发布后才会更新公开下载。

## 安装

### Obsidian

解压后，将 `theme.css` 与 `manifest.json` 放入 `<vault>/.obsidian/themes/Zhi/`，在「设置 → 外观」中选择 **Zhi**。ZIP 中还包含 README、版本记录和 MIT 许可。

### Zed

解压后导入 `xuan-light.json` 或 `xuan-dark.json`，在主题选择器中选择 **Zhi Light** 或 **Zhi Dark**。

### VS Code

下载的是扩展源码，不是可直接安装的 VSIX。在解压目录或仓库 `themes/vscode/` 中运行：

```sh
npx @vscode/vsce package
```

此命令可能下载 VS Code 打包工具。安装生成的 VSIX 后，选择 **Zhi Light** 或 **Zhi Dark**。文档站构建不会生成 VSIX，也不会发布到 Marketplace。

## 开发与版本

在 Zhi 仓库根目录安装依赖，不需要为各个平台重复安装：

```sh
pnpm install --frozen-lockfile
pnpm themes:build
```

`themes:build` 将 `themes/obsidian/theme.scss` 编译为同目录的 `theme.css`，复制平台发布文件并生成三个 ZIP。Zed 和 VS Code 使用原生 JSON，不需要编译。`pnpm build` 包含此步骤，也会生成组件 Registry、统一文档和 Skill。

Obsidian 的版本由其 `manifest.json` 与 `versions.json` 维护，VS Code 使用自己的 `package.json`；两者与 Zhi UI 版本独立。社区主题登记、扩展打包和平台发布分别处理。

## 从 Xuan 更新

`xuan-*.json` 文件名与 `--xuan-*` CSS 变量保留用于兼容。VS Code 扩展 ID 仍为 `changshun.xuan-theme`，主题设置 ID 保留 `Xuan Light` / `Xuan Dark`，显示名称使用 Zhi。Obsidian 和 Zed 更新后需重新选择主题，不自动修改个人配置。

本轮迁移保留各平台现有配色和语法高亮。Web 组件以 [design/tokens.json](https://github.com/sogud/zhi/blob/main/design/tokens.json) 为准；编辑器主题尚未从这份 token 源生成。Figma 的同步范围见[设计资源](resources.md)。
