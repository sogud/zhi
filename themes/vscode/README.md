# Zhi Themes for VS Code

From this directory, run `npx @vscode/vsce package`, then install the generated VSIX and select **Zhi Light** or **Zhi Dark**. Packaging may download the VS Code packaging tool. No VSIX or Marketplace publication is produced by the root documentation build.

The `zhi-vscode-source.zip` download contains extension source, not an installable VSIX. Native theme JSON files require no compilation. Update this directory's `package.json` when preparing an extension release; its version is independent of Zhi UI.

The extension ID remains `changshun.xuan-theme`. Theme settings IDs remain `Xuan Light` and `Xuan Dark`, while labels shown in the theme selector use Zhi. Existing filenames are retained. Editor and syntax colors are preserved during the repository migration.

Source imported from [sogud/xuan-theme](https://github.com/sogud/xuan-theme). Code is [MIT](LICENSE).
