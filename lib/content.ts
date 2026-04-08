import type { SiteContent } from "@/lib/types";

export const content: SiteContent = {
  navbar: {
    brand: "Prohose",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#story" },
      { label: "Products", href: "#products" },
      { label: "Why Us", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Shop Now", href: "https://t.me/prohoseofficialsafetyfood" },
  },
  hero: {
    eyebrow: "Farm-fresh products daily",
    title: "Farm-fresh groceries delivered to you.",
    description: "Structure scaffold ready for parallel section implementation and content iteration.",
    primaryCta: { label: "Shop Now", href: "https://t.me/prohoseofficialsafetyfood" },
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
        name: "Lon Molika Chau",
        role: "Co-founder & CEO",
        bio: "We are committed to making high-quality local products accessible to everyone, while empowering farmers and businesses to grow sustainably. Our leadership drives innovation, trust, and community impact across every step of the supply chain.",
      },
      {
        name: "Sophea Tek",
        role: "Co-founder & COO",
        bio: "Behind every great service is a strong operation. We work closely with our partners and teams to deliver value at every step, with a focus on efficiency and seamless execution that ensures every product reaches customers reliably and on time.",
      },
    ],
    members: [
      {
        name: "Lymeng PEN",
        role: "Co-founder & IT Partner",
        bio: "Technology is our investment, we build digital infrastructure that empowers businesses and fuels economic growth.",
      },
      {
        name: "Sophanha Dout",
        role: "Product Designer",
        bio: "We design freshness you can trust—every step, from farm to table.",
      },
      {
        name: "Sharma Kumarilaxmi",
        role: "Project Coordinator",
        bio: "Bridging the gap between the soil and the digital market to help our farmers thrive.",
      },
      {
        name: "Sodalin Thai",
        role: "Fullstack Developer",
        bio: "We are dedicated to building products that tackle real challenges and deliver business value.",
      },
    ],
  },
  cta: {
    title: "Get fresh groceries delivered today.",
    description: "Shop from 200+ locally sourced products.",
    primaryCta: { label: "Shop now", href: "https://t.me/prohoseofficialsafetyfood" },
    secondaryCta: { label: "Explore products", href: "https://facebook.com/ProhoseOfficial" },
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
      { icon: "facebook", label: "Facebook", href: "https://facebook.com/ProhoseOfficial" },
      { icon: "telegram", label: "Telegram", href: "https://t.me/prohoseofficialsafetyfood" },
    ],
    contacts: [
      { icon: "map-pin", label: "Phnom Penh, Cambodia", href: "#" },
      { icon: "telegram", label: "Prohorse Official", href: "https://t.me/prohoseofficialsafetyfood" },
      { icon: "facebook", label: "ProhoseOfficial", href: "https://facebook.com/ProhoseOfficial" },
    ],
    copyright: "© 2026 Prohose Official. All rights reserved.",
    poweredBy: "Power by Dojology",
    poweredByHref: "#",
  },
};
