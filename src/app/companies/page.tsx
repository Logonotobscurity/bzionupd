
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading, SectionTitle, SectionDescription } from '@/components/ui/section';
import { getCompanies } from '@/lib/company-data';
import { CompanyCard } from '@/components/company-card';

export default function CompaniesPage() {
  const companies = getCompanies();

  return (
    <>
      <PageHero
        title="Our Partners"
        description="We are proud to partner with Nigeria's most reputable manufacturers and brands to deliver quality and authenticity to our customers."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Partners', href: '/companies' },
        ]}
      />
      <Section className="py-12 md:py-16">
        <SectionHeading className="text-center">
            <SectionTitle>Our Valued Partners</SectionTitle>
            <SectionDescription>We work with the best to bring you the best.</SectionDescription>
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {companies.map(company => (
                <CompanyCard key={company.id} company={company} />
            ))}
        </div>
      </Section>
    </>
  );
}
