import { Hero } from "@/components/landing/Hero";
import { ClientLogos } from "@/components/landing/ClientLogos";
import { Industries } from "@/components/landing/Industries";
import { Services } from "@/components/landing/Services";
import { Stats } from "@/components/landing/Stats";
import { TechStack } from "@/components/landing/TechStack";
import { Testimonials } from "@/components/landing/Testimonials";
import { AiCta } from "@/components/landing/AiCta";
import { Efficiency } from "@/components/landing/Efficiency";
import { Process } from "@/components/landing/Process";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { LatestPosts } from "@/components/landing/LatestPosts";
import { ContactForm } from "@/components/landing/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Industries />
      <Services />
      <Stats />
      <TechStack />
      <Testimonials />
      <AiCta />
      <Efficiency />
      <Process />
      <CaseStudies />
      <LatestPosts />
      <ContactForm />
    </main>
  );
}
