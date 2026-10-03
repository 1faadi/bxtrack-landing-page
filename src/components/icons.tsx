// SVGs extracted from invozone.com
type IconProps = { className?: string };

/** Solid diagonal arrow used on most CTAs */
export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M12.3056 11.6782L12.2919 6.05351L2.99808 15.3385C2.27243 16.0642 1.13174 15.965 0.494901 15.2968C-0.186398 14.5817 -0.164722 13.5067 0.562816 12.7779L9.78956 3.54744L4.25259 3.54124C3.25469 3.53972 2.48258 2.77387 2.466 1.80855C2.44943 0.843235 3.22273 0.00981661 4.26072 0.00882481L13.9321 -0.000219182C15.0716 -0.00124757 15.8418 0.767732 15.8408 1.90846L15.8311 11.5805C15.8301 12.5684 15.0963 13.3209 14.1523 13.372C13.2364 13.4212 12.3071 12.7187 12.3049 11.6788L12.3056 11.6782Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Thin stroked diagonal arrow */
export function ArrowThin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDown({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 15 9" fill="none" aria-hidden="true">
      <path d="M0.863892 0.863892L7.39813 7.39813L13.9324 0.863892" stroke="currentColor" strokeWidth="1.72772" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 7 13" fill="none" aria-hidden="true">
      <path d="M0.862302 0.862304L6.0361 6.0361L0.862302 11.2099" stroke="currentColor" strokeWidth="1.7246" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Search({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.33" cy="10.25" r="9.25" stroke="currentColor" strokeWidth="2" />
      <path d="M23 22.805L17 16.8582" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Upload({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3.33V13.33M6.67 7.5L10 3.33L13.33 7.5M4.17 13.33V15.83C4.17 16.28 4.34 16.7 4.65 17.01C4.97 17.32 5.39 17.5 5.83 17.5H14.17C14.61 17.5 15.03 17.32 15.35 17.01C15.66 16.7 15.83 16.28 15.83 15.83V13.33" stroke="#130E27" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 19" fill="currentColor" aria-hidden="true">
      <path d="M10 0 12.64 5.07c.29.68.93 1.14 1.67 1.2l5.03.43c.6.08.85.83.39 1.25l-3.79 3.32c-.55.48-.8 1.23-.63 1.95l1.12 4.88c.13.62-.53 1.1-1.07.78l-4.32-2.58a1.98 1.98 0 0 0-2.05 0l-4.32 2.58c-.54.32-1.2-.16-1.07-.78l1.12-4.88c.16-.72-.08-1.47-.63-1.95L.29 7.95C-.17 7.53.08 6.78.68 6.7l5.03-.43c.74-.06 1.38-.52 1.67-1.2L10 0Z" />
    </svg>
  );
}
