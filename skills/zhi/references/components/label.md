# Label 标签

为表单控件提供清楚且可点击的名称。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/label
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Label } from "@/components/ui/label"

<Label htmlFor="work-name">作品名称</Label>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| htmlFor | string | — |
| children | ReactNode | — |

## 组合与可访问性

将 htmlFor 指向控件的 id，或用 Label 包裹 Checkbox、RadioGroupItem。Label 使用原生 label 元素。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/label.tsx)和已安装版本的类型定义为准。
