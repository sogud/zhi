import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const manifest = JSON.parse(
  await readFile(new URL("package.json", root), "utf8"),
);
const directory = new URL("public/licenses/", root);
await mkdir(directory, { recursive: true });
await writeFile(
  new URL("Z-MIT.txt", directory),
  await readFile(new URL("LICENSE", root)),
);
const notices = [
  "纸 · Z 0.1.0",
  "Z components: MIT — Z-MIT.txt",
  "",
  "Bundled runtime dependencies and font licenses:",
];
for (const name of Object.keys(manifest.dependencies)) {
  const packageDirectory = new URL(`node_modules/${name}/`, root);
  const entries = await readdir(packageDirectory);
  const license = entries.find((entry) =>
    /^license(?:\.(?:md|txt))?$/i.test(entry),
  );
  if (!license) throw new Error(`Missing license for ${name}`);
  const filename = `${name.replaceAll("/", "-").replaceAll("@", "")}.txt`;
  await writeFile(
    new URL(filename, directory),
    await readFile(new URL(license, packageDirectory)),
  );
  notices.push(`${name}: ${filename}`);
}
await writeFile(new URL("NOTICE.txt", directory), `${notices.join("\n")}\n`);
console.log(
  `Collected ${Object.keys(manifest.dependencies).length} runtime dependency licenses`,
);
