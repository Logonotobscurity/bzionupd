
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useUIStore } from '@/stores/uiStore';
import { searchProducts, getSuggestions, type SearchResult } from '@/services/searchService';
import { Search, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

export function SearchBar() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const {
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    toggleSearch,
  } = useUIStore();

  const MIN_CHARS = 3;

  // Search handler
  const handleSearch = useCallback(
    async (query: string) => {
      setSearchQuery(query);

      if (query.length >= MIN_CHARS) {
        const searchResults = await searchProducts(query, MIN_CHARS);
        setResults(searchResults);
      } else {
        setResults([]);
      }

      // Get suggestions for autocomplete
      if (query.length >= 2) {
        const sug = await getSuggestions(query);
        setSuggestions(sug);
      } else {
        setSuggestions([]);
      }

      setShowDropdown(true);
    },
    [setSearchQuery]
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  // Clear search
  const handleClear = useCallback(() => {
    setSearchQuery('');
    setResults([]);
    setSuggestions([]);
    setShowDropdown(false);
    searchInputRef.current?.focus();
  }, [setSearchQuery]);

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchQuery.length >= MIN_CHARS) {
        // Navigate to products page with search query
        window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
      }
    }
  };

  // Handle blur - collapse on desktop
  const handleBlur = () => {
    if (!isMobile) {
      setTimeout(() => {
        setShowDropdown(false);
      }, 200); // Allow time for dropdown click
    }
  };

  // Handle focus - expand on desktop
  const handleFocus = () => {
    if (!isMobile && searchQuery.length > 0) {
      setShowDropdown(true);
    }
  };

  // Close search on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobile && isSearchOpen) {
        toggleSearch();
      }
    };

    if (isMobile && isSearchOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobile, isSearchOpen, toggleSearch]);

  if (isMobile) {
    // Mobile: Full-width search in menu
    return (
      <div className="w-full">
        <button
          onClick={() => {
            toggleSearch();
            setTimeout(() => searchInputRef.current?.focus(), 0);
          }}
          className="w-full flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-primary transition-colors"
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
          <span className="text-sm">Search products...</span>
        </button>

        {isSearchOpen && (
          <div className="p-3 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-9"
                aria-label="Search for products"
              />
              {searchQuery && (
                <button
                  onClick={handleClear}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Mobile Results */}
            {results.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Results ({results.length})
                </p>
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={`/products/${result.slug}`}
                    onClick={() => toggleSearch()}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className="relative h-12 w-12 rounded border border-slate-200 overflow-hidden flex-shrink-0">
                      <Image
                        src={result.imageUrl}
                        alt={result.name}
                        fill
                        className="object-contain p-1"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {result.name}
                      </p>
                      <p className="text-xs text-slate-500">{result.brand}</p>
                    </div>
                  </Link>
                ))}
                {results.length > 0 && (
                  <Link
                    href={`/products?search=${encodeURIComponent(searchQuery)}`}
                    onClick={() => toggleSearch()}
                    className="flex items-center justify-center gap-1 py-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    View All Results
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            )}

            {/* Mobile Suggestions */}
            {!results.length && suggestions.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Suggestions
                </p>
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    className="w-full text-left px-2 py-2 rounded-lg hover:bg-slate-100 transition-colors text-sm text-slate-700"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {searchQuery.length > 0 &&
              searchQuery.length < MIN_CHARS &&
              results.length === 0 && (
                <p className="text-xs text-slate-500 text-center">
                  Type at least {MIN_CHARS} characters to search
                </p>
              )}
          </div>
        )}
      </div>
    );
  }

  // Desktop: Expand on click, collapse on blur
  return (
    <div className="relative w-full max-w-xs">
      <div
        className={cn(
          'relative flex items-center gap-2 px-3 py-2 border border-slate-300 rounded-lg transition-all duration-300',
          isSearchOpen || showDropdown
            ? 'ring-2 ring-primary border-primary'
            : 'hover:border-slate-400'
        )}
      >
        <Search className="h-5 w-5 text-slate-400 flex-shrink-0" />
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search products..."
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-400"
          aria-label="Search for products"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Desktop Dropdown */}
      {showDropdown && (results.length > 0 || suggestions.length > 0) && (
        <div
          id="search-results"
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
        >
          {results.length > 0 && (
            <div className="border-b border-slate-200">
              <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">
                Products ({results.length})
              </div>
              <div className="divide-y divide-slate-100">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={`/products/${result.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="relative h-10 w-10 rounded border border-slate-200 overflow-hidden flex-shrink-0">
                      <Image
                        src={result.imageUrl}
                        alt={result.name}
                        fill
                        className="object-contain p-1"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 group-hover:text-primary transition-colors truncate">
                        {result.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {result.brand} • {result.category}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-primary flex-shrink-0">
                      ₦{result.price.toLocaleString()}
                    </span>
                  </Link>
                ))}
              </div>
              {results.length > 0 && (
                <Link
                  href={`/products?search=${encodeURIComponent(searchQuery)}`}
                  className="flex items-center justify-center gap-1 px-4 py-3 text-sm font-semibold text-primary hover:text-primary-dark hover:bg-slate-50 transition-colors border-t border-slate-200"
                >
                  View All Results
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}

          {!results.length && suggestions.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">
                Suggestions
              </div>
              <div className="divide-y divide-slate-100">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSearch(suggestion)}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-sm text-slate-700 hover:text-primary"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchQuery.length > 0 &&
            searchQuery.length < MIN_CHARS && (
              <div className="px-4 py-6 text-center text-sm text-slate-500">
                Type at least {MIN_CHARS} characters to search
              </div>
            )}

          {searchQuery.length >= MIN_CHARS &&
            results.length === 0 &&
            suggestions.length === 0 && (
              <div className="px-4 py-6 text-center text-sm text-slate-500">
                No products found matching "{searchQuery}"
              </div>
            )}
        </div>
      )}
    </div>
  );
}
