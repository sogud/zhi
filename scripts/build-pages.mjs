import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { marked } from "marked";

const root = resolve(import.meta.dirname, "..");
const output = join(root, "dist");
const html = readFileSync(join(output, "index.html"), "utf8");
const site = JSON.parse(readFileSync(join(root, "site.json"), "utf8"));
const entries = [];

function discover(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) discover(path);
    else if (entry.name.endsWith(".md")) entries.push(path);
  }
}
discover(join(root, "docs"));
const urls = [site.url, site.url + "playground/", site.url + "design-review/", site.url + "examples/"];
for (const path of entries) {
  const markdown = readFileSync(path, "utf8");
  const slug = relative(join(root, "docs"), path).replace(/\.md$/, "");
  const title = (markdown.match(/^# (.+)$/m)?.[1] ?? "Zhi").replaceAll("&", "&amp;").replaceAll("<", "&lt;");
  const canonical = site.url + "docs/" + slug + "/";
  const page = html.replace(/<title>.*?<\/title>/, `<title>${title} · 纸 Zhi</title>`)
    .replace("</head>", `<link rel="canonical" href="${canonical}" /></head>`)
    .replace('<div id="root"></div>', `<div id="root"><article>${marked.parse(markdown, { async: false })}</article></div>`);
  const directory = join(output, "docs", slug);
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, "index.html"), page);
  urls.push(canonical);
}
mkdirSync(join(output, "playground"), { recursive: true });
cpSync(join(output, "index.html"), join(output, "playground/index.html"));
mkdirSync(join(output, "design-review"), { recursive: true });
writeFileSync(join(output, "design-review/index.html"), html.replace(/<title>.*?<\/title>/, "<title>设置页设计对照 · 纸 Zhi</title>"));
mkdirSync(join(output, "examples"), { recursive: true });
writeFileSync(join(output, "examples/index.html"), html.replace(/<title>.*?<\/title>/, "<title>应用示例 · 纸 Zhi</title>"));
writeFileSync(join(output, "404.html"), html);
writeFileSync(join(output, ".nojekyll"), "");
writeFileSync(join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${url}</loc></url>`).join("")}</urlset>`);
console.log(`Built ${entries.length} static documentation pages, playground and sitemap`);
