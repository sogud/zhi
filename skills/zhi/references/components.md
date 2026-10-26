# Components

Zhi 0.2.0 has 16 installable components. Subcomponents are included with their parent Registry item. All components use the same White Paper, Xuan Paper, Ink Paper and Bamboo theme tokens.

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

See the [installation instructions](https://github.com/sogud/zhi/blob/main/README.md#install-components) before using these examples. Imports use `@/components/ui/<registry-item>` in the consuming project. The [working examples](https://github.com/sogud/zhi/blob/main/src/ExpandedSpecimens.tsx) show all twelve additions together.

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
