
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Section, SectionHeading, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <Section className="bg-slate-50/80">
            <SectionHeading>
                <SectionTitle className="text-3xl sm:text-4xl">What Our Partners Are Saying</SectionTitle>
                <SectionDescription className="text-lg sm:text-xl">
                    Real stories from businesses that trust BZION to power their growth.
                </SectionDescription>
            </SectionHeading>

            <div className="mt-12">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                                <Card className="h-full flex flex-col justify-between p-6 bg-white shadow-lg border-secondary/20">
                                    <CardContent className="p-0">
                                        <Quote className="w-8 h-8 text-secondary mb-4" />
                                        <p className="text-base sm:text-lg text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                                    </CardContent>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">{testimonial.author}</p>
                                        <p className="text-sm text-slate-500">{testimonial.company}</p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

             <div className="flex justify-center gap-4 mt-8">
                <Button variant="outline" size="icon" onClick={scrollPrev}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={scrollNext}>
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </Section>
    );
};

export default Testimonials;
