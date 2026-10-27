# Skeleton 加载占位

在内容尚未就绪时保留布局位置，默认使用静态色块。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/skeleton
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Skeleton } from "@/components/ui/skeleton"

<div>
  <div aria-busy="true" className="space-y-3">
    <Skeleton className="h-5 w-28" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-4/5" />
  </div>
  <p role="status">正在载入文章。</p>
</div>
```

## 主要属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| className | string | 指定实际内容对应的宽高 |
| aria-hidden | boolean | 默认 true，隐藏没有内容含义的色块 |

## 组合与可访问性

Skeleton 是普通 div，不发起请求、不决定何时加载完成。由调用方维护加载状态，在内容区域设置 `aria-busy`，并通过独立的状态文字说明当前操作。完成后替换占位，清除 `aria-busy`。

默认不闪烁、不持续移动。按真实内容安排宽高；不要把所有内容都替换为相同大小的占位卡片。错误状态应显示具体错误与重试操作，不能一直保留加载占位。

完整属性以[分发源码](../../registry/ui/skeleton.tsx)为准。
