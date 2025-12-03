import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { FOOTER_LINKS } from '@/lib/constants';
import { FooterMobileAccordion } from './footer-mobile-accordion';
import { FooterNewsletter } from './footer-newsletter';
import CtaBanner from '../cta-banner';
import { Section } from '../ui/section';

export const Footer = () => {
  const linkCategories = {
      Platform: FOOTER_LINKS.platform,
      Company: FOOTER_LINKS.company,
      Customers: FOOTER_LINKS.customers,
  };

  return (
    <>
      <CtaBanner />
      <footer className="bg-primary text-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <Section className="!py-section-md">
            <div className="pb-16 border-b-2 border-secondary">
                <FooterNewsletter />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-12 pt-16">
              
              <div className="col-span-1 md:col-span-12 lg:col-span-3">
                <Logo className="h-12 w-auto mb-6" />
                <p className="text-sm text-slate-300 mb-6 font-light">
                    Your trusted supply partner for authentic food products in Nigeria. We are committed to reliability, price stability, and operational excellence.
                </p>
              </div>
                
              <div className="hidden md:grid md:col-span-8 lg:col-span-9 grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(linkCategories).map(([category, links]) => (
                    <div key={category}>
                        <h3 className="font-medium text-white mb-4 text-xs uppercase tracking-widest">{category}</h3>
                        <ul className="space-y-3">
                        {links.map((link: { title: string; href: string }) => (
                            <li key={link.title}>
                            <Link href={link.href} className="text-sm text-slate-300 hover:text-white hover:underline font-light">
                                {link.title}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                ))}
              </div>

              <div className="block md:hidden col-span-1">
                  <FooterMobileAccordion />
              </div>

            </div>
            
            <div className="mt-8 border-t border-slate-700 pt-8 text-center md:text-left">
                <p className='text-sm text-slate-400'>&copy; {new Date().getFullYear()} BZION Hub Digital. All rights reserved.</p>
            </div>
        </Section>
      </footer>
    </>
  );
};
