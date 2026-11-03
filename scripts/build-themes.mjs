import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";
import { compile } from "sass";

const root = resolve(import.meta.dirname, "..");
const themes = join(root, "themes");
const output = join(root, "public", "themes");
const downloads = join(root, "public", "downloads");

const obsidian = join(themes, "obsidian");
const result = compile(join(obsidian, "theme.scss"), {
  style: "compressed",
  sourceMap: false,
});
writeFileSync(join(obsidian, "theme.css"), result.css + "\n");

rmSync(output, { recursive: true, force: true });
mkdirSync(downloads, { recursive: true });

const platforms = [
  { name: "obsidian", archive: "zhi-obsidian.zip" },
  { name: "zed", archive: "zhi-zed.zip" },
  { name: "vscode", archive: "zhi-vscode-source.zip" },
];

for (const platform of platforms) {
  const source = join(themes, platform.name);
  const destination = join(output, platform.name);
  mkdirSync(destination, { recursive: true });
  const files = [];
  for (const filename of readdirSync(source)) {
    if (filename.endsWith(".json") || filename === "theme.css" || filename === "README.md" || filename === "LICENSE") {
      cpSync(join(source, filename), join(destination, filename));
      files.push(filename);
    }
  }
  const archive = join(downloads, platform.archive);
  if (existsSync(archive)) rmSync(archive);
  execFileSync("zip", ["-q", archive, ...files], { cwd: source });
}

console.log("Built Obsidian CSS, native editor theme files and three download archives");
