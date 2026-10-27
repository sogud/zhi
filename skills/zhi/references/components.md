# Components

Zhi 0.3.0 Preview has 26 installable components. Subcomponents are included with their parent Registry item. All components use the same White Paper, Xuan Paper, Ink Paper and Bamboo theme tokens.

| Component | Registry item | Exports |
| --- | --- | --- |
| Button | `@zhi/button` | Button, buttonVariants |
| Input | `@zhi/input` | Input |
| Textarea | `@zhi/textarea` | Textarea |
| Label | `@zhi/label` | Label |
| Checkbox | `@zhi/checkbox` | Checkbox |
| RadioGroup | `@zhi/radio-group` | RadioGroup, RadioGroupItem |
| Switch | `@zhi/switch` | Switch |
| Select | `@zhi/select` | Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel |
| Card | `@zhi/card` | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| Badge | `@zhi/badge` | Badge, badgeVariants |
| Separator | `@zhi/separator` | Separator |
| Alert | `@zhi/alert` | Alert, AlertTitle, AlertDescription |
| Progress | `@zhi/progress` | Progress |
| Tabs | `@zhi/tabs` | Tabs, TabsList, TabsTrigger, TabsContent |
| Accordion | `@zhi/accordion` | Accordion, AccordionItem, AccordionTrigger, AccordionContent |
| Dialog | `@zhi/dialog` | Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose |
| Tooltip | `@zhi/tooltip` | TooltipProvider, Tooltip, TooltipTrigger, TooltipContent |
| Popover | `@zhi/popover` | Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription, PopoverClose |
| DropdownMenu | `@zhi/dropdown-menu` | DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuLabel |
| Collapsible | `@zhi/collapsible` | Collapsible, CollapsibleTrigger, CollapsibleContent |
| Slider | `@zhi/slider` | Slider, SliderLabel, SliderValue, SliderControl, SliderTrack, SliderRange, SliderThumb |
| Toggle | `@zhi/toggle` | Toggle |
| ToggleGroup | `@zhi/toggle-group` | ToggleGroup, ToggleGroupItem |
| Avatar | `@zhi/avatar` | Avatar, AvatarImage, AvatarFallback |
| Skeleton | `@zhi/skeleton` | Skeleton |
| Table | `@zhi/table` | Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption |

See the [installation instructions](https://github.com/sogud/zhi/blob/main/README.md#install-components) before using these examples. Imports use `@/components/ui/<registry-item>` in the consuming project. The [component preview](https://sogud.github.io/zhi/playground/) includes live examples for every component.

## Form controls

Label uses a native label. Associate it with an input using `htmlFor`, or wrap a checkbox or radio item. Textarea accepts native textarea props, including `disabled`, `required`, `rows`, `aria-invalid` and controlled `value` / `onChange`.

```tsx
<Label htmlFor="description">Description</Label>
<Textarea id="description" name="description" rows={4} />

<RadioGroup name="visibility" defaultValue="private" aria-label="Visibility">
  <Label><RadioGroupItem value="private" /> Private</Label>
  <Label><RadioGroupItem value="public" /> Public</Label>
</RadioGroup>

<Select name="density" defaultValue="comfortable" items={{ comfortable: "Comfortable", compact: "Compact" }}>
  <SelectTrigger aria-label="Reading density"><SelectValue /></SelectTrigger>
  <SelectContent>
    <SelectItem value="comfortable">Comfortable</SelectItem>
    <SelectItem value="compact">Compact</SelectItem>
  </SelectContent>
</Select>
```

RadioGroup and Select expose Base UI's `value`, `defaultValue`, `onValueChange`, `name` and `disabled` props. Set `items` on Select to display labels rather than raw values. Disabled Select items remain keyboard-focusable for discovery but cannot be selected. Use the supplied content component to get the popup positioning, portal and list.

## Content and feedback

Card provides a container and optional header, content and footer. CardTitle renders an `h3`; place it at the appropriate heading level in your document. Badge variants are `default`, `outline`, `accent` and `destructive`; badges are static labels, not buttons. Separator supports `orientation="vertical"`; give vertical separators a parent with an explicit height.

```tsx
<Alert variant="destructive">
  <AlertTitle>Could not sync</AlertTitle>
  <AlertDescription>Check your connection and try again.</AlertDescription>
</Alert>
<Progress value={60} aria-label="Upload progress" />
<Progress value={null} aria-label="Preparing preview" />
```

Alert defaults to `role="note"` for static content. Use `role="alert"` for urgent updates or `role="status"` for routine updates. Progress accepts Base UI `min`, `max` and `value`; `null` means unknown progress and renders a static short bar. Give progress an accessible label and visible explanatory text.

## Tabs and disclosure

```tsx
<Tabs defaultValue="overview">
  <TabsList aria-label="Work information">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="details">Detailed content</TabsContent>
</Tabs>

<Accordion defaultValue={["themes"]}>
  <AccordionItem value="themes">
    <AccordionTrigger>Can I change themes?</AccordionTrigger>
    <AccordionContent>Set data-theme on the document root.</AccordionContent>
  </AccordionItem>
</Accordion>
```

Tabs delegates selection and arrow-key navigation to Base UI. Set `orientation="vertical"` and arrange the root with your own layout for vertical tabs. Accordion values are arrays; use `multiple` to allow more than one expanded item. AccordionTrigger includes an `h3` header and chevron. AccordionItem supports `disabled`.

## Dialog

```tsx
<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>Publish</DialogTrigger>
  <DialogContent>
    <DialogTitle>Publish this work?</DialogTitle>
    <DialogDescription>Anyone with the link will be able to read it.</DialogDescription>
    <DialogFooter>
      <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
      <DialogClose render={<Button />} onClick={publish}>Publish</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

DialogContent includes a portal, backdrop and scrollable popup. Base UI manages modal focus, Escape and restoring focus. Supply a title and description. For asynchronous actions, control `open` / `onOpenChange` and close only after success instead of wrapping the submit action in DialogClose.

For popup theme inheritance, put `data-theme` on the document root; portals mount outside local containers. Styling wrappers accept `className` and Base UI state callbacks. Use Base UI's `render` prop to compose triggers with Button. Button rendered as an anchor also needs `nativeButton={false}`.

## Floating actions and details

[Tooltip](components/tooltip.md) provides a short, non-interactive explanation on hover or focus. Keep essential instructions visible. Use [Popover](components/popover.md) for a panel with controls and [DropdownMenu](components/dropdown-menu.md) for an action menu with keyboard navigation. All floating content uses the document-root theme. Compose triggers with `render={<Button />}`.

[Collapsible](components/collapsible.md) expands a single optional section; use Accordion for a related set of sections. [Toggle](components/toggle.md) exposes a pressed state, while [ToggleGroup](components/toggle-group.md) groups related choices. ToggleGroup values are arrays, including in single-selection mode; an empty array means no selection.

[Slider](components/slider.md) supports a number or a range. Put the track and thumbs in SliderControl, label the control and give each range thumb a distinct accessible name. Its reference includes the compound hierarchy and disabled state.

## Identity, loading and tables

[Avatar](components/avatar.md) provides an image and fallback. Give the image meaningful alternative text, or use empty alternative text when adjacent text already names the person. [Skeleton](components/skeleton.md) is a static visual placeholder; describe loading on the containing region rather than announcing each shape.

[Table](components/table.md) provides native table markup inside a horizontal scroll container. Use a caption and column headers; align numeric values to the right. Sorting, filtering, selection and pagination remain application behavior and are not included in this item.
