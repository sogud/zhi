import { useRef, useState } from "react";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Textarea } from "@/registry/ui/textarea";
import { Checkbox } from "@/registry/ui/checkbox";
import { Switch } from "@/registry/ui/switch";
import { Badge } from "@/registry/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/registry/ui/alert";
import { Progress } from "@/registry/ui/progress";
import { Separator } from "@/registry/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/registry/ui/select";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/registry/ui/dialog";
import { base } from "./documents";
import "./application-examples.css";

const articles = [
  { id: "daily", title: "把阅读留在日常里", category: "阅读", minutes: 4, paragraphs: [
    "每天读一点，不必从宏大的计划开始。把一本书放在常坐的位置，留出一小段不被打断的时间。今天读到哪里，就从哪里停下来。",
    "遇到喜欢的段落，可以先读完，再用自己的话记一笔。记住的未必是原句，也可能是它让你想起的一件事。这样的笔记，比一页整齐的摘抄更接近自己。",
    "阅读没有统一的速度。有些篇章适合一路往下读，有些文字值得慢一点。重要的是看懂了什么，以及它怎样改变了下一次观察。",
  ] },
  { id: "notes", title: "一页笔记的分寸", category: "笔记", minutes: 3, paragraphs: [
    "一页笔记不必收下所有信息。先写一个能够说清内容的标题，再留下最有用的两三个要点。以后回来看的时候，能重新找到当时的问题，就已经足够。",
    "把引文和自己的想法分开，把已经确认的结论和仍在考虑的疑问分开。清楚的关系，会比更多的颜色更有帮助。",
    "写完以后读一遍，删掉重复的句子，补上缺少的来源。给下一次阅读留下一个明确的起点。",
  ] },
  { id: "writing", title: "写作前，先留一点空白", category: "写作", minutes: 5, paragraphs: [
    "打开草稿后，可以先写下想回答的问题。暂时不用找一个漂亮的开头，也不用决定文章最后会有多长。",
    "从最确定的一句话开始，再补上支持它的观察和例子。遇到没有想清楚的地方，留下标记，继续写自己知道的部分。",
    "初稿完成后再调整顺序。让每一段都有自己的作用，也让读者知道，为什么下一段会出现在这里。",
  ] },
];

function ReadingWorkspace({ onOpenDrafts }: { onOpenDrafts: () => void }) {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [focused, setFocused] = useState(false);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [noteState, setNoteState] = useState<{ kind: "idle" } | { kind: "saved" | "error"; articleId: string }>({ kind: "idle" });
  const article = articles[active] ?? articles[0];
  const note = notes[article.id] ?? "";
  const matches = articles.filter((item) => `${item.title} ${item.category}`.includes(query.trim()));
  const error = noteState.kind === "error" && noteState.articleId === article.id;

  function toggleComplete(checked: boolean) {
    const next = new Set(completed);
    if (checked) next.add(article.id);
    else next.delete(article.id);
    setCompleted(next);
  }

  function saveNote() {
    setNoteState({ kind: note.trim() ? "saved" : "error", articleId: article.id });
  }

  return (
    <div className={`reading-workspace ${focused ? "is-focused" : ""}`}>
      <aside className="reading-sidebar" aria-label="阅读清单">
        <div className="example-section-label"><h2>阅读清单</h2><Badge variant="outline">{articles.length} 篇</Badge></div>
        <Input type="search" aria-label="搜索阅读清单" placeholder="搜索篇目" value={query} onChange={(event) => setQuery(event.target.value)} />
        <nav aria-label="篇目">
          {matches.map((item) => <Button key={item.id} variant="ghost" className="reading-entry" aria-current={article.id === item.id ? "page" : undefined} onClick={() => setActive(articles.indexOf(item))}>
            <span>{item.title}</span><small>{item.category} · {item.minutes} 分钟{completed.has(item.id) ? " · 已读" : ""}</small>
          </Button>)}
          {!matches.length && <div className="example-empty"><p>没有找到篇目。</p><Button size="sm" variant="ghost" onClick={() => setQuery("")}>清除搜索</Button></div>}
        </nav>
        <Separator />
        <div className="reading-completion"><p id="reading-progress-label">已读完 {completed.size} / {articles.length} 篇</p><Progress value={completed.size / articles.length * 100} aria-labelledby="reading-progress-label" /></div>
        <Button variant="outline" className="w-full" onClick={onOpenDrafts}>整理我的草稿</Button>
      </aside>
      <div className="reading-main">
        <div className="reading-toolbar"><Badge variant="outline">{article.category}</Badge><Label className="example-inline-label"><Switch checked={focused} onCheckedChange={setFocused} />专注阅读</Label></div>
        <article className="reading-article">
          <h2>{article.title}</h2><p className="reading-meta">一页编辑部 · 约 {article.minutes} 分钟</p>
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
        <div className="reading-pagination"><Label className="example-inline-label"><Checkbox checked={completed.has(article.id)} onCheckedChange={toggleComplete} />标记读完</Label><div><Button variant="ghost" size="sm" disabled={active === 0} onClick={() => setActive(active - 1)}>上一篇</Button><Button variant="outline" size="sm" disabled={active === articles.length - 1} onClick={() => setActive(active + 1)}>下一篇</Button></div></div>
        <Separator className="my-8" />
        <Card className="reading-note">
          <CardHeader><CardTitle>阅读札记</CardTitle><CardDescription>用自己的话，留下一点想法。</CardDescription></CardHeader>
          <CardContent>
            <Label htmlFor="reading-note">我的想法</Label>
            <Textarea id="reading-note" className="mt-3" placeholder="这段文字让我想到……" value={note} aria-invalid={error ? true : undefined} aria-describedby="reading-note-help" onChange={(event) => { setNotes({ ...notes, [article.id]: event.target.value }); setNoteState({ kind: "idle" }); }} />
            <p id="reading-note-help" className={error ? "example-error" : "example-help"}>{error ? "先写下一点想法，再保存札记。" : "每篇文章分别保留札记，切换篇目时不会丢失。"}</p>
          </CardContent>
          <CardFooter><Button onClick={saveNote}>保存札记</Button></CardFooter>
        </Card>
        {noteState.kind === "saved" && noteState.articleId === article.id && <Alert role="status" className="mt-5"><AlertTitle>札记已保存</AlertTitle><AlertDescription>你可以继续阅读，或切换到其他篇目。</AlertDescription></Alert>}
      </div>
    </div>
  );
}

