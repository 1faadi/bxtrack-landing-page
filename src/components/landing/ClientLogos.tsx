import Image from "next/image";
import { clientLogos } from "@/lib/content";
import { Marquee } from "./Marquee";

export function ClientLogos() {
  return (
    <section aria-label="Our clients" className="bg-white py-[60px]">
      <Marquee className="before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-20 before:bg-gradient-to-r before:from-white after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-20 after:bg-gradient-to-l after:from-white">
        {clientLogos.map((logo) => (
          <div key={logo.src} className="flex h-[113px] min-w-[220px] items-center justify-center px-2.5 py-6 sm:min-w-[294px]">
            <Image src={logo.src} alt={logo.alt} width={180} height={65} className="h-auto max-h-full w-auto max-w-full object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
