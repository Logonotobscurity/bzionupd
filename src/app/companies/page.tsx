
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading, SectionTitle, SectionDescription } from '@/components/ui/section';
import { getCompanies } from '@/lib/company-data';
import { CompanyCard } from '@/components/company-card';
import { CTASection } from '@/components/cta-section';

export default function CompaniesPage() {
  const companies = getCompanies();
  
  // Calculate aggregate stats
  const totalCompanies = companies.length;
  const totalBrands = companies.reduce((sum, c) => sum + c.brandCount, 0);
  const totalProducts = companies.reduce((sum, c) => sum + c.productCount, 0);

  return (
    <>
      <PageHero
        preamble="Partner Network"
        title="Our Partners"
        description="We are proud to partner with Nigeria's most reputable manufacturers and brands to deliver quality and authenticity to our customers. Together, we ensure reliable supply chains and premium products."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Partners', href: '/companies' },
        ]}
        stats={[
          { label: 'Trusted Partners', value: totalCompanies },
          { label: 'Brands Represented', value: totalBrands },
          { label: 'Quality Products', value: totalProducts },
        ]}
      />
      <Section className="py-12 md:py-16">
        <SectionHeading className="text-center">
            <SectionTitle>Our Valued Partners</SectionTitle>
            <SectionDescription>We work with the best to bring you the best quality products and reliable supply chains.</SectionDescription>
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {companies.map(company => (
                <CompanyCard key={company.id} company={company} />
            ))}
        </div>
      </Section>
      <Section className="py-16">
        <CTASection
          title="Want to Partner With BZION?"
          description="Are you a manufacturer or brand interested in expanding your distribution network? Let's discuss how BZION can help bring your products to more businesses across Nigeria."
          ctaText="Contact Our Partnership Team"
          ctaHref="/contact"
        />
      </Section>
    </>
  );
}
