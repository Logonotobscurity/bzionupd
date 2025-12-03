export interface Company {
  id: number;
  name: string;
  slug: string;
  brandCount: number;
  productCount: number;
  categories: string[];
  description: string;
  logo?: string;
  isActive: boolean;
}

export const companies: Company[] = [
  {
    "id": 1,
    "name": "Apple and Pears",
    "slug": "apple-and-pears",
    "brandCount": 1,
    "productCount": 2,
    "categories": ["Cooking Oils & Fats", "Beverages & Mixes"],
    "description": "Apple and Pears is a leading FMCG manufacturer known for its quality products like Laziz oil and chocolate drinks.",
    "logo": "https://i.ibb.co/Kxg0hSL9/apple-and-pear-logo.png",
    "isActive": true
  },
  {
    "id": 2,
    "name": "BUA Foods",
    "slug": "bua-foods",
    "brandCount": 2,
    "productCount": 2,
    "categories": ["Baking & Confectionery", "Pasta, Rice & Grains"],
    "description": "BUA Foods is a major player in the Nigerian food industry, offering essential products like IRS flour and pasta.",
    "logo": "https://i.ibb.co/r2h64ZhQ/bua-foods-logo.png",
    "isActive": true
  },
  {
    "id": 3,
    "name": "Crown Flour Mills",
    "slug": "crown-flour-mills",
    "brandCount": 2,
    "productCount": 2,
    "categories": ["Baking & Confectionery", "Pasta, Rice & Grains"],
    "description": "A subsidiary of Olam, Crown Flour Mills is a top producer of wheat-based products including Mamagold and Mama's Pride.",
    "logo": "https://i.ibb.co/zhkPMqhT/crown-flour-mill.png",
    "isActive": true
  },
  {
    "id": 4,
    "name": "Dangote",
    "slug": "dangote",
    "brandCount": 2,
    "productCount": 3,
    "categories": ["Baking & Confectionery"],
    "description": "Dangote Group is one of Nigeria's most diversified business conglomerates, renowned for its excellent business practices and quality sugar.",
    "logo": "https://i.ibb.co/23ZwpQp2/Dangote.jpg",
    "isActive": true
  },
  {
    "id": 6,
    "name": "Multipro",
    "slug": "multipro",
    "brandCount": 4,
    "productCount": 4,
    "categories": ["Dairy", "Beverages & Mixes", "Pasta, Rice & Grains", "Cooking Oils & Fats"],
    "description": "Multipro Consumer Products Limited is a leading distributor for top brands like Indomie, Dano, Power Oil, and Minimie.",
    "logo": "https://i.ibb.co/vCq3HQZB/multipro-logo.png",
    "isActive": true
  },
  {
    "id": 7,
    "name": "PZ Wilmar",
    "slug": "pz-wilmar",
    "brandCount": 2,
    "productCount": 3,
    "categories": ["Cooking Oils & Fats", "Seasonings & Flavor Enhancers"],
    "description": "PZ Wilmar is a joint venture producing and refining top edible oil brands like Kings and Mamador.",
    "logo": "https://i.ibb.co/NdvSKyDL/PZ-wilmar.png",
    "isActive": true
  },
  {
    "id": 8,
    "name": "SNF Foods",
    "slug": "snf-foods",
    "brandCount": 2,
    "productCount": 6,
    "categories": ["Cooking Oils & Fats", "Seasonings & Flavor Enhancers"],
    "description": "SNF Foods Limited is a manufacturer of quality food products, including Activa cooking oils and Whippy mayonnaise.",
    "logo": "https://i.ibb.co/PZCJ2Xxt/snf-foods-logo.png",
    "isActive": true
  },
  {
    "id": 11,
    "name": "PZ Cussons",
    "slug": "pz-cussons",
    "brandCount": 2,
    "productCount": 4,
    "categories": ["Cooking Oils & Fats", "Seasonings & Flavor Enhancers"],
    "description": "PZ Cussons Nigeria Plc is a leading manufacturer of personal and home care products, including Kings and Mamador cooking oils.",
    "logo": "https://i.ibb.co/jPyVKWMt/PZ-Cussons-Logo-wine.png",
    "isActive": true
  },
  {
    "id": 9,
    "name": "Sonia Foods",
    "slug": "sonia-foods",
    "brandCount": 1,
    "productCount": 2,
    "categories": ["Seasonings & Flavor Enhancers"],
    "description": "Sonia Foods Industries Limited is a leading manufacturer of tomato paste and seasonings in Nigeria.",
    "logo": "https://i.ibb.co/Kp6CP2hy/Sonia.png",
    "isActive": true
  },
  {
    "id": 20,
    "name": "TGI",
    "slug": "tgi",
    "brandCount": 1,
    "productCount": 10,
    "categories": ["Seasonings & Flavor Enhancers", "Cooking Oils & Fats"],
    "description": "Tropical General Investments (TGI) Group is a global conglomerate that owns the popular Terra brand of seasoning and oil.",
    "logo": "https://i.ibb.co/ZpDbfrSH/TGI-logo.png",
    "isActive": true
  },
  {
    "id": 22,
    "name": "Honeywell Flour Mills",
    "slug": "honeywell-flour-mills",
    "brandCount": 1,
    "productCount": 5,
    "categories": ["Pasta, Rice & Grains"],
    "description": "Honeywell Flour Mills is a leading producer of high-quality flour, pasta, and grains in Nigeria.",
    "logo": "https://i.ibb.co/xSyMM4Nx/Honeywell-Flour-Mills-logo.jpg",
    "isActive": true
  },
  {
    "id": 23,
    "name": "Flour Mills of Nigeria",
    "slug": "flour-mills-of-nigeria",
    "brandCount": 3,
    "productCount": 25,
    "categories": ["Baking & Confectionery", "Pasta, Rice & Grains"],
    "description": "A leader in the Nigerian food industry and owner of iconic brands like Golden Penny, Honeywell, and Auntie B.",
    "logo": "https://i.ibb.co/TDy5PkhG/fmn-logo.png",
    "isActive": true
  },
  {
    "id": 24,
    "name": "Vital Products",
    "slug": "vital-products",
    "brandCount": 1,
    "productCount": 1,
    "categories": ["Cooking Oils & Fats"],
    "description": "Vital Products PLC is a manufacturer of fruit juices, drinks, and sauces, including Vitali Margarine.",
    "logo": "https://i.ibb.co/q3GHJcnX/Vital.png",
    "isActive": true
  },
  {
    "id": 25,
    "name": "Arla",
    "slug": "arla",
    "brandCount": 1,
    "productCount": 2,
    "categories": ["Dairy"],
    "description": "Arla is a global dairy company that produces high-quality milk and dairy products, known for the Dano brand in Nigeria.",
    "logo": "https://i.ibb.co/KpVVg9jJ/arla-logo.png",
    "isActive": true
  },
  {
    "id": 26,
    "name": "Dufil Prima Foods",
    "slug": "dufil-prima-foods",
    "brandCount": 1,
    "productCount": 1,
    "categories": ["Pasta, Rice & Grains"],
    "description": "Dufil Prima Foods is a leading food manufacturing company in Nigeria, known for instant noodles and food products including the Mimee brand.",
    "logo": "https://i.ibb.co/XxDbmwyL/dufil-logo.png",
    "isActive": true
  }
];

// Get all companies
export const getCompanies = () => {
  return companies.map(company => enrichCompanyWithCounts(company));
};

// Get company by slug
export const getCompanyBySlug = (slug: string): Company | undefined => {
  const company = companies.find(c => c.slug === slug);
  return company ? enrichCompanyWithCounts(company) : undefined;
};

// Get company by id
export const getCompanyById = (id: number): Company | undefined => {
  const company = companies.find(c => c.id === id);
  return company ? enrichCompanyWithCounts(company) : undefined;
};

// Enrich company with actual product and brand counts from data
function enrichCompanyWithCounts(company: Company): Company {
  const { products } = require('@/lib/all-products-data');
  const { brands } = require('@/lib/brand-data');
  
  // Count products for this company
  const productCount = products.filter((p: any) => p.companyId === company.id).length;
  
  // Count unique brands for this company
  const brandIds = new Set(
    products
      .filter((p: any) => p.companyId === company.id)
      .map((p: any) => p.brandId)
  );
  const brandCount = brandIds.size;
  
  return {
    ...company,
    productCount: Math.max(productCount, company.productCount),
    brandCount: Math.max(brandCount, company.brandCount)
  };
}