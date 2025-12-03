"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show the banner if the user hasn't made a choice yet
    const cookieConsent = localStorage.getItem('cookie_consent');
    if (cookieConsent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary text-primary-foreground shadow-2xl transition-transform duration-500 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container-constrained flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          <Link href="/privacy-policy" className="underline ml-2 hover:text-secondary">
            Learn more
          </Link>
        </p>
        <div className="flex-shrink-0 flex gap-2">
          <Button variant="secondary" onClick={handleAccept}>
            Accept All
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary" onClick={handleDecline}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
