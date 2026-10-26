# Zhi design resources

The design resources in this directory are released under the project's [MIT license](../LICENSE). You may use, modify and redistribute them with the license notice.

- [Design specification](../docs/design.md): typography, spacing, alignment and component states.
- [Component catalog](../docs/components.md): the 16 installable components in 0.2.0.
- [White Paper](catalog-baizhi.png), [Xuan Paper](catalog-xuanzhi.png) and [Ink Paper](catalog-mozhi.png): rendered 0.2.0 component previews, including the new components.
- [tokens.json](tokens.json): the source of truth for code themes and dimensions.
- [preview.png](preview.png): the original 0.1 Figma review board, exported on 2026-10-26.
- `components/{baizhi,xuanzhi,mozhi}/`: 12 SVG sheets covering Button, Input, Checkbox and Switch variants. Text remains editable and requires Noto Sans SC / Noto Serif SC.
- [figma-snapshot.json](figma-snapshot.json): 100 Figma variables, their aliases and modes, and six text styles. This is an exported reference, not a second token source or an importable Figma library.
- [figma.json](figma.json): source file and component IDs.
- [Editable Figma library](https://www.figma.com/design/XWvrkynXWsb4ezYtAGu6SV?node-id=4-2): the original components, auto layout and variable bindings. Figma access follows the file's sharing settings.

The Figma file, SVG sheets and variable snapshot cover the original four components. The twelve additions in 0.2.0 are available as editable React source and rendered previews; their Figma master components are pending. SVG files can be opened in a browser or imported into a vector editor. Imported SVGs do not preserve Figma component relationships, auto layout or variable bindings. A native `.fig` archive is not included because the connected plugin cannot export that format.

Edit `tokens.json` and run `pnpm tokens:build` for code theme changes. After updating Figma, refresh the SVGs, preview and snapshot together. Do not edit the snapshot to change code themes.

The SVGs reference Noto fonts; font files are not included here. Noto Sans SC and Noto Serif SC use SIL OFL 1.1, independently of the MIT license. The site build includes the fonts' license notices under `/licenses/`.
