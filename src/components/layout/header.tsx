"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { QuoteListIcon } from "./quote-list-icon";
import { getCategories } from "@/services/categoryService";
import { getBrands } from "@/services/brandService";
import { type Category, type Brand } from "@/lib/schema";
import { QuoteDrawer } from "./quote-drawer";

const aboutLinks = [
  { title: "Our Story", href: "/about" },
  { title: "Mission & Vision", href: "/about#mission-vision" },
  { title: "Leadership", href: "/about#leadership" },
];

const customerTypes = [
  { title: "For Retail & Supermarkets", href: "/customers#customer-retail" },
  { title: "For Bulk Buyers & Wholesalers", href: "/customers#customer-wholesalers" },
  { title: "For Schools & Institutions", href: "/customers#customer-institutions" },
  { title: "For Events & Celebrations", href: "/customers#customer-events" },
  { title: "For Export & International Orders", href: "/customers#customer-export" },
  { title: "For Healthcare & Hospitality", href: "/customers#customer-hospitality" },
];

const supplierLinks = [
  { title: "Our Company Partners", href: "/companies" },
  { title: "Become a Supplier", href: "/contact" },
];

const contactLinks = [
  { title: "Our Locations", href: "/contact" },
  { title: "Customer Care", href: "/contact" },
  { title: "FAQ", href: "/faq" },
  { title: "News & Insights", href: "/news" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productCategories, setProductCategories] = useState<{ title: string, href: string }[]>([]);
  const [productBrands, setProductBrands] = useState<{ title: string, href: string }[]>([]);
  const [isClient, setIsClient] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const categories = getCategories();
    setProductCategories(categories.map(c => ({ title: c.name, href: `/products/category/${c.slug}` })));
    
    getBrands().then(brands => {
      setProductBrands(brands.filter(b => b.isFeatured).map(b => ({ title: b.name, href: `/products/brand/${b.slug}` })));
    });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    {
      href: "/about",
      label: "About",
      dropdown: aboutLinks,
    },
    {
      href: "/products",
      label: "Products",
      subMenus: [
        {
          label: "Shop by Category",
          items: productCategories,
          allLink: { title: "All Categories", href: "/products/categories" }
        },
        {
          label: "Shop by Brand",
          items: productBrands,
          allLink: { title: "All Brands", href: "/products" }
        },
      ],
    },
    {
      href: "/customers",
      label: "Customers",
      dropdown: customerTypes,
    },
    {
      href: "/suppliers",
      label: "Suppliers",
      dropdown: supplierLinks,
    },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact", dropdown: contactLinks },
  ];
  
  if (!isClient) {
    return (
        <header
            className="sticky top-0 z-40 w-full bg-white shadow-sm"
        >
            <div className="container-constrained flex items-center justify-between h-[60px] md:h-[80px]">
                <Logo className="w-[120px] md:w-[162px]" />
            </div>
        </header>
    );
  }

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-300"
      )}
    >
      <div className="container-constrained flex items-center justify-between h-[60px] md:h-[80px]">
        <div className="flex items-center gap-x-8">
          <Logo className="w-[120px] md:w-[162px]" />
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                {link.dropdown || link.subMenus ? (
                   <DropdownMenu>
                    <DropdownMenuTrigger className={cn("flex items-center text-sm font-bold transition-colors hover:text-primary !bg-transparent px-3 py-2 outline-none",
                       pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
                    )}>
                      {link.label}
                      <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.subMenus ? (
                        <>
                          {link.subMenus.map(subMenu => (
                            <DropdownMenuSub key={subMenu.label}>
                              <DropdownMenuSubTrigger>
                                <span>{subMenu.label}</span>
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent>
                                {subMenu.items.map(item => (
                                  <DropdownMenuItem key={item.title} asChild>
                                    <Link href={item.href}>{item.title}</Link>
                                  </DropdownMenuItem>
                                ))}
                                {subMenu.allLink && (
                                  <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                      <Link href={subMenu.allLink.href}>{subMenu.allLink.title}</Link>
                                    </DropdownMenuItem>
                                  </>
                                )}
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          ))}
                        </>
                      ) : (
                        link.dropdown?.map((item) => (
                          <DropdownMenuItem key={item.title} asChild>
                            <Link href={item.href}>{item.title}</Link>
                          </DropdownMenuItem>
                        ))
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className={cn("text-sm font-bold transition-colors hover:text-primary px-3 py-2",
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
            <QuoteListIcon />
            <Button asChild>
                <Link href="/products">Shop now</Link>
            </Button>
            <Button asChild variant="outline">
                <Link href="/contact">Become a Customer</Link>
            </Button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <QuoteListIcon />
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="w-11 h-11 flex flex-col justify-center items-center gap-1"
          >
            <span
              className={cn(
                "block w-5 h-0.5 bg-foreground transition-transform duration-300 ease-in-out",
                isMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              )}
            ></span>
            <span
              className={cn(
                "block w-5 h-0.5 bg-foreground transition-opacity duration-300 ease-in-out",
                isMenuOpen ? "opacity-0" : ""
              )}
            ></span>
            <span
              className={cn(
                "block w-5 h-0.5 bg-foreground transition-transform duration-300 ease-in-out",
                isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              )}
            ></span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={toggleMenu}
        />
      )}
      <div
        className={cn(
          "fixed inset-y-0 left-0 bg-white z-[100] w-full max-w-sm transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container-constrained flex flex-col h-full py-6">
          <div className="flex justify-between items-center">
            <Logo className="w-[120px]" />
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="w-11 h-11 flex justify-center items-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="mt-8 overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <React.Fragment key={link.label}>
                  {(link.dropdown || link.subMenus) ? (
                    <div className="flex flex-col space-y-1 py-2">
                       <Link
                          href={link.href}
                          onClick={toggleMenu}
                           className="block w-full rounded-md px-3 py-3 text-lg font-bold text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {link.label}
                        </Link>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="block w-full rounded-md px-3 py-3 text-lg font-bold text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </nav>
          <div className="space-y-2 border-t pt-6 mt-auto mb-6">
            <Button
              asChild
              className="w-full h-11"
            >
              <Link href="/login" onClick={toggleMenu}>
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
    <QuoteDrawer />
    </>
  );
}
