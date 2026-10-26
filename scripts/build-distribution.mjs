import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const site = JSON.parse(readFileSync(join(root, "site.json"), "utf8"));
const skill = join(root, "skills/zhi");

function filesIn(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...filesIn(path));
    else files.push(path);
  }
  return files;
}

function copy(source, destination) {
  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination, { recursive: true });
}

for (const directory of ["references", "assets"]) {
  rmSync(join(skill, directory), { recursive: true, force: true });
  mkdirSync(join(skill, directory), { recursive: true });
}

const docs = join(root, "docs");
for (const file of filesIn(docs).filter((path) => path.endsWith(".md"))) {
  const destination = join(skill, "references", relative(docs, file));
  const content = readFileSync(file, "utf8").replace(/\]\(([^)]+)\)/g, (match, target) => {
    if (/^(https?:|#)/.test(target)) return match;
    const absolute = resolve(dirname(file), target.split("#")[0]);
    if (absolute.startsWith(docs + "/")) return match;
    return `](${site.repository}/blob/main/${relative(root, absolute)}${target.includes("#") ? "#" + target.split("#")[1] : ""})`;
  });
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, content);
}

for (const name of ["tokens.json", "preview.png", "figma.json", "figma-snapshot.json", "components", "motifs", "textures"]) {
  copy(join(root, "design", name), join(skill, "assets", name));
}
copy(join(root, "registry/themes/zhi.css"), join(skill, "assets/theme.css"));
copy(join(root, "LICENSE"), join(skill, "assets/LICENSE"));

const publicRoot = join(root, "public");
copy(join(root, "design"), join(publicRoot, "design"));
copy(join(root, "LICENSE"), join(publicRoot, "LICENSE"));
copy(skill, join(publicRoot, "skill"));
mkdirSync(join(publicRoot, "downloads"), { recursive: true });
for (const [name, folder, parent] of [["zhi-skill.zip", "zhi", join(root, "skills")], ["zhi-design.zip", "design", root]]) {
  const destination = join(publicRoot, "downloads", name);
  if (existsSync(destination)) rmSync(destination);
  const entries = name === "zhi-design.zip" ? [folder, "LICENSE"] : [folder];
  execFileSync("zip", ["-q", "-r", destination, ...entries], { cwd: parent });
}

const index = ["# Zhi", "", site.description, "", "React + Tailwind CSS v4 + Base UI. Source distribution through shadcn Registry.", "", `Registry: ${site.url}r/{name}.json`, `Skill: ${site.url}skill/SKILL.md`, ""];
for (const file of filesIn(docs).filter((path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const title = text.match(/^# (.+)$/m)?.[1] ?? relative(docs, file);
  const slug = relative(docs, file).replace(/\.md$/, "");
  index.push(`- [${title}](${site.url}docs/${slug}/)`);
}
writeFileSync(join(publicRoot, "llms.txt"), index.join("\n") + "\n");
writeFileSync(join(publicRoot, "llms-full.txt"), filesIn(docs).filter((path) => path.endsWith(".md")).map((file) => readFileSync(file, "utf8")).join("\n\n---\n\n"));
console.log("Built Skill references, assets, design downloads and llms.txt from project sources");
