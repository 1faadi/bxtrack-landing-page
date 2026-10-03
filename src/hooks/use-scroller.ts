"use client";

import { useRef } from "react";

/** Arrow controls for a native `.scroller` row: scrolls by one card width. */
export function useScroller<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = (card.offsetWidth + gap) * dir;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    // Loop around like the original keen-slider
    if (dir === 1 && atEnd) el.scrollTo({ left: 0 });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth });
    else el.scrollBy({ left: step });
  };
  return { ref, prev: () => scroll(-1), next: () => scroll(1) };
}
