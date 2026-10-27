import { ComponentDemo } from "./ComponentDemo";

const groups = [
  {
    id: "more-overlays",
    title: "浮层与操作",
    components: [
      { name: "tooltip", title: "Tooltip · 文字提示" },
      { name: "popover", title: "Popover · 弹出面板" },
      { name: "dropdown-menu", title: "DropdownMenu · 下拉菜单" },
    ],
  },
  {
    id: "more-controls",
    title: "调节与展开",
    components: [
      { name: "collapsible", title: "Collapsible · 折叠区域" },
      { name: "slider", title: "Slider · 滑块" },
      { name: "toggle", title: "Toggle · 切换按钮" },
      { name: "toggle-group", title: "ToggleGroup · 切换按钮组" },
    ],
  },
  {
    id: "more-content",
    title: "信息与加载",
    components: [
      { name: "avatar", title: "Avatar · 头像" },
      { name: "skeleton", title: "Skeleton · 加载占位" },
      { name: "table", title: "Table · 表格" },
    ],
  },
];

export function MoreSpecimens() {
  return groups.map((group) => (
    <section key={group.id} id={group.id} className="specimen">
      <div className="section-heading"><h2>{group.title}</h2></div>
      <div className="grid gap-10">
        {group.components.map((component) => (
          <div key={component.name} className="min-w-0">
            <h3 className="mb-4 text-sm font-medium">{component.title}</h3>
            <ComponentDemo name={component.name} />
          </div>
        ))}
      </div>
    </section>
  ));
}
