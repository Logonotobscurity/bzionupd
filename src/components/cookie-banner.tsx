"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-0 right-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-[2000] p-4 md:bottom-4 md:left-4 md:right-auto md:max-w-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm text-slate-700">
          Our website uses cookies to provide you with the best experience. By clicking "Accept," you consent to the use of cookies.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button 
            onClick={() => setShowBanner(false)} 
            variant="default"
            size="sm"
          >
            Accept
          </Button>
          <Button 
            onClick={() => setShowBanner(false)} 
            variant="outline"
            size="sm"
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
