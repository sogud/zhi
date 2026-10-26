import { readFile, mkdir, writeFile } from "node:fs/promises";

const tokens = JSON.parse(
  await readFile(new URL("../design/tokens.json", import.meta.url), "utf8"),
);
const root = {};
for (const [name, value] of Object.entries(tokens.palette))
  root[`--zhi-palette-${name}`] = value;
for (const [name, value] of Object.entries(tokens.spacing))
  root[`--zhi-space-${name}`] = `${value}px`;
for (const [name, value] of Object.entries(tokens.radii))
  root[`--zhi-radius-${name}`] = `${value}px`;
for (const [name, value] of Object.entries(tokens.sizes))
  root[`--zhi-${name}`] = `${value}px`;
for (const [name, value] of Object.entries(tokens.typography)) {
  root[`--zhi-type-${name}-size`] = `${value.size}px`;
  root[`--zhi-type-${name}-line-height`] = `${value.lineHeight}px`;
}
root["--font-sans"] = '"Noto Sans SC Variable", "PingFang SC", sans-serif';
root["--font-serif"] = '"Noto Serif SC Variable", "Songti SC", serif';
root["--radius"] = "var(--zhi-radius-control)";
const rules = { ":root": root };
for (const [index, theme] of tokens.themes.entries()) {
  const selector =
    index === 0
      ? `:root, [data-theme="${theme.id}"]`
      : `[data-theme="${theme.id}"]`;
  const declarations = { "color-scheme": theme.appearance };
  for (const [name, key] of Object.entries(theme.colors)) {
    const value = tokens.palette[key];
    if (!value)
      throw new Error(`Unknown palette key ${key} in ${theme.id}/${name}`);
    declarations[`--${name}`] = `var(--zhi-palette-${key})`;
  }
  rules[selector] = declarations;
}
const themeRules = {};
for (const name of Object.keys(tokens.themes[0].colors))
  themeRules[`--color-${name}`] = `var(--${name})`;
themeRules["--radius-control"] = "var(--zhi-radius-control)";
themeRules["--radius-panel"] = "var(--zhi-radius-panel)";
rules["@theme inline"] = themeRules;
const lines = [
  "/* Generated from design/tokens.json. Run pnpm tokens:build. */",
];
for (const [selector, declarations] of Object.entries(rules)) {
  lines.push(`${selector} {`);
  for (const [name, value] of Object.entries(declarations))
    lines.push(`  ${name}: ${value};`);
  lines.push("}", "");
}
const output = new URL("../registry/themes/", import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL("zhi.css", output), lines.join("\n"));
const catalogPath = new URL("../registry.json", import.meta.url);
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const themeItem = catalog.items.find((item) => item.name === "theme");
if (!themeItem) throw new Error("Missing theme registry item");
themeItem.files = [
  { path: "LICENSE", type: "registry:file", target: "licenses/z/LICENSE" },
];
themeItem.css = {
  '@import "@fontsource-variable/noto-sans-sc"': {},
  '@import "@fontsource-variable/noto-serif-sc"': {},
};
for (const [selector, declarations] of Object.entries(rules)) {
  if (selector !== "@theme inline") themeItem.css[selector] = declarations;
}
themeItem.cssVars = { theme: {} };
for (const [name, value] of Object.entries(themeRules))
  themeItem.cssVars.theme[name.slice(2)] = value;
await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Built ${tokens.themes.length} themes from design/tokens.json`);
