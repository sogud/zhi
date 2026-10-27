---
name: zhi
description: Build and style React interfaces with Zhi (纸), its Base UI components and Chinese-inspired design language. Use for Zhi component installation, composition, theme customization, or applying its typography, whitespace and alignment to a screen.
license: MIT
---

# Zhi · 纸

Use Zhi's source-distributed components and paper themes. React and Tailwind CSS v4 are required. The bundled references and assets work independently of the source repository.

## Start with the relevant reference

- Installing components: [installation](references/installation.md). Read the consuming project's `components.json` and package manager first; use its aliases and CSS entrypoint.
- Choosing components or composing a screen: [component catalog](references/components.md), then `references/components/<registry-name>.md` for each component you will use. The catalog lists supported exports; verify installed source before assuming an API.
- Complete compositions: [reading and draft management](references/studies/application-examples.md) shows how controls, validation, selection, overlays and feedback work together. Adapt the composition to the user's task rather than adding every component.
- Designing or restyling a screen: [design language](references/design.md). Use [tokens](assets/tokens.json) for exact palette, spacing, dimensions and typography.
- Visual references: `assets/preview.png` and `assets/components/{baizhi,xuanzhi,mozhi}/*.svg`. The SVGs cover the original four components; the twelve newer components are documented in the component references.
- Optional nature details: `assets/motifs/{bamboo,cloud,rain,snow}.svg`. Read the design reference before placing them; they are decoration, not component state indicators.

## Install and compose

Configure `@zhi` as `https://sogud.github.io/zhi/r/{name}.json` in `components.json`. Install selected components with the project's package runner, for example `pnpm dlx shadcn@latest add @zhi/button @zhi/dialog`.

Components have unprefixed names: `Button`, `DialogContent`, `SelectItem`. Import them from the consuming project's UI alias. Read and preserve local modifications when upgrading; use the CLI's dry run or diff before replacing existing files.

Zhi uses Base UI. Compose triggers with `render={<Button />}`; Radix's `asChild` is not part of this API. For links rendered through Button, pass `nativeButton={false}`. Dialog needs a title and description; put tab triggers inside TabsList and Select items inside SelectContent. Read the component reference for its full hierarchy.

## Apply the design language

Let spacing, alignment and type establish hierarchy. Brush, ink, paper and inkstone inform type, contrast and surfaces rather than requiring literal illustrations. Use Noto Sans SC for controls and body text, and Noto Serif SC sparingly for display headings. Keep primary actions visually clear and group related controls before adding containers.

Use semantic classes such as `bg-background`, `text-foreground`, `border-border` and `text-muted-foreground`. Start with the component's supplied variants. Use the shared 4 px spacing scale and 36 px default controls. Control and panel radius tokens are 4 px and 8 px respectively. Use restrained corners for visual consistency; switches and radio controls keep familiar shapes. Do not infer zero-radius controls from the paper metaphor.

Set `data-theme="baizhi"`, `"xuanzhi"`, `"mozhi"` or `"qingzhu"` on the document root so portaled Select and Dialog contents inherit the theme. White Paper draws on snow and paper; Xuan Paper is warmer; Ink Paper is dark; Green Bamboo uses a bamboo-green emphasis. Change theme values together instead of adding unrelated colors to individual controls. In the Zhi repository, edit `design/tokens.json` and regenerate; the bundled assets are a distribution snapshot.


Treat ink, paper, seals, bamboo, snow, clouds and rain as optional aesthetic references, not a checklist of illustrations. Build a coherent composition through type, alignment, spacing and color first. Default surfaces are plain; add motifs, paper grain, ruling or the seal variant only when the concrete brief calls for them. Do not infer decorative placement from a component name or theme name.

The Figma snapshot and original component SVGs record the older three-theme, rounded design. Current tokens and component source govern current geometry and the Green Bamboo theme. Regenerate bundled references and assets from their project sources rather than editing generated copies.

The supported component catalog is limited. When a requested component is missing, state that clearly and compose existing components or use the appropriate Base UI primitive. Do not invent Zhi imports or props.

## Verify the resulting interface

Check the actual composition in a browser: labels and error descriptions, keyboard selection, disabled states, visible focus, Escape and focus return for dialogs, theme inheritance and narrow layouts. Run the consuming project's relevant type/build checks. Report any behavior you could not verify.

Zhi's original code and design assets are MIT; [assets/LICENSE](assets/LICENSE) travels with the bundle. Fonts are referenced, not bundled in this Skill, and remain under SIL OFL 1.1.
