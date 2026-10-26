# 纸 · Zhi

A Base UI component library with Chinese-inspired typography, generous spacing and three paper themes. Components are distributed as source through a shadcn Registry.

Version: **0.2.0 Preview**. The hosted trial is owner-private; anonymous CLI access is not available yet.

## Preview

https://sogud-z.round-wasp-3180.chatgpt.site

White Paper (白纸), Xuan Paper (宣纸) and Ink Paper (墨纸) share the same component structure. Change `data-theme` to `baizhi`, `xuanzhi` or `mozhi`.

Includes **16 components**: Button, Input, Textarea, Label, Checkbox, RadioGroup, Switch, Select, Card, Badge, Separator, Alert, Progress, Tabs, Accordion and Dialog. See the [component catalog and usage](docs/components.md). Compound exports such as CardTitle and DialogContent belong to their parent component and are not counted separately.

## Local development

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm dev
```

## Install components

Start the local registry and add this entry to the consuming project’s `components.json`:

```json
{
  "registries": {
    "@zhi": "http://127.0.0.1:5173/r/{name}.json"
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

## License

Zhi code and original design resources are [MIT](LICENSE). [Base UI](https://base-ui.com/) is MIT. The bundled Noto Sans SC and Noto Serif SC fonts use SIL OFL 1.1; dependency notices are included in the built site under `/licenses/NOTICE.txt`.
