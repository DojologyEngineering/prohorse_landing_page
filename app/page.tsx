import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProductGrid } from "@/components/product-grid";
import { Stats } from "@/components/stats";
import { Story } from "@/components/story";
import { Team } from "@/components/team";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Navbar data={content.navbar} />
      <Hero data={content.hero} />
      <Stats items={content.stats} />
      <Story data={content.story} />
      <ProductGrid data={content.products} />
      <Features items={content.features} />
      <Team data={content.team} />
      <CtaBanner data={content.cta} />
      <Faq items={content.faq} />
      <Footer data={content.footer} />
    </main>
  );
}
