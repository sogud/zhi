import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import site from "../site.json";
import registry from "../registry.json";
import tokens from "../design/tokens.json";
import { base, documents, docHref, renderDocument } from "./documents";
import { ComponentDemo } from "./ComponentDemo";
import { NatureMotif } from "./NatureMotif";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/registry/ui/card";
import { Label } from "@/registry/ui/label";
import { Input } from "@/registry/ui/input";
import { Switch } from "@/registry/ui/switch";

const guides = ["installation", "design", "resources", "agent-skill", "components"];

export function DocsApp() {
  const route = decodeURIComponent(location.pathname.slice(base.length)).replace(/\/$/, "");
  const slug = route.startsWith("docs/") ? route.slice(5) : "";
  const document = documents.find((item) => item.slug === slug);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("zhi-theme");
      return tokens.themes.some((item) => item.id === saved) ? saved ?? "baizhi" : "baizhi";
    } catch { return "baizhi"; }
  });
  const components = registry.items.filter((item) => item.type === "registry:ui");
  const filtered = documents.filter((item) => `${item.title} ${item.description} ${item.slug}`.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    window.document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("zhi-theme", theme); } catch { /* The selected theme still works without storage. */ }
  }, [theme]);
  useEffect(() => {
    window.document.title = document ? `${document.title} · 纸 Zhi` : "纸 · Zhi — 排版有序，留白有度";
  }, [document]);

  async function copyCode(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof HTMLElement)) return;
    const button = event.target.closest("button[data-copy]");
    if (!button) return;
    const code = button.parentElement?.querySelector("code");
    if (!code) return;
    try { await navigator.clipboard.writeText(code.textContent ?? ""); button.textContent = "已复制"; }
    catch { button.textContent = "请手动复制"; }
  }

  const html = document ? renderDocument(document.markdown.replace(/^# .+\n/, ""), document.slug).replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/g, '<div class="doc-code"><button type="button" data-copy aria-label="复制代码">复制</button><pre><code$1>$2</code></pre></div>') : "";

  return (
    <div className="docs-site">
      <a className="skip-link" href="#main-content">跳到正文</a>
      <header className="docs-header">
        <a href={base} className="brand"><span className="brand-mark seal-brand">纸</span><span>Zhi</span></a>
        <nav aria-label="主导航"><a href={docHref("installation")}>文档</a><a href={base + "playground/"}>组件预览</a><a href={docHref("agent-skill")}>Skill</a><a href={site.repository}>GitHub</a></nav>
        <div className="docs-themes" role="group" aria-label="主题">
          {tokens.themes.map((item) => <button key={item.id} type="button" aria-pressed={theme === item.id} onClick={() => setTheme(item.id)}>{item.name}</button>)}
        </div>
      </header>
      {!route ? (
        <main id="main-content" className="home-main">
          <section className="home-hero">
            <div className="home-copy"><p className="home-note">纸 · Zhi / 开源组件库</p><h1>排版有序，<br />留白有度。</h1><p className="home-description">原生、简洁，让注意力回到重要的事情。<br />基于 Base UI，以源码交付你的界面。</p><div className="home-actions"><Button render={<a href={docHref("installation")} />} nativeButton={false}>开始使用</Button><Button variant="outline" render={<a href={docHref("components")} />} nativeButton={false}>浏览 {components.length} 个组件</Button></div><p className="home-stack">React · Tailwind CSS v4 · shadcn Registry</p></div>
            <div className="home-specimen"><NatureMotif name="bamboo" className="hero-bamboo" /><span className="specimen-caption">从一张白纸，开始。</span><Card><CardHeader><div><Badge variant="outline">阅读偏好</Badge></div><CardTitle>把时间留给内容</CardTitle><CardDescription>清楚的文字，安静的界面。</CardDescription></CardHeader><CardContent><div className="demo-field"><Label htmlFor="home-title">清单名称</Label><Input id="home-title" defaultValue="一页之间" /></div><Label className="home-setting"><span>记住上次阅读的位置</span><Switch defaultChecked /></Label><Button variant="seal" className="mt-6" render={<a href={base + "playground/"} />} nativeButton={false}>试试这些组件</Button></CardContent></Card><span className="specimen-caption home-colophon">当前主题：{tokens.themes.find((item) => item.id === theme)?.name}<span className="small-seal" aria-hidden="true">纸</span></span></div>
          </section>
          <section className="home-principles"><div><h2>留白</h2><p>给内容足够的空间，分清主次。</p></div><div><h2>对齐</h2><p>从标签到正文，让关系一目了然。</p></div><div><h2>墨色</h2><p>以浓淡表达层级，以朱色标注焦点。</p></div></section>
          <section className="nature-collection" aria-labelledby="nature-title">
            <div className="nature-heading"><h2 id="nature-title">纸上有景</h2><p>从笔墨纸砚，到竹影、云雨与雪。只在合适的地方，添一点笔意。</p></div>
            <div className="nature-studies">
              <div className="nature-study nature-study-snow"><NatureMotif name="snow" /><h3>雪</h3><p>冷白纸面，疏朗留白。</p><span>白纸与阅读空间</span></div>
              <div className="nature-study nature-study-bamboo"><NatureMotif name="bamboo" /><h3>竹</h3><p>青绿入墨，清润端正。</p><span>青竹主题与边角点缀</span></div>
              <div className="nature-study nature-study-cloud"><NatureMotif name="cloud" /><h3>云</h3><p>轻线舒展，留出空处。</p><span>空状态与云端保存插图</span></div>
              <div className="nature-study nature-study-rain"><NatureMotif name="rain" /><h3>雨</h3><p>细线疏密，有序呈现。</p><span>导入与同步状态插图</span></div>
            </div>
            <a className="nature-resource-link" href={docHref("resources")}>获取原创 SVG 与纸纹素材</a>
          </section>
          <section className="home-bottom"><div><h2>给人用，也给 Agent 用。</h2><p>组件源码、设计 tokens 与 Skill，一起交付。</p></div><a href={docHref("agent-skill")}>了解 Zhi Skill</a><a href={docHref("resources")}>获取设计资源</a></section>
        </main>
      ) : (
        <div className="docs-layout">
          <aside className="docs-sidebar">
            <button type="button" className="docs-menu-toggle" aria-expanded={menuOpen} aria-controls="docs-navigation" onClick={() => setMenuOpen(!menuOpen)}>文档目录 {menuOpen ? "−" : "+"}</button>
            <div id="docs-navigation" className={menuOpen ? "docs-navigation is-open" : "docs-navigation"}>
              <label className="search-label" htmlFor="docs-search">搜索文档</label><input id="docs-search" type="search" value={query} placeholder="组件名称、主题、安装…" onChange={(event) => setQuery(event.target.value)} />
              <nav aria-label="文档导航">
                {query ? <><p className="nav-heading" role="status">{filtered.length} 个结果</p>{filtered.map((item) => <a key={item.slug} href={docHref(item.slug)}>{item.title}</a>)}</> : <><p className="nav-heading">开始</p>{guides.map((id) => { const item = documents.find((entry) => entry.slug === id); return item ? <a key={id} href={docHref(id)} aria-current={slug === id ? "page" : undefined}>{item.title}</a> : null; })}<p className="nav-heading">组件 · {components.length}</p>{components.map((item) => <a key={item.name} href={docHref("components/" + item.name)} aria-current={slug === "components/" + item.name ? "page" : undefined}>{item.title}</a>)}</>}
              </nav>
            </div>
          </aside>
          <main id="main-content" className="docs-content">
            {document ? <><p className="doc-breadcrumb">{slug.startsWith("components/") ? "组件" : "文档"} / {document.title}</p><h1 className="doc-title">{document.title}</h1>{slug.startsWith("components/") && <div className="doc-demo"><span className="demo-caption">可交互预览</span><ComponentDemo name={slug.slice(11)} /></div>}<div className="prose" onClick={copyCode} dangerouslySetInnerHTML={{ __html: html }} /><a className="edit-link" href={`${site.repository}/blob/main/docs/${slug}.md`}>在 GitHub 查看源码文档</a></> : <><h1>没有找到这页文档</h1><p>请从左侧目录选择，或返回开始使用。</p><a href={docHref("installation")}>开始使用</a></>}
          </main>
        </div>
      )}
      <footer className="docs-footer"><span>纸 · Zhi</span><span>以 MIT 许可开放代码与原创设计。</span><a href={base + "licenses/NOTICE.txt"}>许可证与字体说明</a></footer>
    </div>
  );
}
