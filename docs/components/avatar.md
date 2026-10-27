# Avatar 头像

展示头像；未提供图片或图片无法加载时显示文字替代。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/avatar
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<div className="flex items-center gap-3">
  <Avatar aria-hidden="true">
    <AvatarImage src="/authors/lin.jpg" alt="" />
    <AvatarFallback>林</AvatarFallback>
  </Avatar>
  <span>林间</span>
</div>
```

## 主要属性

| 部件 | 属性 | 说明 |
| --- | --- | --- |
| Avatar | className | 默认 36 px 圆形；可调整尺寸 |
| AvatarImage | src / alt | 图片地址及替代文字 |
| AvatarImage | onLoadingStatusChange | 接收 idle、loading、loaded、error |
| AvatarFallback | delay | 替代内容的显示延迟，默认 0 ms |

## 组合与可访问性

图片加载与替代内容由 Base UI 管理。替代文字应由调用方提供，不从姓名自动推导。

旁边已有可见姓名时，头像可整体设置 `aria-hidden="true"`，图片使用空 alt，避免重复朗读。独立头像可在 Avatar 上设置 `role="img" aria-label="林间"`，并将其图片 alt 置空；确保加载失败后名称仍然存在。需要点击头像时，将其放入具有明确名称的按钮或链接，不在 Avatar 上添加点击行为。

完整属性以[分发源码](../../registry/ui/avatar.tsx)和已安装版本的类型定义为准。
