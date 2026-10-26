import bamboo from "../design/motifs/bamboo.svg";
import cloud from "../design/motifs/cloud.svg";
import rain from "../design/motifs/rain.svg";
import snow from "../design/motifs/snow.svg";
import { cn } from "@/registry/lib/utils";
import "./nature.css";

const sources = { bamboo, cloud, rain, snow };

export type NatureMotifName = keyof typeof sources;

export function NatureMotif({
  name,
  className,
}: {
  name: NatureMotifName;
  className?: string;
}) {
  const image = `url("${sources[name]}")`;

  return (
    <span
      aria-hidden="true"
      className={cn("nature-motif", `nature-motif-${name}`, className)}
      style={{ maskImage: image, WebkitMaskImage: image }}
    />
  );
}
