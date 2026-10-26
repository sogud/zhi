# Card 卡片

将相关内容放在同一表面，通过排版表达层次。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/card
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>一页之间</CardTitle>
    <CardDescription>给日常留白的阅读清单。</CardDescription>
  </CardHeader>
  <CardContent>把时间留给内容。</CardContent>
</Card>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| className | string | — |
| children | ReactNode | — |

## 组合与可访问性

另含 CardFooter。CardTitle 渲染 h3；按页面文档层级安排标题，避免每段内容都包成卡片。

完整属性以[分发源码](../../registry/ui/card.tsx)和已安装版本的类型定义为准。
