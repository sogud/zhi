# Toggle 切换按钮

表示持续生效的按下状态，适合文字格式等工具操作。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/toggle
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Toggle } from "@/components/ui/toggle"

<Toggle defaultPressed>加粗</Toggle>
<Toggle disabled>下划线</Toggle>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| pressed / defaultPressed | boolean | false |
| onPressedChange | (pressed, details) => void | — |
| disabled | boolean | false |
| value | string | 在 ToggleGroup 中标识选项 |

## 组合与可访问性

Base UI 自动维护 `aria-pressed`，支持 Enter 和 Space。按钮标签保持稳定，如“加粗”；只有图标时补充 `aria-label`。显示状态时同时改变边框、背景和文字，不只依赖颜色。账号偏好通常使用 Switch，表单多选通常使用 Checkbox。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/toggle.tsx)和已安装版本的类型定义为准。
