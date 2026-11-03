# Zhi for Obsidian

Copy `theme.css` and `manifest.json` into `<vault>/.obsidian/themes/Zhi/`, then select **Zhi** in Settings → Appearance.

The SCSS files in this directory own the Obsidian styles. From the repository root, run `pnpm themes:build` to regenerate `theme.css` and the platform downloads. Dependencies are installed once at the repository root; there is no separate package installation here.

Edit `manifest.json` and `versions.json` when preparing an Obsidian release. Its version is independent of Zhi UI. Publishing or updating the community theme listing is a separate step.

Formerly Xuan. Existing `--xuan-*` CSS variables remain available. Existing users must select the renamed theme; personal settings are not migrated automatically. Platform colors are preserved during the repository migration.

Source imported from [sogud/xuan-theme](https://github.com/sogud/xuan-theme). Code is [MIT](LICENSE); fonts are referenced from local installations and are not included.
