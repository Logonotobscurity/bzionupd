
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HomeCarousel from '@/components/home-carousel';
import { findImage } from '@/lib/placeholder-images';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const ValueProps = dynamic(() => import('@/components/value-props').then(mod => mod.default), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
});
const InfoBlocks = dynamic(() => import('@/components/info-blocks').then(mod => mod.default), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
});
const ShopByCategorySection = dynamic(() => import('@/components/shop-by-category').then(mod => mod.ShopByCategorySection), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
});
const LocationsSection = dynamic(() => import('@/components/locations-section').then(mod => mod.default), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});
const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => mod.default), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});
const FaqSection = dynamic(() => import('@/components/faq-section').then(mod => mod.default), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
});


export default function Home() {
  const carouselSlides = [
    {
      image: findImage('hero').imageUrl,
      title: "Your Trusted Partner in Nigeria’s Food Supply Chain",
      description: "We work with businesses to ensure steady access to authentic and high quality food products, supported by reliability, price stability, and transparency at every stage.",
      cta: "Shop Now",
      href: "/products"
    },
    {
      image: findImage('hero-2').imageUrl,
      title: "We Deliver Stability in an Unstable Market",
      description: "Our logistics network is built to anticipate market changes, minimize shortages, and guarantee consistent supply needed for your business to thrive.",
      cta: "Learn About Our Logistics",
      href: "/about"
    },
    {
      image: findImage('hero-3').imageUrl,
      title: "Quality You Can Count On",
      description: "We supply a diverse range of trusted products sourced directly from reputable manufacturers, ensuring authenticity and consistent value.",
      cta: "Explore Our Brands",
      href: "/products"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className='h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] w-full'>
        <HomeCarousel slides={carouselSlides} />
      </div>
      
      <ValueProps />
      <InfoBlocks />
      <ShopByCategorySection />
      <LocationsSection />
      <Testimonials />
      <FaqSection />
    </div>
  );
}
