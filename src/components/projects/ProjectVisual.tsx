import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectVisual as Visual } from "@/lib/projects";
import { ProjectIllustration } from "./ProjectIllustration";

/** A project's image or coded illustration, filling a 16:10 frame. */
export function ProjectVisual({
  visual,
  sizes,
  preload,
  className,
}: {
  visual: Visual;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-forest-ink", className)}>
      {visual.kind === "image" ? (
        <Image src={visual.src} alt={visual.alt} fill sizes={sizes} preload={preload} className={cn("object-cover", visual.anchor === "left" && "object-left")} />
      ) : (
        <ProjectIllustration name={visual.name} alt={visual.alt} className="absolute inset-0 size-full" />
      )}
    </div>
  );
}
