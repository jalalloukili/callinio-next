import Nav from '@/components/nav';
import ScrollReveal from '@/components/scroll-reveal';
import { Hero, Marquee } from '@/components/sections/hero';
import Cost from '@/components/sections/cost';
import How from '@/components/sections/how';
import Features from '@/components/sections/features';
import Testimonials from '@/components/sections/testimonials';
import Compare from '@/components/sections/compare';
import Product from '@/components/sections/product';
import Pricing from '@/components/sections/pricing';
import Guarantees from '@/components/sections/guarantees';
import Faq from '@/components/sections/faq';
import ClosingCta from '@/components/sections/closing-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Cost />
      <How />
      <Features />
      <Testimonials />
      <Compare />
      <Product />
      <Pricing />
      <Guarantees />
      <Faq />
      <ClosingCta />
      <Footer />
      <ScrollReveal />
    </>
  );
}
