# Zhi

- Read `docs/design.md` before changing visual styles or component APIs.
- `design/tokens.json` owns colors, spacing, radii and typography. Regenerate `registry/themes/zhi.css` with `pnpm tokens:build` after editing tokens.
- Keep distributable components in `registry/ui/`; use Base UI for interactive primitives. The preview imports the same source files.
- Keep Registry items self-contained: declare package dependencies, local Registry dependencies and destination paths in `registry.json`.
- Figma is the editable design proposal. Record deliberate token changes in `design/tokens.json` before syncing them to code.
- Verify changed components in the preview and run the relevant package scripts. Report design drafts, working components, install checks and publication separately.

- Docs in `docs/` feed the site and generated Skill references. Edit canonical docs/assets, then run `pnpm build`; do not edit generated `skills/zhi/references/` or `skills/zhi/assets/` directly.
- GitHub Pages builds with `DOCS_BASE_PATH=/zhi/`; check nested page links and Registry URLs against that prefix.
