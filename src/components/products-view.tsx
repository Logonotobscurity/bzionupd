
'use client';
import { useState } from 'react';
import { ProductService } from '@/services/productService';
import { categories } from '@/lib/category-data';
import { brands } from '@/lib/brand-data';
import { ProductCard } from '@/components/product-card';
import { BrandCard } from '@/components/ui/brand-card';
import { CategoryCard } from '@/components/ui/category-card';
import { Section, SectionTitle, SectionHeading, SectionDescription } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const allProducts = ProductService.getAllProducts();
const brandStats = ProductService.getBrandStats();
const categoryStats = ProductService.getCategoryStats();

interface ProductsViewProps {
  title?: string;
}

const PRODUCTS_PER_PAGE = 12;

export default function ProductsView({ title = 'All Products' }: ProductsViewProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Calculate pagination for products
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(startIndex, endIndex);

  // Generate page numbers for pagination display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <Section id="all-products" className="py-12 md:py-16">
        <SectionHeading className="text-center">
            <SectionTitle>{title}</SectionTitle>
            <SectionDescription>Browse our extensive catalog of quality products.</SectionDescription>
        </SectionHeading>

        <div className="flex justify-center gap-2 md:gap-4 my-6 md:my-8 flex-wrap">
            <Button 
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => handleFilterClick('all')}
                size="sm" className="text-xs md:text-sm"
            >
                All Products
            </Button>
            <Button 
                variant={activeFilter === 'brand' ? 'default' : 'outline'}
                onClick={() => handleFilterClick('brand')}
                size="sm" className="text-xs md:text-sm"
            >
                Shop by Brand
            </Button>
            <Button 
                variant={activeFilter === 'category' ? 'default' : 'outline'}
                onClick={() => handleFilterClick('category')}
                size="sm" className="text-xs md:text-sm"
            >
                Shop by Category
            </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {activeFilter === 'all' && paginatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            {activeFilter === 'brand' && brands.map(brand => {
                const stats = brandStats[brand.name] || { productCount: 0, categoryCount: 0 };
                return <BrandCard key={brand.id} brand={brand} productCount={stats.productCount} categoryCount={stats.categoryCount} />;
            })}
            {activeFilter === 'category' && categories.map(category => {
                const stats = categoryStats[category.slug] || { productCount: 0, brandCount: 0 };
                return <CategoryCard key={category.id} category={category} productCount={stats.productCount} brandCount={stats.brandCount} />;
            })}
        </div>

        {/* Pagination Controls - Only show for products view */}
        {activeFilter === 'all' && totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>

                {getPageNumbers().map((page, index) => (
                  <PaginationItem key={index}>
                    {page === 'ellipsis' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page as number);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
    </Section>
  );
}
