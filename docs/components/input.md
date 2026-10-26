# Input 输入框

单行输入，保留清楚的标签与提示。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/input
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Input } from "@/components/ui/input"

<Input aria-label="作品名称" placeholder="给作品起个名字" />
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| value / defaultValue | string | — |
| onChange | React change handler | — |
| disabled / required | boolean | false |
| aria-invalid | boolean | false |

## 组合与可访问性

使用 Label 或 aria-label 提供名称；错误说明通过 aria-describedby 关联。

完整属性以[分发源码](../../registry/ui/input.tsx)和已安装版本的类型定义为准。
