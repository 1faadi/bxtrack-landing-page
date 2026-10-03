import Image from "next/image";
import Link from "next/link";

/** Floating rotating "GET IN TOUCH" disc, bottom-left. */
export function GetInTouchButton() {
  return (
    <Link
      href="/contact-us"
      aria-label="Get in touch"
      className="fixed bottom-[max(30px,env(safe-area-inset-bottom))] left-[max(16px,env(safe-area-inset-left))] z-50 flex size-20 items-center justify-center rounded-full bg-black focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-lime sm:size-[120px]"
    >
      <svg viewBox="-24 -24 168 168" overflow="visible" className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <path id="get-in-touch-ring" d="M 60,60 m 0,-54.5 a 54.5,54.5 0 1 1 0,109 a 54.5,54.5 0 1 1 0,-109" fill="none" />
        </defs>
        <g className="origin-[60px_60px] animate-[spin_22s_linear_infinite] fill-lime font-heading text-[25.12px] font-semibold uppercase">
          {["0%", "50%"].map((offset) => (
            <text key={offset} textLength="168.65" lengthAdjust="spacing">
              <textPath href="#get-in-touch-ring" startOffset={offset}>
                GET IN TOUCH .
              </textPath>
            </text>
          ))}
        </g>
      </svg>
      <Image src="/images/Group_1707479589_a4ec8b7a54.svg" alt="" width={35} height={35} className="size-6 sm:size-[35px]" />
    </Link>
  );
}
