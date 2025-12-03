"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";
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

const resourceLinks = [
  { title: "Our Locations", href: "/contact" },
  { title: "Customer Care", href: "/contact" },
  { title: "FAQ", href: "/faq" },
  { title: "Resources", href: "/resources" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productCategories, setProductCategories] = useState<{ title: string, href: string }[]>([]);
  const [productBrands, setProductBrands] = useState<{ title: string, href: string }[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // Handle escape key
      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener("keydown", handleEscapeKey);
      return () => document.removeEventListener("keydown", handleEscapeKey);
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

  const toggleExpandMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

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
    { href: "/contact", label: "Contact", dropdown: resourceLinks },
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
      <div className="container-constrained flex items-center justify-between h-14 sm:h-16 md:h-20 gap-2">
        <div className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-8 min-w-0">
          <Logo className="w-20 sm:w-28 md:w-36 flex-shrink-0" />
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                {link.dropdown || link.subMenus ? (
                   <DropdownMenu>
                    <DropdownMenuTrigger className={cn("flex items-center text-sm font-bold transition-colors hover:text-primary !bg-transparent min-h-11 px-4 py-2 outline-none",
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
                    className={cn("text-sm font-bold transition-colors hover:text-primary min-h-11 px-4 py-2 inline-flex items-center",
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
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <SearchBar />
            <QuoteListIcon />
            <Button asChild size="sm">
                <Link href="/products">Shop now</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
                <Link href="/login">Become a Customer</Link>
            </Button>
        </div>
        <div className="md:hidden flex items-center gap-1.5">
          <QuoteListIcon />
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="min-w-10 min-h-10 flex flex-col justify-center items-center gap-1 p-1.5"
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
        <div className="container-constrained flex flex-col h-full py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <Logo className="w-24 sm:w-28" />
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="min-w-10 min-h-10 flex justify-center items-center p-1.5"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          <div className="mt-3 sm:mt-4 mb-4 sm:mb-6">
            <SearchBar />
          </div>
          <nav className="mt-3 sm:mt-4 overflow-y-auto flex-1">
            <div className="flex flex-col space-y-0.5">
              {navLinks.map((link) => (
                <React.Fragment key={link.label}>
                  {(link.dropdown || link.subMenus) ? (
                    <div className="flex flex-col space-y-0">
                      <button
                        onClick={() => toggleExpandMenu(link.label)}
                        className="flex items-center justify-between w-full rounded-md min-h-10 sm:min-h-11 px-3 py-2.5 text-sm sm:text-base font-bold text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300",
                            expandedMenus.includes(link.label) ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      {expandedMenus.includes(link.label) && (
                        <div className="flex flex-col space-y-0 bg-accent/50 rounded-md ml-2">
                          {link.subMenus ? (
                            <>
                              {link.subMenus.map((subMenu) => (
                                <div key={subMenu.label} className="flex flex-col space-y-0">
                                  <div className="px-3 py-2 text-xs sm:text-sm font-semibold text-muted-foreground">
                                    {subMenu.label}
                                  </div>
                                  {subMenu.items.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={toggleMenu}
                                      className="block w-full min-h-10 px-6 py-2 text-xs sm:text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                  {subMenu.allLink && (
                                    <Link
                                      href={subMenu.allLink.href}
                                      onClick={toggleMenu}
                                      className="block w-full min-h-10 px-6 py-2 text-xs sm:text-sm font-semibold text-primary hover:bg-accent transition-colors border-t flex items-center"
                                    >
                                      {subMenu.allLink.title}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </>
                          ) : (
                            link.dropdown?.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={toggleMenu}
                                className="block w-full min-h-10 px-6 py-2 text-xs sm:text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
                              >
                                {item.title}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="block w-full min-h-11 px-3 py-3 text-lg font-bold text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors flex items-center"
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
