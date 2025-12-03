
import { PageHero } from "@/components/layout/PageHero";
import { FmcgBanner } from '@/components/fmcg-banner';
import { SpicesBanner } from '@/components/spices-banner';
import ProductsView from '@/components/products-view';
import { TraceabilitySection } from '@/components/traceability-section';

const ProductsPage = () => {

  return (
    <div className="bg-white">
      <PageHero 
        title="Our Products"
        description="Explore our extensive catalog of high-quality, authentic food products and ingredients sourced from Nigeria's most trusted brands. We provide the supplies your business needs to thrive."
        breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
        ]}
      />

      <ProductsView title="Featured Products" />

      <TraceabilitySection />

      <FmcgBanner />

      <SpicesBanner />
    </div>
  )
}

export default ProductsPage;
