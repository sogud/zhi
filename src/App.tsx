import { useEffect, useState } from "react";
import tokens from "../design/tokens.json";
import { ZButton } from "@/registry/ui/button";
import { ZInput } from "@/registry/ui/input";
import { ZCheckbox } from "@/registry/ui/checkbox";
import { ZSwitch } from "@/registry/ui/switch";

export function App() {
  const [theme, setTheme] = useState("baizhi");
  const [checked, setChecked] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [saved, setSaved] = useState(false);
  const registryConfig = JSON.stringify(
    { registries: { "@z": `${window.location.origin}/r/{name}.json` } },
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
          <span>Z</span>
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
        <p className="intro-meta">纸 · Z 0.1.0 Preview</p>
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
          <a href="#composition">组合示例</a>
          <a href="#install">安装组件</a>
        </aside>
        <div className="specimens">
          <section id="button" className="specimen">
            <div className="section-heading">
              <h2>按钮</h2>
              <span>ZButton</span>
            </div>
            <p>通过浓淡区分操作层级，让主要动作清楚可见。</p>
            <div className="component-row">
              <ZButton>保存修改</ZButton>
              <ZButton variant="outline">预览</ZButton>
              <ZButton variant="ghost">取消</ZButton>
              <ZButton disabled>暂不可用</ZButton>
            </div>
            <div className="component-row">
              <ZButton size="sm">小号按钮</ZButton>
              <ZButton variant="outline" size="sm">
                小号次要
              </ZButton>
            </div>
          </section>
          <section id="input" className="specimen">
            <div className="section-heading">
              <h2>输入框</h2>
              <span>ZInput</span>
            </div>
            <div className="input-grid">
              <div className="field">
                <label htmlFor="work-name">作品名称</label>
                <ZInput
                  id="work-name"
                  placeholder="给作品起个名字"
                  aria-describedby="work-name-help"
                />
                <span id="work-name-help">清楚的标签，简短的提示。</span>
              </div>
              <div className="field">
                <label htmlFor="work-link">链接</label>
                <ZInput
                  id="work-link"
                  defaultValue="z"
                  aria-invalid="true"
                  aria-describedby="link-error"
                />
                <span id="link-error" className="error">
                  请输入完整的链接。
                </span>
              </div>
            </div>
          </section>
          <section id="install" className="specimen">
            <div className="section-heading">
              <h2>安装组件</h2>
              <span>shadcn Registry</span>
            </div>
            <p>
              React + Tailwind CSS v4。试用站目前仅拥有者可访问，CLI
              安装请使用本地 Registry。
            </p>
            <p>在 components.json 中配置 Registry 地址：</p>
            <pre className="code-example">
              <code>{registryConfig}</code>
            </pre>
            <pre className="code-example">
              <code>pnpm dlx shadcn@latest add @z/button</code>
            </pre>
            <pre className="code-example">
              <code>
                {
                  'import { ZButton } from "@/components/ui/button"\n\n<ZButton>保存修改</ZButton>'
                }
              </code>
            </pre>
          </section>
          <section id="selection" className="specimen">
            <div className="section-heading">
              <h2>选择控件</h2>
              <span>ZCheckbox · ZSwitch</span>
            </div>
            <div className="selection-grid">
              <label className="selection-label">
                <ZCheckbox checked={checked} onCheckedChange={setChecked} />
                保留阅读进度
              </label>
              <label className="selection-label">
                <ZSwitch checked={enabled} onCheckedChange={setEnabled} />
                专注模式
              </label>
            </div>
          </section>
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
                <ZSwitch defaultChecked />
              </label>
              <div className="settings-footer">
                <p role="status">
                  {saved ? "已保存阅读偏好。" : "只在需要时显示操作。"}
                </p>
                <ZButton onClick={() => setSaved(true)}>保存偏好</ZButton>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="site-footer">
        <span>纸 · Z</span>
        <span>Base UI · shadcn Registry</span>
        <a href="/licenses/NOTICE.txt">许可证</a>
        <span>0.1.0 Preview</span>
      </footer>
    </main>
  );
}
