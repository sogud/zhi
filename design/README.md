# Zhi design resources

The design resources in this directory are released under the project's [MIT license](../LICENSE). You may use, modify and redistribute them with the license notice.

- [Design specification](../docs/design.md): typography, spacing, alignment and component states.
- [tokens.json](tokens.json): the source of truth for code themes and dimensions.
- [preview.png](preview.png): the complete Figma review board, exported on 2026-10-26.
- `components/{baizhi,xuanzhi,mozhi}/`: 12 SVG sheets covering Button, Input, Checkbox and Switch variants. Text remains editable and requires Noto Sans SC / Noto Serif SC.
- [figma-snapshot.json](figma-snapshot.json): 100 Figma variables, their aliases and modes, and six text styles. This is an exported reference, not a second token source or an importable Figma library.
- [figma.json](figma.json): source file and component IDs.
- [Editable Figma library](https://www.figma.com/design/XWvrkynXWsb4ezYtAGu6SV?node-id=4-2): the original components, auto layout and variable bindings. Figma access follows the file's sharing settings.

SVG files can be opened in a browser or imported into a vector editor. Imported SVGs do not preserve Figma component relationships, auto layout or variable bindings. A native `.fig` archive is not included because the connected plugin cannot export that format.

Edit `tokens.json` and run `pnpm tokens:build` for code theme changes. After updating Figma, refresh the SVGs, preview and snapshot together. Do not edit the snapshot to change code themes.

The SVGs reference Noto fonts; font files are not included here. Noto Sans SC and Noto Serif SC use SIL OFL 1.1, independently of the MIT license. The site build includes the fonts' license notices under `/licenses/`.
