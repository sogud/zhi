import { marked } from "marked";
import site from "../site.json";

export const base = import.meta.env.BASE_URL;
export const docHref = (slug: string) => `${base}docs/${slug}/`;

const sources = import.meta.glob<string>("../docs/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const documents = Object.entries(sources).map(([path, markdown]) => {
  const slug = path.replace("../docs/", "").replace(/\.md$/, "");
  const title = markdown.match(/^# (.+)$/m)?.[1] ?? slug;
  const description = markdown.split("\n").find((line) => line.trim() && !line.startsWith("#")) ?? "";
  return { slug, title, description, markdown };
});

export function renderDocument(markdown: string, slug: string) {
  const renderer = new marked.Renderer();
  renderer.link = ({ href, text }) => {
    let target = href;
    if (!/^(https?:|mailto:|#)/.test(href)) {
      const path = new URL(href, `https://source.invalid/docs/${slug}.md`);
      if (path.pathname.startsWith("/docs/") && path.pathname.endsWith(".md")) {
        target = docHref(path.pathname.slice(6, -3)) + path.hash;
      } else if (path.pathname.startsWith("/design/")) {
        target = base + path.pathname.slice(1);
      } else {
        target = `${site.repository}/blob/main${path.pathname}${path.hash}`;
      }
    }
    return `<a href="${target.replaceAll('"', '&quot;')}">${text}</a>`;
  };
  return marked.parse(markdown, { renderer, async: false });
}
