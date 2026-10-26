# Dialog 对话框

需要明确决定时出现，并管理焦点返回。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/dialog @zhi/button
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>打开</DialogTrigger>
  <DialogContent>
    <DialogTitle>留一点空白</DialogTitle>
    <DialogDescription>关闭后回到原来的位置。</DialogDescription>
    <DialogFooter><DialogClose render={<Button />}>关闭</DialogClose></DialogFooter>
  </DialogContent>
</Dialog>
```

## 主要属性

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| open / defaultOpen | boolean | false |
| onOpenChange | (open, details) => void | — |
| initialFocus / finalFocus | Base UI popup focus target | 自动 |

## 组合与可访问性

DialogContent 包含 Portal、遮罩与可滚动浮层。通过 render 组合触发器，不使用 asChild。提供标题和描述。异步提交使用受控 open，成功后再关闭。

完整属性以[分发源码](https://github.com/sogud/zhi/blob/main/registry/ui/dialog.tsx)和已安装版本的类型定义为准。
