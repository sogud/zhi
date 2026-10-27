import { useState } from "react";
import { Button } from "@/registry/ui/button";
import { Label } from "@/registry/ui/label";
import { Switch } from "@/registry/ui/switch";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/registry/ui/tooltip";
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription, PopoverClose } from "@/registry/ui/popover";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from "@/registry/ui/dropdown-menu";

export function TooltipDemo() {
  const [saved, setSaved] = useState(false);
  const action = saved ? "取消收藏" : "收藏文章";
  return (
    <div>
      <TooltipProvider delay={350}>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" aria-label={action} onClick={() => setSaved(!saved)} />}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 2h8v12l-4-3-4 3z" /></svg>
          </TooltipTrigger>
          <TooltipContent>{action}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p role="status" className="mb-0 mt-4 text-sm text-muted-foreground">{saved ? "演示：文章已收藏。" : "演示：文章尚未收藏。"}</p>
    </div>
  );
}

export function PopoverDemo() {
  const [rememberPosition, setRememberPosition] = useState(true);
  return (
    <div>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>阅读偏好</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>阅读偏好</PopoverTitle>
          <PopoverDescription>设置立即应用于本页演示。</PopoverDescription>
          <Label className="flex items-center justify-between gap-4"><span>记住阅读位置</span><Switch checked={rememberPosition} onCheckedChange={setRememberPosition} /></Label>
          <div className="mt-6 flex justify-end"><PopoverClose render={<Button size="sm" />}>完成</PopoverClose></div>
        </PopoverContent>
      </Popover>
      <p role="status" className="mb-0 mt-4 text-sm text-muted-foreground">阅读位置：{rememberPosition ? "记住" : "不记住"}</p>
    </div>
  );
}

export function DropdownMenuDemo() {
  const [showSummary, setShowSummary] = useState(true);
  const [order, setOrder] = useState("updated");
  const [message, setMessage] = useState("尚未执行操作。");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>草稿操作</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMessage("已创建草稿副本（演示）。")}>创建副本</DropdownMenuItem>
          <DropdownMenuItem disabled>导出 PDF（暂不可用）</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showSummary} onCheckedChange={setShowSummary}>显示摘要</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>排序方式</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={order} onValueChange={(value: unknown) => { if (typeof value === "string") setOrder(value); }}>
              <DropdownMenuRadioItem value="updated">最近修改</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="title">标题</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <p role="status" className="mb-0 mt-4 text-sm leading-6 text-muted-foreground">{message} 摘要{showSummary ? "显示" : "隐藏"}，按{order === "updated" ? "最近修改" : "标题"}排序。</p>
    </div>
  );
}
