import { useEffect, useState } from "react";
import tokens from "../design/tokens.json";
import registry from "../registry.json";
import { ExpandedSpecimens } from "./ExpandedSpecimens";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Checkbox } from "@/registry/ui/checkbox";
import { Switch } from "@/registry/ui/switch";

export function App() {
  const [theme, setTheme] = useState("baizhi");
  const [checked, setChecked] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [saved, setSaved] = useState(false);
  const registryConfig = JSON.stringify(
    { registries: { "@zhi": "https://sogud.github.io/zhi/r/{name}.json" } },
    null,
    2,
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <main className="site">
      <header className="site-header">
        <a className="brand" href="#">
          <span className="brand-mark">纸</span>
          <span>Zhi</span>
        </a>
        <nav aria-label="主题" className="theme-nav">
          {tokens.themes.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={theme === item.id}
              onClick={() => setTheme(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <a href="#install">安装组件</a>
      </header>
      <section className="intro">
        <p className="intro-meta">纸 · Zhi 0.3.0 Preview · {registry.items.filter((item) => item.type === "registry:ui").length} 个组件</p>
        <h1>
          让重要的事，
          <br />
          清楚呈现。
        </h1>
        <p className="intro-description">
          以排版、留白与对齐，构建安静而清晰的界面。
          <br />
          从一张白纸开始，形成自己的秩序。
        </p>
      </section>
      <div className="workbench">
        <aside className="component-index">
          <a href="#button">按钮</a>
          <a href="#input">输入框</a>
          <a href="#selection">选择控件</a>
          <a href="#forms">表单补充</a>
          <a href="#content">内容与层次</a>
          <a href="#feedback">反馈</a>
          <a href="#navigation">切换与展开</a>
          <a href="#dialog">对话框</a>
          <a href="#composition">组合示例</a>
          <a href="#install">安装组件</a>
        </aside>
        <div className="specimens">
          <section id="button" className="specimen">
            <div className="section-heading">
              <h2>按钮</h2>
              <span>Button</span>
            </div>
            <p>通过浓淡区分操作层级，让主要动作清楚可见。</p>
            <div className="component-row">
              <Button>保存修改</Button>
              <Button variant="seal">落印</Button>
              <Button variant="outline">预览</Button>
              <Button variant="ghost">取消</Button>
              <Button disabled>暂不可用</Button>
            </div>
            <div className="component-row">
              <Button size="sm">小号按钮</Button>
              <Button variant="outline" size="sm">
                小号次要
              </Button>
            </div>
          </section>
          <section id="input" className="specimen">
            <div className="section-heading">
              <h2>输入框</h2>
              <span>Input</span>
            </div>
            <div className="input-grid">
              <div className="field">
                <label htmlFor="work-name">作品名称</label>
                <Input
                  id="work-name"
                  placeholder="给作品起个名字"
                  aria-describedby="work-name-help"
                />
                <span id="work-name-help">清楚的标签，简短的提示。</span>
              </div>
              <div className="field">
                <label htmlFor="work-link">链接</label>
                <Input
                  id="work-link"
                  defaultValue="zhi"
                  aria-invalid="true"
                  aria-describedby="link-error"
                />
                <span id="link-error" className="error">
                  请输入完整的链接。
                </span>
              </div>
            </div>
          </section>
          <section id="selection" className="specimen">
            <div className="section-heading">
              <h2>选择控件</h2>
              <span>Checkbox · Switch</span>
            </div>
            <div className="selection-grid">
              <label className="selection-label">
                <Checkbox checked={checked} onCheckedChange={setChecked} />
                保留阅读进度
              </label>
              <label className="selection-label">
                <Switch checked={enabled} onCheckedChange={setEnabled} />
                专注模式
              </label>
            </div>
          </section>
          <ExpandedSpecimens />
          <section id="composition" className="specimen">
            <div className="section-heading">
              <h2>组合示例</h2>
              <span>设置分组</span>
            </div>
            <div className="settings-example">
              <div className="settings-copy">
                <h3>阅读偏好</h3>
                <p>让内容按照你习惯的方式呈现。</p>
              </div>
              <label className="setting-row">
                <span>
                  <strong>记住上次的位置</strong>
                  <small>下次打开时，从离开的地方继续。</small>
                </span>
                <Switch defaultChecked />
              </label>
              <div className="settings-footer">
                <p role="status">
                  {saved ? "已保存阅读偏好。" : "只在需要时显示操作。"}
                </p>
                <Button onClick={() => setSaved(true)}>保存偏好</Button>
              </div>
            </div>
          </section>
          <section id="install" className="specimen">
            <div className="section-heading">
              <h2>安装组件</h2>
              <span>shadcn Registry</span>
            </div>
            <p>
              React + Tailwind CSS v4。通过公开 Registry 安装组件源码。
            </p>
            <p>在使用者项目的 components.json 中合并配置：</p>
            <pre className="code-example">
              <code>{registryConfig}</code>
            </pre>
            <pre className="code-example">
              <code>pnpm dlx shadcn@latest add @zhi/button</code>
            </pre>
            <pre className="code-example">
              <code>
                {
                  'import { Button } from "@/components/ui/button"\n\n<Button>保存修改</Button>'
                }
              </code>
            </pre>
          </section>
        </div>
      </div>
      <footer className="site-footer">
        <span>纸 · Zhi</span>
        <span>Base UI · shadcn Registry</span>
        <a href={`${import.meta.env.BASE_URL}licenses/NOTICE.txt`}>许可证</a>
        <span>0.3.0 Preview</span>
      </footer>
    </main>
  );
}
