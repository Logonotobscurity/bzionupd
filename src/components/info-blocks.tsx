
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SectionHeading, SectionTitle } from '@/components/ui/section';
import { getInfoSections } from '@/services/infoService';
import { Warehouse, Truck, RefreshCw, Star, PackageCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GsapScrollTrigger } from '@/components/ui/GsapScrollTrigger';

const iconMap = {
    Warehouse,
    Truck,
    RefreshCw,
    Star,
    PackageCheck
};

interface ImageInfo {
    imageUrl: string;
    description: string;
    imageHint: string;
}

interface FeatureInfo {
    icon: keyof typeof iconMap;
    title: string;
    description: string;
}

interface ClosingInfo {
    title: string;
    description: string;
    cta: {
        text: string;
        href: string;
    }
}

export interface InfoBlockProps {
    id: string;
    preamble: string;
    title: string;
    description: string;
    features: {
        items: FeatureInfo[];
    };
    closing?: ClosingInfo;
    images: ImageInfo[];
    align: 'left' | 'right';
    isDark: boolean;
}

export const InfoBlock = ({ id, preamble, title, description, features, closing, images, align, isDark }: InfoBlockProps) => {
    const textContent = (
    <div className={cn(
        "col-span-12 md:col-span-5 flex flex-col justify-center",
        align === 'left' ? 'md:col-start-8' : 'md:col-start-1'
    )}>
      <GsapScrollTrigger>
        <SectionHeading className="!text-left">
            <p className={cn("text-sm font-bold tracking-widest uppercase mb-4", isDark ? "text-accent" : "text-primary")}>{preamble}</p>
            <SectionTitle dangerouslySetInnerHTML={{ __html: title }} className={cn("text-3xl sm:text-4xl", isDark && "!text-white")} />
        </SectionHeading>
        <p className={cn("text-base md:text-lg mb-8 font-light", isDark ? 'text-slate-300' : 'text-slate-600')}>
            {description}
        </p>
        <div className="space-y-6 mb-8">
            {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
                <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                    <Icon className={cn("h-6 w-6", isDark ? "text-accent" : "text-primary")} strokeWidth={2} />
                </div>
                <div>
                    <h4 className={cn("font-semibold text-md sm:text-lg", isDark ? 'text-white' : 'text-foreground')}>{feature.title}</h4>
                    <p className={cn("font-light mt-1", isDark ? 'text-slate-300' : 'text-slate-600')}>{feature.description}</p>
                </div>
                </div>
            );
            })}
        </div>
        {closing && (
            <div className="space-y-4">
                <h4 className={cn("font-semibold text-lg sm:text-xl", isDark ? 'text-white' : 'text-foreground')}>{closing.title}</h4>
                <p className={cn("text-base sm:text-lg font-light", isDark ? 'text-slate-300' : 'text-slate-600')}>
                    {closing.description}
                </p>
                <Button asChild variant={isDark ? 'secondary' : 'default'}>
                    <Link href={closing.cta.href}>
                        {closing.cta.text}
                    </Link>
                </Button>
            </div>
        )}
      </GsapScrollTrigger>
    </div>
  );
    const imageGrid = (
    <div className={cn(
        "col-span-12 md:col-span-6",
         align === 'left' ? 'md:col-start-1' : 'md:col-start-7'
    )}>
        <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
                <GsapScrollTrigger key={index}>
                    <div className="relative aspect-square">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 50vw, 33vw"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                </GsapScrollTrigger>
            ))}
        </div>
    </div>
  );
    return (
    <div className="grid grid-cols-12 gap-x-gap-md gap-y-gap-lg items-center">
        {align === 'left' ? (
            <>
                {imageGrid}
                <div className="hidden md:block md:col-start-7"></div>
                {textContent}
            </>
        ) : (
            <>
                {textContent}
                <div className="hidden md:block md:col-start-6"></div>
                {imageGrid}
            </>
        )}
    </div>
  );
};


const InfoBlocks = () => {
    const sections = getInfoSections();

    return (
        <div className="flex flex-col">
            {sections.map(section => {
                const isDark = section.bgColor.includes('bg-primary');
                return (
                    <section key={section.id} aria-labelledby={`info-section-title-${section.id}`} className={cn(section.bgColor, 'py-section-md')}>
                        <div className="container mx-auto px-container-px">
                           <InfoBlock {...section} isDark={isDark} />
                        </div>
                    </section>
                )
            })}
        </div>
    );
};

export default InfoBlocks;
