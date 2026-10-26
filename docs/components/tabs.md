# Tabs 标签页

在同一上下文中切换相关内容。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/tabs
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="overview">
  <TabsList aria-label="作品信息">
    <TabsTrigger value="overview">概览</TabsTrigger>
    <TabsTrigger value="details">详情</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">作品概览。</TabsContent>
  <TabsContent value="details">作品详情。</TabsContent>
</Tabs>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| value / defaultValue | tab value | — |
| onValueChange | (value, details) => void | — |
| orientation | horizontal / vertical | horizontal |

## 组合与可访问性

方向键移动焦点，默认 Enter 或 Space 激活；TabsList 可用 activateOnFocus 改为自动激活。禁用标签可聚焦但不能激活。竖向布局由使用者安排。

完整属性以[分发源码](../../registry/ui/tabs.tsx)和已安装版本的类型定义为准。
