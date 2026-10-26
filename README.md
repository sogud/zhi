# 纸 · Zhi

A Base UI component library with Chinese-inspired typography, generous spacing and four paper themes. Components are distributed as source through a shadcn Registry.

Version: **0.3.0 Preview**. [Documentation](https://sogud.github.io/zhi/) · [Components](https://sogud.github.io/zhi/docs/components/) · [Design resources](https://sogud.github.io/zhi/docs/resources/).

## Preview

https://sogud.github.io/zhi/playground/

White Paper (白纸), Xuan Paper (宣纸), Ink Paper (墨纸) and Bamboo (青竹) share the same component structure. Change `data-theme` to `baizhi`, `xuanzhi`, `mozhi` or `qingzhu`.

Includes **16 components**: Button, Input, Textarea, Label, Checkbox, RadioGroup, Switch, Select, Card, Badge, Separator, Alert, Progress, Tabs, Accordion and Dialog. See the [component catalog and usage](docs/components.md). Compound exports such as CardTitle and DialogContent belong to their parent component and are not counted separately.

## Local development

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm dev
```

Node.js 24, pnpm and `zip` are required for the complete documentation/distribution build. `pnpm build` regenerates the Registry, bundled Skill references/assets, downloads and static documentation pages. The maintained Skill entrypoint is `skills/zhi/SKILL.md`; generated references and assets are committed so skills CLI installs work without a build.

## Install components

Merge this entry into the consuming project’s `components.json`:

```json
{
  "registries": {
    "@zhi": "https://sogud.github.io/zhi/r/{name}.json"
  }
}
```

```sh
pnpm dlx shadcn@latest add @zhi/button
# Install several components together:
pnpm dlx shadcn@latest add @zhi/select @zhi/dialog @zhi/tabs
```

```tsx
import { Button } from "@/components/ui/button"

<Button>Save changes</Button>
```

React, Tailwind CSS v4 and shadcn configuration are required. The installer adds component dependencies, theme rules and the Zhi MIT license. Installed source belongs to the consuming project; upgrades require reviewing changes. There is no npm runtime package.

## Design and source

- `design/tokens.json` owns theme colors, spacing, dimensions and typography.
- `pnpm tokens:build` generates theme CSS and the theme entry in `registry.json`.
- `registry/ui/` contains the distributable components; the preview imports the same files.
- [Design specification](docs/design.md).
- [Open design resources](design/README.md): theme tokens, Figma variable and text-style snapshot, component SVGs and a preview board.

## Agent Skill

```sh
npx skills add sogud/zhi --skill zhi
```

The Skill includes component guides, design rules, tokens, theme CSS and SVG assets. See [Skill usage](docs/skill.md).

## Documentation hosting

GitHub Actions builds and deploys the site to GitHub Pages on pushes to main. Pages uses `/zhi/` as Vite's base path. To check the same build locally, run `DOCS_BASE_PATH=/zhi/ pnpm build`. For a custom domain, change the base path, `site.json`, Registry URLs and the Skill's installation reference together.

## License

Zhi code and original design resources are [MIT](LICENSE). [Base UI](https://base-ui.com/) is MIT. The bundled Noto Sans SC and Noto Serif SC fonts use SIL OFL 1.1; dependency notices are included in the built site under `/licenses/NOTICE.txt`.
