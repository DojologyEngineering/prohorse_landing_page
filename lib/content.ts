import type { SiteContent } from "@/lib/types";

export const content: SiteContent = {
  navbar: {
    brand: "Prohorse",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#story" },
      { label: "Products", href: "#products" },
      { label: "Why Us", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Shop Now", href: "#" },
  },
  hero: {
    eyebrow: "Farm-fresh products daily",
    title: "Farm-fresh groceries delivered to you.",
    description: "Structure scaffold ready for parallel section implementation and content iteration.",
    primaryCta: { label: "Shop now", href: "#" },
    secondaryCta: { label: "Browse products", href: "#" },
  },
  stats: [
    { value: "2020", label: "Founded" },
    { value: "200+", label: "Products" },
    { value: "1k+", label: "Happy customers" },
    { value: "24h", label: "Delivery window" },
  ],
  story: {
    eyebrow: "OUR STORY",
    title: "Born from a love for local flavors.",
    description: "Use this block for your production copy once design/content owners finalize messaging.",
    highlights: [
      { title: "Founded", text: "2020" },
      { title: "Registered", text: "Kandal, Cambodia" },
      { title: "Scale", text: "Regional operations" },
    ],
  },
  products: {
    eyebrow: "PRODUCTS",
    title: "Fresh. Local. Yours.",
    viewAllHref: "#",
    items: [
      { name: "Green Cabbage", category: "Vegetable" },
      { name: "Red Tomatoes", category: "Vegetable" },
      { name: "Spinach", category: "Leafy green" },
      { name: "Herb Mix", category: "Herbs" },
      { name: "Raw Mango", category: "Fruit" },
      { name: "Watermelon", category: "Fruit" },
      { name: "Dragon Fruit", category: "Fruit" },
      { name: "Jasmine Rice", category: "Grains" },
    ],
  },
  features: [
    { title: "Locally sourced", description: "Direct from nearby growers." },
    { title: "Quality assured", description: "Batch checks before dispatch." },
    { title: "Fast delivery", description: "Optimized city routing." },
    { title: "Secure payments", description: "Trusted checkout methods." },
    { title: "24/7 support", description: "Always-available assistance." },
  ],
  team: {
    eyebrow: "OUR TEAM",
    title: "The people behind the mission",
    members: [
      { name: "Sothy Chan", role: "Founder & CEO", bio: "Leads product, supply, and brand direction." },
      { name: "Maly Roe", role: "Operations Lead", bio: "Owns logistics and delivery excellence." },
      { name: "Keo Seng", role: "Partnerships", bio: "Works with local farms and vendors." },
      { name: "Bopha Rin", role: "Finance", bio: "Handles planning, controls, and reporting." },
    ],
  },
  cta: {
    title: "Get fresh groceries delivered today.",
    description: "Final CTA section for conversion-focused copy and actions.",
    primaryCta: { label: "Shop now", href: "#" },
    secondaryCta: { label: "Explore products", href: "#" },
  },
  faq: [
    { question: "How fast is delivery?", answer: "Typical delivery is within the same day." },
    { question: "What payment methods are accepted?", answer: "Card, bank transfer, and cash-on-delivery." },
    { question: "Can I track my order?", answer: "Yes, order status tracking is available after checkout." },
    { question: "Do you do bulk orders?", answer: "Yes, contact support for business or large-volume orders." },
  ],
  footer: {
    brand: "Prohose.",
    description:
      "Cambodia's trusted digital grocery platform - connecting local farmers with families for a fresher, healthier life.",
    navTitle: "NAVIGATE",
    contactTitle: "CONTACT",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#story" },
      { label: "Products", href: "#products" },
      { label: "Why Us", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    socials: [
      { icon: "facebook", label: "Facebook", href: "#" },
      { icon: "globe", label: "Website", href: "#" },
    ],
    contacts: [
      { icon: "map-pin", label: "Phnom Penh, Cambodia", href: "#" },
      { icon: "globe", label: "prohose-official.com", href: "#" },
      { icon: "facebook", label: "ProhoseOfficial", href: "#" },
    ],
    copyright: "© 2026 Prohose Official. All rights reserved.",
    poweredBy: "Power by Dojology",
    poweredByHref: "#",
  },
};
