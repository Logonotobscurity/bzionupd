
import { PageHero } from "@/components/layout/PageHero";
import { Section } from '@/components/ui/section';
import { CTASection } from '@/components/cta-section';
import { FmcgBanner } from '@/components/fmcg-banner';
import { SpicesBanner } from '@/components/spices-banner';
import ProductsView from '@/components/products-view';
import { TraceabilitySection } from '@/components/traceability-section';
import { productRepo } from '@/repositories/db/productRepository';

const ProductsPage = async () => {
  const products = await productRepo.getAll();

  return (
    <div className="bg-white">
      <PageHero 
        title="Our Products"
        description="Explore our extensive catalog of high-quality, authentic food products and ingredients sourced from Nigeria's most trusted brands. We provide the supplies your business needs to thrive."

      />

      <ProductsView title="Featured Products" products={products} />

      <TraceabilitySection />

      <FmcgBanner />

      <SpicesBanner />
      
      <Section className="py-16">
        <CTASection
          title="Need a Product That's Not Listed?"
          description="We're constantly expanding our catalog to meet your needs. If you're looking for a specific product, let our team know. We'll help source it for you at competitive prices."
          ctaText="Request a Product"
          ctaHref="/contact"
        />
      </Section>
    </div>
  )
}

export default ProductsPage;
