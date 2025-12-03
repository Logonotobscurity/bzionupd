
"use client";

import { useState, useEffect } from 'react';
import { useQuoteStore } from '@/lib/quote-store';
import { Button } from '@/components/ui/button';
import { type Product } from '@/lib/data';

interface AddToQuoteButtonProps {
  product: Product;
}

export const AddToQuoteButton = ({ product }: AddToQuoteButtonProps) => {
  const { addProduct, items } = useQuoteStore();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const alreadyInQuote = items.some((item) => item.id === product.id);
    setIsAdded(alreadyInQuote);
  }, [items, product.id]);

  const handleAddToQuote = () => {
    addProduct(product, 1);
    setIsAdded(true);
  };

  return (
    <Button onClick={handleAddToQuote} disabled={isAdded} className="w-full min-h-11 h-auto py-2 text-xs sm:text-sm">
      {isAdded ? 'Added to Quote List' : 'Add to Quote List'}
    </Button>
  );
};
