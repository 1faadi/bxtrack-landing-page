"use client";

import { useEffect, useRef } from "react";

/** Plays a Lottie JSON from /public. lottie-web is loaded lazily on the client. */
export function Lottie({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;
    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (cancelled || !ref.current) return;
      anim = lottie.loadAnimation({ container: ref.current, renderer: "svg", loop: true, autoplay: true, path: src });
    });
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, [src]);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