type Draft = { id: string; title: string; body: string; updated: string; status: "draft" | "archived" };
type Editor = { kind: "closed" } | { kind: "new"; title: string; body: string; attempted: boolean } | { kind: "edit"; id: string; title: string; body: string; attempted: boolean };
const initialDrafts: Draft[] = [
  { id: "1", title: "在日常里留一点阅读的时间", body: "每天读一点，先从能够坚持的小事开始。", updated: "今天", status: "draft" },
  { id: "2", title: "关于一页笔记的想法", body: "标题、要点、自己的疑问。让以后的自己能重新找到起点。", updated: "昨天", status: "draft" },
  { id: "3", title: "上个月的写作清单", body: "整理完成的选题和暂时搁置的想法。", updated: "上个月", status: "archived" },
];

function DraftWorkspace() {
  const [drafts, setDrafts] = useState(initialDrafts);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [notice, setNotice] = useState("");
  const [editor, setEditor] = useState<Editor>({ kind: "closed" });
  const opener = useRef<HTMLElement | null>(null);
  const nextId = useRef(4);
  const visible = drafts.filter((draft) => (filter === "all" || draft.status === filter) && `${draft.title} ${draft.body}`.includes(query.trim()));
  const selectable = visible.filter((draft) => draft.status === "draft");
  const allSelected = selectable.length > 0 && selectable.every((draft) => selected.has(draft.id));

  function saveDraft() {
    if (editor.kind === "closed") return;
    if (!editor.title.trim()) { setEditor({ ...editor, attempted: true }); return; }
    if (editor.kind === "new") {
      const draft: Draft = { id: String(nextId.current++), title: editor.title.trim(), body: editor.body, updated: "刚刚", status: "draft" };
      setDrafts([draft, ...drafts]);
    } else {
      setDrafts(drafts.map((draft) => draft.id === editor.id ? { ...draft, title: editor.title.trim(), body: editor.body, updated: "刚刚" } : draft));
    }
    setQuery(""); setFilter("all"); setSelected(new Set());
    setNotice(`已保存「${editor.title.trim()}」。`);
    setEditor({ kind: "closed" });
  }

  function archiveSelected() {
    setDrafts(drafts.map((draft) => selected.has(draft.id) ? { ...draft, status: "archived" } : draft));
    setNotice(`已归档 ${selected.size} 篇草稿。`);
    setSelected(new Set());
  }

  return (
    <Dialog open={editor.kind !== "closed"} onOpenChange={(open) => { if (!open) setEditor({ kind: "closed" }); }}>
      <section className="draft-workspace" aria-labelledby="drafts-title">
        <div className="draft-heading"><div><h2 id="drafts-title">我的草稿</h2><p>把零散的想法，慢慢写成文章。</p></div><DialogTrigger render={<Button />} onClick={(event) => { opener.current = event.currentTarget; setEditor({ kind: "new", title: "", body: "", attempted: false }); }}>新建草稿</DialogTrigger></div>
        <div className="draft-filters"><Input type="search" aria-label="搜索草稿" placeholder="搜索标题或内容" value={query} onChange={(event) => { setQuery(event.target.value); setSelected(new Set()); }} /><Select value={filter} items={{ all: "所有状态", draft: "草稿", archived: "已归档" }} onValueChange={(value) => { if (value) { setFilter(value); setSelected(new Set()); } }}><SelectTrigger aria-label="筛选草稿状态"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">所有状态</SelectItem><SelectItem value="draft">草稿</SelectItem><SelectItem value="archived">已归档</SelectItem></SelectContent></Select></div>
        {notice && <Alert role="status" className="mb-5"><AlertTitle>{notice}</AlertTitle></Alert>}
        <div className="draft-selection"><Label className="example-inline-label"><Checkbox checked={allSelected} disabled={!selectable.length} onCheckedChange={(checked) => setSelected(new Set(checked ? selectable.map((draft) => draft.id) : []))} />全选当前草稿</Label><Button variant="outline" size="sm" disabled={!selected.size} onClick={archiveSelected}>归档已选{selected.size ? `（${selected.size}）` : ""}</Button></div>
        <ul className="draft-list">
          {visible.map((draft) => <li key={draft.id}>
            <Checkbox aria-label={`选择「${draft.title}」`} disabled={draft.status === "archived"} checked={selected.has(draft.id)} onCheckedChange={(checked) => { const next = new Set(selected); if (checked) next.add(draft.id); else next.delete(draft.id); setSelected(next); }} />
            <div className="draft-copy"><h3>{draft.title}</h3><p>{draft.body || "还没有正文。"}</p><div><Badge variant={draft.status === "draft" ? "default" : "outline"}>{draft.status === "draft" ? "草稿" : "已归档"}</Badge><span>{draft.updated}</span></div></div>
            <div className="draft-actions"><Button variant="ghost" size="sm" aria-label={`编辑「${draft.title}」`} onClick={(event) => { opener.current = event.currentTarget; setEditor({ kind: "edit", id: draft.id, title: draft.title, body: draft.body, attempted: false }); }}>编辑</Button>{draft.status === "archived" && <Button variant="outline" size="sm" aria-label={`恢复「${draft.title}」`} onClick={() => { setDrafts(drafts.map((item) => item.id === draft.id ? { ...item, status: "draft" } : item)); setNotice(`已恢复「${draft.title}」。`); }}>恢复</Button>}</div>
          </li>)}
        </ul>
        {!visible.length && <div className="example-empty draft-empty"><h3>没有符合条件的草稿</h3><p>换个关键词，或查看所有状态。</p><Button variant="outline" onClick={() => { setQuery(""); setFilter("all"); setSelected(new Set()); }}>清除筛选</Button></div>}
        <p className="draft-count">共 {visible.length} 篇</p>
        <Accordion className="draft-help"><AccordionItem value="archive"><AccordionTrigger>归档后的草稿放在哪里？</AccordionTrigger><AccordionContent>在状态筛选中选择“已归档”即可查看。归档不会删除内容，可以继续编辑，也可以恢复到草稿列表。</AccordionContent></AccordionItem></Accordion>
      </section>
      <DialogContent finalFocus={opener}>
        <DialogTitle>{editor.kind === "new" ? "新建草稿" : "编辑草稿"}</DialogTitle>
        <DialogDescription>先留下想法，再慢慢整理。</DialogDescription>
        {editor.kind !== "closed" && <div className="draft-editor"><Label htmlFor="draft-editor-title">标题</Label><Input id="draft-editor-title" value={editor.title} aria-invalid={editor.attempted && !editor.title.trim() ? true : undefined} aria-describedby="draft-title-help" onChange={(event) => setEditor({ ...editor, title: event.target.value })} /><p id="draft-title-help" className={editor.attempted && !editor.title.trim() ? "example-error" : "example-help"}>{editor.attempted && !editor.title.trim() ? "请填写标题。" : "用一句话说清想写的内容。"}</p><Label htmlFor="draft-editor-body">正文</Label><Textarea id="draft-editor-body" rows={5} value={editor.body} onChange={(event) => setEditor({ ...editor, body: event.target.value })} /></div>}
        <DialogFooter><DialogClose render={<Button variant="ghost" />}>取消</DialogClose><Button onClick={saveDraft}>保存草稿</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ApplicationExamples() {
  const [tab, setTab] = useState("reading");
  return (
    <div className="application-examples">
      <header className="examples-heading"><div><p>应用示例</p><h1>让组件一起工作。</h1><span>阅读、记录与整理，沿用同一套字重、间距和微圆角。</span></div><a href={base + "design-review/"}>查看设置页圆角对照</a></header>
      <div className="examples-app">
        <div className="examples-app-title"><span>一页</span><span>阅读与写作空间</span></div>
        <Tabs value={tab} onValueChange={(value) => { if (value === "reading" || value === "drafts") setTab(value); }}>
          <TabsList aria-label="工作区" className="examples-tabs"><TabsTrigger value="reading">阅读</TabsTrigger><TabsTrigger value="drafts">草稿</TabsTrigger></TabsList>
          <TabsContent value="reading" keepMounted className="p-0"><ReadingWorkspace onOpenDrafts={() => setTab("drafts")} /></TabsContent>
          <TabsContent value="drafts" keepMounted className="p-0"><DraftWorkspace /></TabsContent>
        </Tabs>
      </div>
      <p className="examples-note">交互演示使用示例内容。札记和草稿只保留在本次预览中，刷新页面后重置。</p>
    </div>
  );
}
