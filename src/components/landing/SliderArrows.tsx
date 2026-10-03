import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { onPrev: () => void; onNext: () => void; className?: string; size?: "md" | "lg" };

export function SliderArrows({ onPrev, onNext, className, size = "md" }: Props) {
  const btn = cn(
    "group flex items-center justify-center rounded-lg bg-forest transition-colors hover:bg-lime-deep",
    size === "lg" ? "size-[58px]" : "size-[52px]",
  );
  const icon = "size-[18px] brightness-0 invert transition group-hover:invert-0";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <button type="button" aria-label="Previous" onClick={onPrev} className={btn}>
        <Image src="/images/left_ccefba5791.svg" alt="" width={18} height={18} className={icon} />
      </button>
      <button type="button" aria-label="Next" onClick={onNext} className={btn}>
        <Image src="/images/right_f5df90e3bd.svg" alt="" width={18} height={18} className={icon} />
      </button>
    </div>
  );
}
