# Badge 标记

用简短文字表达状态或分类。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/badge
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Badge } from "@/components/ui/badge"

<div className="flex gap-3">
  <Badge>草稿</Badge>
  <Badge variant="outline">随笔</Badge>
  <Badge variant="accent">已发布</Badge>
  <Badge variant="destructive">需要修改</Badge>
</div>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| variant | default / outline / accent / destructive | default |

## 组合与可访问性

Badge 是静态标记；可点击动作使用 Button。颜色之外始终保留状态文字。

完整属性以[分发源码](../../registry/ui/badge.tsx)和已安装版本的类型定义为准。
