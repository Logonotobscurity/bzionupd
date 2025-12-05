'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuoteStore } from "@/lib/quote-store";
import { Trash2, Plus, Minus, ShoppingBag, Package } from "lucide-react";
import Link from "next/link";
import { AnimatedDiv } from "@/components/animated-div";

export function QuoteDrawer() {
  const { items, removeProduct, updateQuantity, clearQuote, isOpen, setOpen } = useQuoteStore();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeProduct(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-gradient-to-b from-white to-slate-50/80">
        {/* Header */}
        <SheetHeader className="p-6 border-b border-slate-200/80 bg-gradient-to-r from-slate-50 to-slate-100/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <SheetTitle className="text-xl">Quote Request</SheetTitle>
                <p className="text-xs text-slate-600 mt-1">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm">
              {items.length}
            </div>
          </div>
        </SheetHeader>
        
        {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center p-8">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                  <Package className="h-8 w-8 text-slate-400" />
                </div>
                <div>
                  <p className="text-slate-700 font-semibold mb-2">Your quote is empty</p>
                  <p className="text-sm text-slate-600">Browse products and add items to get started</p>
                </div>
                <Button onClick={() => setOpen(false)} variant="outline" size="lg" className="rounded-xl border-slate-300">
                  Continue Browsing
                </Button>
            </div>
        ) : (
          <>
            <ScrollArea className="flex-1">
              <div className="divide-y divide-slate-200/50">
                {items.map((item, index) => {
                  return (
                    <AnimatedDiv key={item.id} delay={index * 0.05} className="p-4 hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-start gap-4">
                        {/* Product Image */}
                        <div className="relative h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-slate-200/80 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                          <Image
                            src={item.imageUrl || '/images/placeholder.jpg'}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                            sizes="80px"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-slate-900 text-sm line-clamp-2 mb-1">{item.name}</p>
                          <p className="text-xs text-slate-600">SKU: {item.id}</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-3 bg-slate-100/80 rounded-lg p-1 w-fit border border-slate-200/80">
                            <button 
                              onClick={() => handleQuantityChange(String(item.id), item.quantity - 1)}
                              className="h-7 w-7 rounded-md hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary active:scale-95 active:shadow-md transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-primary"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="font-bold text-slate-900 text-sm w-8 text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => handleQuantityChange(String(item.id), item.quantity + 1)}
                              className="h-7 w-7 rounded-md hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary active:scale-95 active:shadow-md transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-primary"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button 
                          onClick={() => removeProduct(item.id)}
                          className="h-9 w-9 rounded-lg hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400 active:scale-95 transition-all duration-200 flex items-center justify-center text-slate-400 hover:text-red-600 flex-shrink-0"
                          title={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove {item.name}</span>
                        </button>
                      </div>
                    </AnimatedDiv>
                  );
                })}
              </div>
            </ScrollArea>

            {/* Footer */}
            <SheetFooter className="p-6 border-t border-slate-200/80 bg-gradient-to-r from-slate-50/50 to-white space-y-4">
              <div className="w-full space-y-3">
                {/* Summary */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">Total Items:</span>
                    <span className="font-bold text-primary text-lg">{totalItems}</span>
                  </div>
                  <p className="text-xs text-slate-600">Ready to submit? Click below to proceed</p>
                </div>

                {/* Actions */}
                {items.length > 0 && (
                  <Button 
                    variant="destructive" 
                    size="lg" 
                    onClick={clearQuote} 
                    className="w-full rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400 transition-all duration-200"
                  >
                    Clear All Items
                  </Button>
                )}
                <Button 
                  size="lg" 
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/90 text-base font-bold text-white shadow-lg hover:shadow-2xl hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-all duration-200" 
                  asChild 
                  onClick={() => setOpen(false)}
                >
                  <Link href="/checkout" className="flex items-center justify-center">
                    Submit Quote Request
                    <Plus className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
