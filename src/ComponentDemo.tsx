import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Textarea } from "@/registry/ui/textarea";
import { Label } from "@/registry/ui/label";
import { Checkbox } from "@/registry/ui/checkbox";
import { Switch } from "@/registry/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/registry/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/registry/ui/card";
import { Badge } from "@/registry/ui/badge";
import { Separator } from "@/registry/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/registry/ui/alert";
import { Progress } from "@/registry/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/registry/ui/dialog";

export function ComponentDemo({ name }: { name: string }) {
  switch (name) {
    case "button": return <div className="flex flex-wrap gap-4"><Button>保存修改</Button><Button variant="outline">预览</Button><Button variant="seal">落印</Button><Button variant="ghost">取消</Button><Button disabled>暂不可用</Button></div>;
    case "input": return <div className="demo-field"><Label htmlFor="demo-input">作品名称</Label><Input id="demo-input" placeholder="给作品起个名字" /></div>;
    case "textarea": return <div className="demo-field"><Label htmlFor="demo-textarea">作品简介</Label><Textarea className="zhi-paper-ruled" id="demo-textarea" placeholder="写下你的想法" /></div>;
    case "label": return <div className="demo-field"><Label htmlFor="demo-label">作者</Label><Input id="demo-label" placeholder="你的名字" /></div>;
    case "checkbox": return <Label className="flex items-center gap-3"><Checkbox defaultChecked />保留阅读进度</Label>;
    case "switch": return <Label className="flex items-center gap-3"><Switch defaultChecked />专注模式</Label>;
    case "radio-group": return <RadioGroup defaultValue="private" aria-label="可见范围"><Label className="flex items-center gap-3"><RadioGroupItem value="private" />仅自己可见</Label><Label className="flex items-center gap-3"><RadioGroupItem value="public" />公开分享</Label><Label className="flex items-center gap-3"><RadioGroupItem value="team" disabled />团队空间</Label></RadioGroup>;
    case "select": return <div className="demo-field"><Label htmlFor="demo-select">阅读密度</Label><Select defaultValue="comfortable" items={{ comfortable: "舒适", compact: "紧凑", spacious: "宽松" }}><SelectTrigger id="demo-select"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="comfortable">舒适</SelectItem><SelectItem value="compact">紧凑</SelectItem><SelectItem value="spacious">宽松</SelectItem></SelectContent></Select></div>;
    case "card": return <Card className="w-full max-w-sm"><CardHeader><CardTitle>一页之间</CardTitle><CardDescription>一份给日常留白的阅读清单。</CardDescription></CardHeader><CardContent><Badge variant="outline">随笔</Badge><p className="mb-0 mt-4 text-sm leading-7">把标题、正文与行动放在各自的位置。</p></CardContent></Card>;
    case "badge": return <div className="flex flex-wrap gap-3"><Badge>草稿</Badge><Badge variant="outline">随笔</Badge><Badge variant="accent">已发布</Badge><Badge variant="destructive">需要修改</Badge></div>;
    case "separator": return <div className="w-full max-w-sm text-sm"><p>内容在这里开始。</p><Separator /><p>通过分隔，建立清楚的关系。</p></div>;
    case "alert": return <Alert className="w-full"><AlertTitle>草稿已保存</AlertTitle><AlertDescription>可以放心离开，稍后继续编辑。</AlertDescription></Alert>;
    case "progress": return <div className="w-full max-w-sm"><p className="mb-3 text-sm">素材整理 · 60%</p><Progress value={60} aria-label="素材整理" /></div>;
    case "tabs": return <Tabs defaultValue="overview" className="w-full"><TabsList aria-label="作品信息"><TabsTrigger value="overview">概览</TabsTrigger><TabsTrigger value="details">详情</TabsTrigger></TabsList><TabsContent value="overview">用清楚的结构，呈现作品的主要信息。</TabsContent><TabsContent value="details">支持中英文、长标题与多段正文。</TabsContent></Tabs>;
    case "accordion": return <Accordion defaultValue={["themes"]} className="w-full"><AccordionItem value="themes"><AccordionTrigger>三个主题可以自由切换吗？</AccordionTrigger><AccordionContent>可以。在文档根节点设置 data-theme，颜色会随语义变量一起切换。</AccordionContent></AccordionItem><AccordionItem value="source"><AccordionTrigger>安装后可以修改组件吗？</AccordionTrigger><AccordionContent>可以。组件以源码分发，你可以按项目需要修改。</AccordionContent></AccordionItem></Accordion>;
    case "dialog": return <Dialog><DialogTrigger render={<Button variant="outline" />}>打开对话框</DialogTrigger><DialogContent><DialogTitle>留一点空白</DialogTitle><DialogDescription>这是一个对话框示例。按 Escape 或点击关闭按钮返回。</DialogDescription><DialogFooter><DialogClose render={<Button />}>关闭</DialogClose></DialogFooter></DialogContent></Dialog>;
    default: return null;
  }
}
