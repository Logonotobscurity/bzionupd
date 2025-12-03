
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
    <Button onClick={handleAddToQuote} disabled={isAdded} className="w-full" size="sm" className="md:h-auto md:py-2">
      {isAdded ? 'Added to Quote List' : 'Add to Quote List'}
    </Button>
  );
};
