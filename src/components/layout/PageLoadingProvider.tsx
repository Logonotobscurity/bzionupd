'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import PageLoader from '@/components/page-loader';

interface PageLoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showLoader: (message?: string) => void;
  hideLoader: () => void;
}

const PageLoadingContext = createContext<PageLoadingContextType | undefined>(undefined);

export const PageLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('Loading BZION...');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const previousPathname = React.useRef(pathname);

  // Show loader on initial page load
  useEffect(() => {
    if (isInitialLoad) {
      setIsLoading(true);
      setMessage('Loading BZION...');
      
      // Hide loader after initial page load
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 1200);
      
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  // Show loader on pathname change (client-side navigation)
  useEffect(() => {
    if (!isInitialLoad && pathname !== previousPathname.current) {
      setIsLoading(true);
      setMessage('Loading page...');
      previousPathname.current = pathname;
      
      // Hide loader after page transition completes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, isInitialLoad]);

  // Auto hide loader after 3 seconds as safety measure
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const showLoader = (msg?: string) => {
    setMessage(msg || 'Loading...');
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const value: PageLoadingContextType = {
    isLoading,
    setIsLoading,
    showLoader,
    hideLoader
  };

  return (
    <PageLoadingContext.Provider value={value}>
      <PageLoader isLoading={isLoading} message={message} />
      {children}
    </PageLoadingContext.Provider>
  );
};

export const usePageLoading = () => {
  const context = useContext(PageLoadingContext);
  if (!context) {
    throw new Error('usePageLoading must be used within PageLoadingProvider');
  }
  return context;
};

export default PageLoadingProvider;
