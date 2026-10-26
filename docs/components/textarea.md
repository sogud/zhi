# Textarea 多行输入

为多段文字提供足够的书写空间。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/textarea
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Textarea } from "@/components/ui/textarea"

<Textarea aria-label="作品简介" placeholder="用几句话介绍作品" rows={4} />
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| value / defaultValue | string | — |
| onChange | React change handler | — |
| rows | number | 浏览器默认 |
| disabled / required | boolean | false |

可选 `className="zhi-paper-ruled"` 添加淡界栏，适用于写作和笔记场景。

## 组合与可访问性

支持原生 textarea 属性及 aria-invalid；默认可纵向调整尺寸。

完整属性以[分发源码](../../registry/ui/textarea.tsx)和已安装版本的类型定义为准。
