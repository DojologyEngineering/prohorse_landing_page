export type LinkItem = {
  label: string;
  href: string;
};

export type NavbarContent = {
  brand: string;
  links: LinkItem[];
  cta: LinkItem;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
};

export type StatItem = {
  value: string;
  label: string;
};

export type StoryHighlight = {
  title: string;
  text: string;
};

export type StoryContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: StoryHighlight[];
};

export type ProductItem = {
  name: string;
  category: string;
};

export type ProductsContent = {
  eyebrow: string;
  title: string;
  viewAllHref: string;
  items: ProductItem[];
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type TeamContent = {
  eyebrow: string;
  title: string;
  members: TeamMember[];
};

export type CtaContent = {
  title: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FooterContent = {
  brand: string;
  description: string;
  links: LinkItem[];
};

export type SiteContent = {
  navbar: NavbarContent;
  hero: HeroContent;
  stats: StatItem[];
  story: StoryContent;
  products: ProductsContent;
  features: FeatureItem[];
  team: TeamContent;
  cta: CtaContent;
  faq: FaqItem[];
  footer: FooterContent;
};
