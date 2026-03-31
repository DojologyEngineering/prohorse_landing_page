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
    primaryCta: { label: "Shop Now", href: "#" },
    secondaryCta: { label: "Browse Products", href: "#" },
  },
  stats: [
    { value: "2020", label: "FOUNDED" },
    { value: "200+", label: "PRODUCTS" },
    { value: "1K+", label: "FAMILIES SERVED" },
    { value: "24h", label: "DELIVERY" },
  ],
  story: {
    eyebrow: "OUR STORY",
    title: "Born from a love for local flavors.",
    description: "Prohose Official began in a home kitchen in 2020. Today we connect local Cambodian farmers and SMEs with families — making fresh, quality groceries accessible for everyone.",
    highlights: [
      { title: "2020", text: "Founded" },
      { title: "2021", text: "Registered SME" },
      { title: "2022", text: "Medium Enterprise" },
    ],
  },
  products: {
    eyebrow: "Products",
    title: "Fresh. Local. Yours.",
    viewAllHref: "#",
    items: [
      { name: "Mixed Greens", category: "Vegetables" },
      { name: "Fresh Tomatoes", category: "Vegetables" },
      { name: "Organic Spinach", category: "Vegetables" },
      { name: "Local Herbs", category: "Groceries" },
      { name: "Cambodian Mango", category: "Fruits" },
      { name: "Sweet Watermelon", category: "Fruits" },
      { name: "Dragon Fruit", category: "Fruits" },
      { name: "Jasmine Rice", category: "Groceries" },
    ],
  },
  features: [
    { title: "Locally sourced", description: "Direct from Cambodian farmers." },
    { title: "Quality assured", description: "Every product passes our freshness check." },
    { title: "Fast delivery", description: "Same-day or next-day, your choice." },
    { title: "Secure payments", description: "ABA, WING, card, and more." },
    { title: "24/7 support", description: "Always here when you need us." },
  ],
  team: {
    eyebrow: "Our Team",
    title: "The people behind the mission",
    founders: [
      {
        name: "Sothy Chan",
        role: "Founder & CEO",
        bio: "Growing up in a small farming village outside Phnom Penh, I watched my parents struggle to sell their harvest at fair prices while city families paid more for less-fresh produce at the market. That gap — between the farmer and the family — became my obsession. In 2020, I started Prohose Official from our home kitchen with a single mission: use technology to close that gap. I wanted every Cambodian household to taste the same freshness I grew up with, and every local farmer to be valued fairly for their hard work. What began as a weekend project has grown into a platform serving hundreds of families — and it still drives me every single day.",
      },
      {
        name: "Maly Ros",
        role: "Co-Founder & COO",
        bio: "I've always believed that the way a community eats reflects how it cares for itself. When Sothy came to me with the idea for Prohose, I saw more than an e-commerce platform — I saw an opportunity to reshape how Cambodians think about food sourcing and sustainability. My background in supply chain and community development meant I could help build the operational backbone that makes fresh, reliable delivery possible. Every order that leaves a farmer's hands and reaches a family's table is a small win for our country's food future. That's the story I want Prohose to keep writing.",
      },
    ],
    members: [
      {
        name: "Kosal Seng",
        role: "Head of Operations",
        bio: "Smooth delivery is the promise we keep every single day.",
      },
      {
        name: "Bopha Rin",
        role: "Marketing Manager",
        bio: "Telling our farmers' stories is the most meaningful work I do.",
      },
      {
        name: "Veasna Noun",
        role: "Logistics Coordinator",
        bio: "From farm gate to front door — precision matters at every step.",
      },
      {
        name: "Sreymom Pich",
        role: "Customer Experience Lead",
        bio: "Every happy customer is a family that trusts us with their table.",
      },
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
