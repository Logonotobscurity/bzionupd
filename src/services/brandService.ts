
import { type Brand } from '@/lib/schema';

const brands: Brand[] = [
    { id: 'BRA_001', name: 'Honeywell', slug: 'honeywell', logo: 'https://i.ibb.co/xSyMM4Nx/Honeywell-Flour-Mills-logo.jpg', isFeatured: true, brand_description: 'A leading Nigerian producer of flour, pasta, and other food products.' },
    { id: 'BRA_002', name: 'Golden Penny', slug: 'golden-penny', logo: 'https://i.ibb.co/ycwyjLB4/Golden-penny.png', isFeatured: true, brand_description: 'A popular brand known for its high-quality flour, pasta, and semolina.' },
    { id: 'BRA_003', name: 'BUA Foods', slug: 'bua-foods', logo: 'https://i.ibb.co/r2h64ZhQ/bua-foods-logo.png', isFeatured: true, brand_description: 'A major food conglomerate in Nigeria, producing sugar, flour, pasta, and more.' },
    { id: 'BRA_004', name: 'IRS', slug: 'irs', logo: '/brands/irs.png', isFeatured: true, brand_description: 'IRS specializes in quality rice and other grains, sourced to deliver the best taste and texture for your meals.' },
    { id: 'BRA_005', name: 'Dangote', slug: 'dangote', logo: 'https://i.ibb.co/23ZwpQp2/Dangote.jpg', isFeatured: true, brand_description: 'A household name in Nigeria, Dangote offers a range of staple food products including sugar, salt, and flour.' },
    { id: 'BRA_006', name: 'Mama’s Pride', slug: 'mamas-pride', logo: '/brands/mamas-pride.png', isFeatured: false },
    { id: 'BRA_007', name: 'Mamagold', slug: 'mamagold', logo: 'https://i.ibb.co/ks43Mj6d/Mama-gold.png', isFeatured: true, brand_description: 'Mamagold provides high-quality flour and pasta products, perfect for baking and creating delicious meals.' },
    { id: 'BRA_008', name: 'Power Oil', slug: 'power-oil', logo: 'https://i.ibb.co/0VCJWbFF/Power-oil.png', isFeatured: false },
    { id: 'BRA_009', name: 'Activa', slug: 'activa', logo: 'https://i.ibb.co/SYgLZTR/Activa.png', isFeatured: true, brand_description: 'Activa provides high-quality cooking oils that are perfect for a variety of culinary applications.' },
    { id: 'BRA_010', name: 'Whippy', slug: 'whippy', logo: 'https://i.ibb.co/chvRLy9C/whippy.png', isFeatured: false, brand_description: 'Whippy offers delicious and creamy spreads, perfect for bread and other snacks.' },
    { id: 'BRA_011', name: 'Terra', slug: 'terra', logo: 'https://i.ibb.co/2Y5J7Pd1/Terra.png', isFeatured: true, brand_description: 'Terra is known for its uniquely flavored seasoning cubes and cooking oils that elevate everyday cooking.' },
    { id: 'BRA_012', name: 'Laziz', slug: 'laziz', logo: 'https://i.ibb.co/xKbD8drH/laziz.png', isFeatured: true, brand_description: 'Laziz offers a range of delicious and flavorful seasonings and oils that bring authentic Nigerian flavors to your cooking.' },
    { id: 'BRA_013', name: 'Vitali', slug: 'vitali', logo: 'https://i.ibb.co/q3GHJcnX/Vital.png', isFeatured: false },
    { id: 'BRA_014', name: 'PZ Wilmar', slug: 'pz-wilmar', logo: 'https://i.ibb.co/NdvSKyDL/PZ-wilmar.png', isFeatured: false },
    { id: 'BRA_015', name: 'Kings', slug: 'kings', logo: 'https://i.ibb.co/5XMvYbW1/kings.png', isFeatured: true, brand_description: 'Kings is renowned for its premium vegetable oils, trusted by families and businesses for its purity and cooking performance.' },
    { id: 'BRA_016', name: 'Mamador', slug: 'mamador', logo: 'https://i.ibb.co/vxjxKL9p/mamador.png', isFeatured: true, brand_description: 'Mamador is a premium brand of cooking oils, known for its heart-healthy benefits and superior quality.' },
    { id: 'BRA_017', name: 'Mr Chef', slug: 'mr-chef', logo: 'https://i.ibb.co/21n72R08/Mr-chef.png', isFeatured: false, brand_description: 'Mr Chef provides a range of seasoning products that add a rich and savory taste to any dish.' },
    { id: 'BRA_018', name: 'Sonia', slug: 'sonia', logo: 'https://i.ibb.co/Kp6CP2hy/Sonia.png', isFeatured: true, brand_description: 'Sonia is a versatile brand offering everything from tomato paste to seasonings, a staple in many Nigerian kitchens.' },
    { id: 'BRA_019', name: 'Dano', slug: 'dano', logo: 'https://i.ibb.co/HpXh940J/image-2.png', isFeatured: true, brand_description: 'Dano is a leading dairy brand, providing nutritious and creamy milk products for families across Nigeria.' },
    { id: 'BRA_020', name: 'Indomie', slug: 'indomie', logo: 'https://i.ibb.co/PvbJc59d/Indomie.png', isFeatured: false },
    { id: 'BRA_021', name: 'Minimie', slug: 'minimie', logo: 'https://i.ibb.co/jXZ43Lc/minimie.png', isFeatured: false, brand_description: 'Minimie offers a variety of snacks and noodles, loved for their flavor and crunch.' },
    { id: 'BRA_022', name: 'Mimee', slug: 'mimee', logo: 'https://i.ibb.co/R4vrWDBt/mimee.png', isFeatured: false, brand_description: 'Mimee is a popular brand of instant noodles, offering a quick, convenient, and tasty meal option for everyone.' },
    { id: 'BRA_023', name: 'Auntie B', slug: 'auntie-b', logo: 'https://i.ibb.co/vCgrg8Qx/Auntie-b.png', isFeatured: false },
    { id: 'BRA_024', name: 'Crown Flour Mills', slug: 'crown-flour-mills', logo: 'https://i.ibb.co/zhkPMqhT/crown-flour-mill.png', isFeatured: false },
    { id: 'BRA_025', name: 'Dangote Sugar', slug: 'dangote-sugar', logo: 'https://i.ibb.co/23ZwpQp2/Dangote.jpg', isFeatured: false }
];

export async function getBrands(): Promise<Brand[]> {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return brands;
}

export async function getBrandsByCompanyId(companyId: number): Promise<Brand[]> {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    // Return featured brands as a representative selection for the company
    // In a real scenario, you would filter based on a company-brand relationship table
    return brands.filter(brand => brand.isFeatured).slice(0, 4);
}
