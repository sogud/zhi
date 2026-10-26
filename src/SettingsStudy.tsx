import { useId, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import tokens from "../design/tokens.json";
import study from "../design/studies/settings.json";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Switch } from "@/registry/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/registry/ui/select";
import "./settings-study.css";

type Preferences = {
  workspace: string;
  typeface: "sans" | "serif";
  width: "comfortable" | "wide";
  remember: boolean;
  focus: boolean;
};

type ShapeStyle = CSSProperties & {
  "--zhi-radius-control": string;
  "--zhi-radius-panel": string;
};

const shapes = [
  { id: "compact", name: "轻微收角", description: "更平直，边界感较清楚。", radii: study.alternative },
  { id: "balanced", name: "自然微圆", description: "边缘更缓和，保持方正比例。", radii: tokens.radii },
];

function samePreferences(left: Preferences, right: Preferences) {
  return left.workspace === right.workspace && left.typeface === right.typeface &&
    left.width === right.width && left.remember === right.remember && left.focus === right.focus;
}

function SettingsExample({
  name,
  preferences,
  onChange,
  onSave,
  saved,
  attempted,
  shapeStyle,
}: {
  name: string;
  preferences: Preferences;
  onChange: (next: Preferences) => void;
  onSave: () => void;
  saved: boolean;
  attempted: boolean;
  shapeStyle: ShapeStyle;
}) {
  const id = useId();
  const invalidName = attempted && !preferences.workspace.trim();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave();
  }

  return (
    <form className="settings-page" aria-label={`${name}设置`} onSubmit={submit} noValidate style={shapeStyle}>
      <div className="settings-app-bar"><span>一页</span><span>偏好设置</span></div>
      <div className="settings-body">
        <div className="settings-introduction">
          <h2>阅读与写作</h2>
          <p>留一点空间，按照自己的节奏。</p>
        </div>
        <fieldset className="settings-group">
          <legend>阅读</legend>
          <div className="settings-field">
            <Label id={`${id}-typeface`}>正文字体</Label>
            <RadioGroup
              value={preferences.typeface}
              aria-labelledby={`${id}-typeface`}
              className="settings-font-choices"
              onValueChange={(value) => {
                if (value === "sans" || value === "serif") onChange({ ...preferences, typeface: value });
              }}
            >
              <Label><RadioGroupItem value="sans" /><span>清晰黑体</span></Label>
              <Label><RadioGroupItem value="serif" /><span>书卷宋体</span></Label>
            </RadioGroup>
          </div>
          <div className="settings-field">
            <Label htmlFor={`${id}-width`}>阅读宽度</Label>
            <Select
              value={preferences.width}
              items={{ comfortable: "舒适", wide: "宽阔" }}
              onValueChange={(value) => {
                if (value === "comfortable" || value === "wide") onChange({ ...preferences, width: value });
              }}
            >
              <SelectTrigger id={`${id}-width`}><SelectValue /></SelectTrigger>
              <SelectContent style={shapeStyle}>
                <SelectItem value="comfortable">舒适</SelectItem>
                <SelectItem value="wide">宽阔</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Label className="settings-toggle">
            <span><strong>记住阅读位置</strong><small>再次打开时，从上次的段落继续。</small></span>
            <Switch checked={preferences.remember} onCheckedChange={(remember) => onChange({ ...preferences, remember })} />
          </Label>
        </fieldset>
        <div className={`settings-reading-sample ${preferences.typeface === "serif" ? "is-serif" : ""}`}>
          <span>正文预览</span>
          <p className={preferences.width === "comfortable" ? "sample-comfortable" : ""}>午后读到一段喜欢的文字，不急着翻页。停一停，把想法记在旁边。</p>
        </div>
        <fieldset className="settings-group settings-writing">
          <legend>写作</legend>
          <div className="settings-field">
            <Label htmlFor={`${id}-workspace`}>空间名称</Label>
            <Input
              id={`${id}-workspace`}
              value={preferences.workspace}
              onChange={(event) => onChange({ ...preferences, workspace: event.target.value })}
              aria-invalid={invalidName ? true : undefined}
              aria-describedby={`${id}-workspace-help`}
              required
            />
            <p id={`${id}-workspace-help`} className={invalidName ? "settings-error" : "settings-help"}>
              {invalidName ? "请填写空间名称。" : "用于整理你的笔记和草稿。"}
            </p>
          </div>
          <Label className="settings-toggle">
            <span><strong>专注写作</strong><small>写作时收起侧栏，减少干扰。</small></span>
            <Switch checked={preferences.focus} onCheckedChange={(focus) => onChange({ ...preferences, focus })} />
          </Label>
        </fieldset>
        <div className="settings-save-row">
          <p role="status">{saved ? "已保存阅读偏好。" : "有未保存的修改"}</p>
          <Button type="submit" disabled={saved}>保存偏好</Button>
        </div>
      </div>
    </form>
  );
}

export function SettingsStudy() {
  const [preferences, setPreferences] = useState<Preferences>({
    workspace: "我的阅读空间", typeface: "sans", width: "comfortable", remember: true, focus: false,
  });
  const [savedPreferences, setSavedPreferences] = useState<Preferences | null>(null);
  const [attempted, setAttempted] = useState(false);
  const saved = savedPreferences !== null && samePreferences(preferences, savedPreferences);

  function save() {
    setAttempted(true);
    if (!preferences.workspace.trim()) return;
    setSavedPreferences({ ...preferences });
  }

  return (
    <div className="settings-study">
      <header className="study-heading">
        <p>设计对照 · 阅读与写作工具</p>
        <h1>放进页面，再看细节。</h1>
        <div>相同的内容、字号与间距，只改变圆角。左右共享偏好，可以直接操作比较。</div>
      </header>
      <div className="settings-comparison">
        {shapes.map((shape) => {
          const shapeStyle: ShapeStyle = {
            "--zhi-radius-control": `${shape.radii.control}px`,
            "--zhi-radius-panel": `${shape.radii.panel}px`,
          };
          return (
            <section className="settings-direction" key={shape.id} aria-label={shape.name}>
              <div className="study-direction-heading">
                <h2>{shape.name}</h2>
                <span>控件 {shape.radii.control}px / 容器 {shape.radii.panel}px</span>
                <p>{shape.description}</p>
              </div>
              <SettingsExample name={shape.name} preferences={preferences} onChange={setPreferences} onSave={save} saved={saved} attempted={attempted} shapeStyle={shapeStyle} />
            </section>
          );
        })}
      </div>
      <p className="study-note">当前组件库默认采用右侧的 {tokens.radii.control}/{tokens.radii.panel}px 微圆角。这里是交互演示，保存只在本次预览中生效。</p>
    </div>
  );
}
