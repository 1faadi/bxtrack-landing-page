import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { GetInTouchButton } from "@/components/landing/GetInTouchButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jakarta",
});
// Long-form reading face for blog articles
const serif = Source_Serif_4({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif-body" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jetbrains",
});

const title = "BXTrack Solutions | Staff Augmentation & Software Development Partner";
const description =
  "Scale your team fast with BXTrack Solutions. We provide top-tier it staff augmentation and software development services for startups and enterprises worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bxtrack.com"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/seo/bxtrack-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/seo/bxtrack-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    locale: "en_US",
    images: [{ url: "/images/bxtrack-logo-header.png", width: 2907, height: 852, alt: title }],
  },
  twitter: {
    card: "summary",
    site: "@bxtrack",
    creator: "@bxtrack",
    title,
    description,
    images: ["/images/bxtrack-logo-header.png"],
  },
};

export const viewport: Viewport = { themeColor: "#080e32" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${serif.variable} ${jetbrains.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <GetInTouchButton />
      </body>
    </html>
  );
}
