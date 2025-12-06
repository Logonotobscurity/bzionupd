
"use client";

import { useQuoteStore } from "@/lib/quote-store";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

export const QuoteListIcon = () => {
  const { items, setOpen } = useQuoteStore();

  return (
    <Button onClick={() => setOpen(true)} variant="ghost" className="relative">
      <ShoppingBag />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
          {items.length}
        </span>
      )}
      <span className="sr-only">Open quote request drawer</span>
    </Button>
  );
};
