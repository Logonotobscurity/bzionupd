
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface QuoteContextType {
  quoteList: Product[];
  addToQuote: (product: Product) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [quoteList, setQuoteList] = useState<Product[]>([]);

  const addToQuote = (product: Product) => {
    setQuoteList((prevList) => {
      // Prevent adding duplicates
      if (prevList.some(item => item.id === product.id)) {
        return prevList;
      }
      return [...prevList, product];
    });
  };

  const removeFromQuote = (productId: string) => {
    setQuoteList((prevList) => prevList.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setQuoteList((prevList) =>
      prevList.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearQuote = () => {
    setQuoteList([]);
  }

  return (
    <QuoteContext.Provider value={{ quoteList, addToQuote, removeFromQuote, updateQuantity, clearQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
