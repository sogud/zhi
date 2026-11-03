# Zhi

- Read `docs/design.md` before changing visual styles or component APIs.
- `design/tokens.json` owns colors, spacing, radii and typography. Regenerate `registry/themes/zhi.css` with `pnpm tokens:build` after editing tokens.
- Keep distributable components in `registry/ui/`; use Base UI for interactive primitives. The preview imports the same source files.
- Keep Registry items self-contained: declare package dependencies, local Registry dependencies and destination paths in `registry.json`.
- Figma is the editable design proposal. Record deliberate token changes in `design/tokens.json` before syncing them to code.
- Verify changed components in the preview and run the relevant package scripts. Report design drafts, working components, install checks and publication separately.

- Docs in `docs/` feed the site and generated Skill references. Edit canonical docs/assets, then run `pnpm build`; do not edit generated `skills/zhi/references/` or `skills/zhi/assets/` directly.
- GitHub Pages derives `DOCS_BASE_PATH` from `actions/configure-pages`: `/zhi/` for the project URL, `/` for a custom domain. Check nested page links and Registry URLs against the deployed base path.

- Editor themes live in `themes/obsidian`, `themes/zed` and `themes/vscode`. Build from the repository root with `pnpm themes:build`; keep platform manifests and compatibility IDs independent from the UI Registry.
- Obsidian SCSS is compiled to `themes/obsidian/theme.css`; Zed and VS Code JSON files are native sources. Platform colors are preserved pending a separate token migration. Do not treat them as generated from `design/tokens.json` yet.
