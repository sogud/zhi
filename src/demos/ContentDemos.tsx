import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Skeleton } from "@/registry/ui/skeleton";
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from "@/registry/ui/table";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";

const demoAvatar = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" fill="#365B40"/><circle cx="40" cy="30" r="13" fill="#FCFCFA"/><path d="M16 76a24 24 0 0 1 48 0" fill="#FCFCFA"/></svg>')}`;

export function AvatarDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex items-center gap-3">
        <Avatar aria-hidden="true"><AvatarImage src={demoAvatar} alt="" /><AvatarFallback>林</AvatarFallback></Avatar>
        <span className="text-sm">林间 · 有头像</span>
      </div>
      <div className="flex items-center gap-3">
        <Avatar aria-hidden="true"><AvatarFallback>周</AvatarFallback></Avatar>
        <span className="text-sm">周末 · 文字替代</span>
      </div>
    </div>
  );
}

export function SkeletonDemo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-4">
      <div aria-busy={!loaded} className="min-h-24">
        {loaded ? (
          <div><p className="m-0 font-medium">一页之间</p><p className="mt-3 text-sm leading-6 text-muted-foreground">给日常留白的阅读清单。内容已准备好，可以继续阅读。</p></div>
        ) : (
          <div className="space-y-3"><Skeleton className="h-5 w-28" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-4/5" /></div>
        )}
      </div>
      <p role="status" className="m-0 text-xs text-muted-foreground">{loaded ? "演示：内容已载入。" : "演示：正在载入内容。"}</p>
      <Button variant="outline" onClick={() => setLoaded(!loaded)}>{loaded ? "查看加载状态" : "载入演示内容"}</Button>
    </div>
  );
}

export function TableDemo() {
  return (
    <Table>
      <TableCaption>演示数据：本周的阅读与写作清单。</TableCaption>
      <TableHeader><TableRow><TableHead scope="col">作品</TableHead><TableHead scope="col">状态</TableHead><TableHead scope="col" className="text-right whitespace-nowrap">字数</TableHead></TableRow></TableHeader>
      <TableBody>
        <TableRow><TableHead scope="row" className="min-w-36">一页之间</TableHead><TableCell><Badge variant="outline">草稿</Badge></TableCell><TableCell className="text-right tabular-nums">1,280</TableCell></TableRow>
        <TableRow><TableHead scope="row">窗边的光</TableHead><TableCell><Badge>已完成</Badge></TableCell><TableCell className="text-right tabular-nums">860</TableCell></TableRow>
        <TableRow><TableHead scope="row">读书笔记</TableHead><TableCell><Badge variant="outline">草稿</Badge></TableCell><TableCell className="text-right tabular-nums">640</TableCell></TableRow>
      </TableBody>
      <TableFooter><TableRow><TableHead scope="row" colSpan={2}>合计</TableHead><TableCell className="text-right tabular-nums">2,780</TableCell></TableRow></TableFooter>
    </Table>
  );
}
