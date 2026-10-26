import { useState } from "react";
import { Textarea } from "@/registry/ui/textarea";
import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/ui/card";
import { Badge } from "@/registry/ui/badge";
import { Separator } from "@/registry/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/registry/ui/alert";
import { Progress } from "@/registry/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/registry/ui/dialog";
import { Button } from "@/registry/ui/button";

const readingModes = { comfortable: "舒适", compact: "紧凑", spacious: "宽松", unavailable: "自动排版（即将提供）" };

export function ExpandedSpecimens() {
  const [published, setPublished] = useState(false);

  return (
    <>
      <section id="forms" className="specimen">
        <div className="section-heading"><h2>表单补充</h2><span>Label · Textarea · RadioGroup · Select</span></div>
        <div className="input-grid">
          <div className="field">
            <Label htmlFor="work-description">作品简介</Label>
            <Textarea id="work-description" placeholder="用几句话介绍你的作品" aria-describedby="description-help" />
            <span id="description-help">保留内容的呼吸，不必急于写满。</span>
          </div>
          <div className="field">
            <Label htmlFor="locked-description">归档备注</Label>
            <Textarea id="locked-description" disabled defaultValue="已归档的作品暂不可编辑。" />
          </div>
          <div className="field">
            <Label id="visibility-label">可见范围</Label>
            <RadioGroup defaultValue="private" aria-labelledby="visibility-label" name="visibility">
              <Label className="selection-label"><RadioGroupItem value="private" />仅自己可见</Label>
              <Label className="selection-label"><RadioGroupItem value="public" />公开分享</Label>
              <Label className="selection-label"><RadioGroupItem value="team" disabled />团队空间（未开通）</Label>
            </RadioGroup>
          </div>
          <div className="field">
            <Label htmlFor="reading-density">阅读密度</Label>
            <Select items={readingModes} defaultValue="comfortable" name="density">
              <SelectTrigger id="reading-density"><SelectValue placeholder="选择阅读密度" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="comfortable">舒适</SelectItem>
                <SelectItem value="compact">紧凑</SelectItem>
                <SelectItem value="spacious">宽松</SelectItem>
                <SelectItem value="unavailable" disabled>自动排版（即将提供）</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <section id="content" className="specimen">
        <div className="section-heading"><h2>内容与层次</h2><span>Card · Badge · Separator</span></div>
        <Card>
          <CardHeader>
            <div><Badge variant="outline">随笔</Badge></div>
            <CardTitle>一页之间</CardTitle>
            <CardDescription>一份给日常留白的阅读清单。</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="m-0 text-sm leading-7">把标题、正文与行动放在各自的位置。纸的层次来自间距和字重。</p>
            <Separator className="my-5" />
            <div className="flex flex-wrap gap-3"><Badge>草稿</Badge><Badge variant="accent">已发布</Badge><Badge variant="destructive">需要修改</Badge></div>
          </CardContent>
          <CardFooter><Button variant="outline" nativeButton={false} render={<a href="#composition" />}>查看组合示例</Button></CardFooter>
        </Card>
      </section>
      <section id="feedback" className="specimen">
        <div className="section-heading"><h2>反馈</h2><span>Alert · Progress</span></div>
        <div className="grid gap-5">
          <Alert><AlertTitle>草稿已保存在本机</AlertTitle><AlertDescription>联网后可继续同步，不会影响当前编辑。</AlertDescription></Alert>
          <Alert variant="destructive"><AlertTitle>暂时无法同步</AlertTitle><AlertDescription>请检查网络连接，然后重新尝试。</AlertDescription></Alert>
          <div><p id="upload-label" className="mb-3 text-sm">素材整理 · 60%</p><Progress value={60} aria-labelledby="upload-label" /></div>
          <div><p id="pending-label" className="mb-3 text-sm text-muted-foreground">正在准备预览 · 进度未知</p><Progress value={null} aria-labelledby="pending-label" /></div>
        </div>
      </section>
      <section id="navigation" className="specimen">
        <div className="section-heading"><h2>切换与展开</h2><span>Tabs · Accordion</span></div>
        <Tabs defaultValue="overview">
          <TabsList aria-label="作品信息">
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="details">详情</TabsTrigger>
            <TabsTrigger value="history" disabled>历史记录</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">用一眼能读懂的结构，呈现作品的主要信息。</TabsContent>
          <TabsContent value="details">创建于今天。支持中英文、长标题与多段正文。</TabsContent>
          <TabsContent value="history">暂无历史记录。</TabsContent>
        </Tabs>
        <Accordion defaultValue={["themes"]}>
          <AccordionItem value="themes"><AccordionTrigger>三个主题可以自由切换吗？</AccordionTrigger><AccordionContent>可以。白纸、宣纸和墨纸共享组件结构，切换 data-theme 即可改变语义色彩。</AccordionContent></AccordionItem>
          <AccordionItem value="ownership"><AccordionTrigger>安装后可以修改组件吗？</AccordionTrigger><AccordionContent>可以。Registry 分发源码，安装后的组件由你的项目管理，保留 MIT 许可即可修改和分发。</AccordionContent></AccordionItem>
          <AccordionItem value="later" disabled><AccordionTrigger>更多主题（即将提供）</AccordionTrigger><AccordionContent>更多主题仍在设计中。</AccordionContent></AccordionItem>
        </Accordion>
      </section>
      <section id="dialog" className="specimen">
        <div className="section-heading"><h2>对话框</h2><span>Dialog</span></div>
        <p>需要决定时再出现，支持 Escape 关闭和焦点返回。</p>
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>发布作品</DialogTrigger>
          <DialogContent>
            <DialogTitle>发布这篇作品？</DialogTitle>
            <DialogDescription>这是组件演示。确认后只更新本页提示。</DialogDescription>
            <p className="text-sm leading-7">一页之间 · 阅读清单</p>
            <DialogFooter>
              <DialogClose render={<Button variant="ghost" />}>继续编辑</DialogClose>
              <DialogClose render={<Button />} onClick={() => setPublished(true)}>确认发布</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <p role="status" className="mt-4 text-sm text-muted-foreground">{published ? "演示：作品已发布。" : "尚未发布。"}</p>
      </section>
    </>
  );
}
