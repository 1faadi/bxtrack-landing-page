import { cn } from "@/lib/utils";

/**
 * CSS-only infinite marquee: renders the children 3× and slides one third.
 * Space items with padding, not `gap`, or the loop point drifts.
 */
export function Marquee({
  children,
  className,
  trackClassName,
  slow,
}: {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  slow?: boolean;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max will-change-transform hover:[animation-play-state:paused]",
          slow ? "animate-marquee-slow" : "animate-marquee",
        )}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} aria-hidden={i > 0 || undefined} className={cn("flex shrink-0 items-center", trackClassName)}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
