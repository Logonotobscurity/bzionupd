
'use client';

import { Button } from '@/components/ui/button';
import { Breadcrumbs, type BreadcrumbItem } from '../ui/breadcrumb';
import { AnimatedDiv } from '../animated-div';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface PageHeroProps {
  preamble?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  imageUrl?: string;
  stats?: {
    label: string;
    value: number;
  }[];
}

export function PageHero({
  preamble,
  title,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  imageUrl,
  stats,
}: PageHeroProps) {
  const hasImage = !!imageUrl;
  const containerClasses = cn(
    'relative container-constrained',
    { 'grid lg:grid-cols-3 gap-12 items-center': hasImage }
  );
  const textContainerClasses = cn(
    'max-w-3xl mx-auto text-center',
    { 'lg:col-span-2 lg:text-left lg:mx-0': hasImage }
  );

  return (
    <header
      className="relative flex flex-col justify-center py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Animated background gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
      >
        {/* Main grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      <div className={containerClasses}>
        {hasImage && (
          <AnimatedDiv className="relative hidden lg:block w-64 h-64 bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl flex-shrink-0 shadow-2xl border-4 border-secondary transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl" />
            <Image
              src={imageUrl}
              alt={`${title} logo`}
              fill
              className="object-contain p-4 relative z-10"
              sizes="256px"
              priority
            />
          </AnimatedDiv>
        )}
        <div className={textContainerClasses}>
          <AnimatedDiv>
            <div className={cn('h-1 bg-gradient-to-r from-accent via-secondary to-accent mb-6 rounded-full', { 'mx-auto w-1/3': !hasImage, 'mx-0 w-20': hasImage })}></div>
          </AnimatedDiv>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} className={cn('mb-4', { 'justify-center': !hasImage, 'justify-start': hasImage })} lightText={true} />}
          <AnimatedDiv>
            {preamble && (
              <p className="text-xs md:text-sm font-bold tracking-widest text-accent uppercase mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                {preamble}
              </p>
            )}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </h1>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <p className="text-base md:text-lg text-slate-100 mb-8 leading-relaxed">
              {description}
            </p>
          </AnimatedDiv>

          {stats && stats.length > 0 && (
            <AnimatedDiv delay={0.15}>
              <div className={cn('grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8', {'lg:text-left': hasImage})}>
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs md:text-sm text-slate-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          )}
          
          <AnimatedDiv delay={0.2}>
            <div className={cn('flex flex-col sm:flex-row gap-4', { 'justify-center': !hasImage, 'justify-start': hasImage })}>
              {primaryCta && (
                <Button asChild size="lg" variant="secondary" className="hover:shadow-lg hover:shadow-secondary/50 transform hover:scale-105 transition-all duration-300">
                  <Link href={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary border-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </header>
  );
}
