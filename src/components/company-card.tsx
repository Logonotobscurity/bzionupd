import Link from 'next/link';
import Image from 'next/image';
import { type Company } from '@/lib/schema';

export const CompanyCard = ({ company }: { company: Company }) => {
  return (
    <Link href={`/companies/${company.slug}`} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={company.logo || '/images/placeholder.jpg'}
          alt={`${company.name} logo`}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{company.name}</h3>
        <p className="text-slate-600 text-sm mb-4">{company.description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {company.categories.map(category => (
            <span key={category} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{category}</span>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center text-sm text-slate-500">
            <span>{company.brandCount} Brands</span>
            <span>{company.productCount} Products</span>
        </div>
      </div>
    </Link>
  );
};