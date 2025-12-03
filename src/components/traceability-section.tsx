
import Image from 'next/image';
import { Section, SectionHeading, SectionTitle, SectionDescription } from '@/components/ui/section';

export function TraceabilitySection() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="container mx-auto px-container-px">
        <div className="grid lg:grid-cols-2 gap-x-gap-lg gap-y-gap-md items-center">
          <div className="max-w-xl">
            <SectionHeading className="!text-left">
              <SectionTitle className="text-3xl sm:text-4xl">
                With traceability, we show our work.
              </SectionTitle>
              <SectionDescription className="mt-4 text-lg sm:text-xl">
                Many brands aim for "transparency." But when you need a product you can trust right now, vague promises aren't enough. We understand that you need to be confident in the products you bring into your home and you need them delivered with guaranteed quality. That’s why we use Traceability to show our work.
              </SectionDescription>
            </SectionHeading>
          </div>
          <div className="relative mt-8 lg:mt-0">
             <h3 className="text-center text-xl sm:text-2xl font-semibold mb-4 text-primary">Traceability Map</h3>
            <div className="aspect-[4/3] relative">
                <Image
                  src="https://i.ibb.co/cKcvzJrL/traceability-map.png"
                  alt="Traceability Map showing the journey of products from farm to warehouse to business"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
