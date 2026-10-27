# DropdownMenu 下拉菜单

把与当前对象相关的操作和选项放在同一个菜单里。

## 安装

```sh
pnpm dlx shadcn@latest add @zhi/dropdown-menu @zhi/button
```

先按[安装指南](../installation.md)配置 Registry。

## 用法

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>草稿操作</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={() => duplicateDraft()}>创建副本</DropdownMenuItem>
    <DropdownMenuItem disabled>导出 PDF（暂不可用）</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem defaultChecked>显示摘要</DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
```

将 duplicateDraft 替换成项目中的实际操作。

## 主要属性

| 位置 / 属性 | 类型 | 默认值 |
| --- | --- | --- |
| DropdownMenu: open / defaultOpen | boolean | false |
| DropdownMenu: onOpenChange | (open, details) => void | — |
| DropdownMenu: disabled / modal | boolean | false / true |
| DropdownMenuContent: side / align | Base UI 定位属性 | bottom / start |
| DropdownMenuContent: sideOffset / alignOffset | number | 6 / 0 |
| DropdownMenuItem: disabled / closeOnClick | boolean | false / true |
| DropdownMenuCheckboxItem: checked / defaultChecked | boolean | false |
| DropdownMenuCheckboxItem: onCheckedChange | (checked, details) => void | — |
| DropdownMenuRadioGroup: value / defaultValue / onValueChange | Base UI 单选组属性 | — |

## 组合与可访问性

支持普通操作、CheckboxItem、RadioGroup / RadioItem、Group / Label 和 Separator。Label 放在 Group 内，会关联对应分组。CheckboxItem 和 RadioItem 默认选中后保持菜单打开；可通过 closeOnClick 修改。

菜单由 Base UI 管理方向键、文字导航、禁用项、Escape 与关闭后的焦点返回。使用 render 组合触发器。不要把文本输入或长表单塞进菜单，需要输入时使用 [Popover](popover.md)。选项表示表单值时使用 [Select](select.md)。

DropdownMenuContent 包含 Portal 与避让定位，使用 8 px 容器圆角；主题设置在文档根节点。这一版提供单层菜单，不包含子菜单包装。

完整属性以[分发源码](../../registry/ui/dropdown-menu.tsx)和已安装版本的类型定义为准。
