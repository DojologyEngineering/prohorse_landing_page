import type { SiteContent } from "@/lib/types";

export const content: SiteContent = {
  navbar: {
    brand: "Prohose",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#story" },
      { label: "Products", href: "#products" },
      { label: "Why Us", href: "#features" },
      { label: "Awards", href: "#awards" },
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
    description: "On [[Thursday, 19 March 2020]], when the government announced the lockdown, Phnom Penh stopped instantly. The main markets closed, our supply chain from smallholder farmers broke down, and our offline retail mart had no customers at all.\n\nThat night, my core team and I gathered in the office and made one decisive move: shift online overnight. Within hours, we created our first [[Facebook]] and [[Instagram channels]] and named it [[Prohose]].\n\nThis was the beginning of a new journey born from crisis, driven by resilience.",
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
      { name: "Fresh Melon", category: "Vegetables" },
      { name: "Pink Guava", category: "Fruits" },
      { name: "Fresh Guava", category: "Fruits" },
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
        name: "Sokchea Chem",
        role: "Relationship Manager",
        bio: "Building strong partnerships with our customers and suppliers to create lasting value and trust in every transaction.",
      },
      {
        name: "Sreynich Doem",
        role: "Accounting Manager",
        bio: "Managing financial excellence and operational efficiency to ensure sustainable growth and transparent business practices.",
      },
      {
        name: "Sreypov Neang",
        role: "Ordering Team",
        bio: "Coordinating seamless order fulfillment to ensure our customers receive fresh products on time, every time.",
      },
      {
        name: "Meassaly Seng",
        role: "Packaging Team",
        bio: "Ensuring every product is carefully packaged with care and quality, protecting freshness from our fields to your doorstep.",
      },
      {
        name: "Sopheaktra Yeam",
        role: "Tele-Sales",
        bio: "Connecting with customers through personalized service and bringing our fresh products directly to those who need them most.",
      },
      {
        name: "Savorly Born",
        role: "Tele-Sales",
        bio: "Dedicated to delivering exceptional customer service and helping families discover the freshest local groceries available.",
      },
    ],
  },
  awards: {
    eyebrow: "Recognition",
    title: "Awards & Achievements",
    description:
      "Our commitment to innovation and local impact has been recognized on national and regional stages - fueling us to keep growing.",
    items: [
      {
        title: "Digital Entrepreneur of The Year",
        label: "Award",
        description:
          "Recognized as a leading digital entrepreneur driving meaningful change in Cambodia's agricultural and e-commerce landscape through technology and innovation.",
        imageAlt: "Digital Entrepreneur of The Year award ceremony",
      },
      {
        title: "Reverse Innovation Cohort 05",
        label: "4th Place Award",
        description:
          "Achieved 4th place in the prestigious Reverse Innovation Cohort 05 program, demonstrating Prohose Official's innovative approach to solving local food supply challenges.",
        imageAlt: "Reverse Innovation Cohort 05 presentation and award ceremony",
      },
    ],
    note:
      "These milestones reflect not just our growth, but the collective effort of our farmers, partners, and team - and they inspire us to aim higher every single day.",
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
      { icon: "facebook", label: "Facebook", href: "https://facebook.com/ProhoseOfficial" },
      { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/prohose-official" },
      { icon: "telegram", label: "Telegram", href: "https://t.me/prohoseofficialsafetyfood" },
    ],
    copyright: "© 2026 Prohose Official. All rights reserved.",
    poweredBy: "Power by Dojology",
    poweredByHref: "https://facebook.com/dojologytechandventures",
  },
};
