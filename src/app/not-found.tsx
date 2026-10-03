import { PageHero } from "@/components/landing/PageHero";

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        desc="The page you’re looking for doesn’t exist or has moved."
        cta={{ label: "Back To Home", href: "/" }}
      />
    </main>
  );
}
