import {
  companyMenu,
  footerColumns,
  hireDevsMenu,
  industries,
  industriesMenu,
  legalLinks,
  services,
  servicesMenu,
  url,
} from "./content";

export type PageKind = "general" | "contact" | "legal" | "sitemap";
export type SitePage = { path: string; title: string; eyebrow: string; desc: string; kind: PageKind };

// These sections have their own routes (src/app/portfolio, src/app/blog).
const OWN_ROUTES = /^\/(portfolio|blog)(\/|$)/;

const pages = new Map<string, SitePage>();
const add = (href: string, page: Omit<SitePage, "path" | "kind"> & { kind?: PageKind }) => {
  const path = url(href);
  if (path === "/" || path.startsWith("http") || OWN_ROUTES.test(path) || pages.has(path)) return;
  pages.set(path, { kind: "general", ...page, path });
};

// Order matters: the first entry for a path wins, so the richest copy goes first.
add("/contact-us", {
  kind: "contact",
  eyebrow: "Contact",
  title: "Let’s Discuss Your Needs",
  desc: "Tell us about your project, team and timeline. We’ll match you with the right engineers within 24 hours.",
});
add("/sitemap", { kind: "sitemap", eyebrow: "Sitemap", title: "Sitemap", desc: "Every page on this site, in one place." });
for (const l of legalLinks) {
  if (l.label !== "Sitemap") add(l.href, { kind: "legal", eyebrow: "Legal", title: l.label, desc: `${l.label} for BXTrack Solutions.` });
}

for (const s of services) {
  add(s.learnMore, { eyebrow: "Services", title: s.title, desc: s.desc });
  for (const item of s.items) if (item.href) add(item.href, { eyebrow: s.title, title: item.name, desc: s.desc });
}
for (const i of industries) add(i.href, { eyebrow: "Industries", title: i.title, desc: i.desc });
for (const i of industriesMenu) add(i.href, { eyebrow: "Industries", title: i.title, desc: i.desc });

for (const g of hireDevsMenu) {
  for (const l of g.links) {
    add(l.href, { eyebrow: `Hire ${g.title}`, title: `Hire ${l.label}`, desc: `Vetted ${l.label} matched to your team, stack and workflow in 24 hours.` });
  }
}
for (const g of servicesMenu) {
  for (const l of g.links) add(l.href, { eyebrow: g.title, title: l.label, desc: `${l.label} delivered by AI-native engineers who ship from week one.` });
}
for (const col of footerColumns) {
  for (const l of col.links) {
    const hire = col.title === "Hire Developers";
    add(l.href, {
      eyebrow: col.title,
      title: hire ? `Hire ${l.label}` : l.label,
      desc: hire ? `Vetted ${l.label} matched to your team, stack and workflow in 24 hours.` : `${l.label} at BXTrack Solutions.`,
    });
  }
}
for (const l of companyMenu.flat()) add(l.href, { eyebrow: "Company", title: l.label, desc: `${l.label} at BXTrack Solutions.` });

// CTA destinations not covered by any menu
add("/hire-remote-developers", { eyebrow: "Hire Developers", title: "Hire Remote Developers", desc: "Domain expert remote developers vetted and matched to your team in 24 hours." });
add("/software-development-services", { eyebrow: "Services", title: "Software Development Services", desc: "From strategy to delivery. Engineering that works." });
add("/technologies", { eyebrow: "Technologies", title: "Our Full Stacks", desc: "1000+ engineers with expertise in almost every programming language." });

export const allPages = [...pages.values()];
export const getPage = (slug: string[]) => pages.get(`/${slug.join("/")}`);
