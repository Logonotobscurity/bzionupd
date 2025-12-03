'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuoteStore } from "@/lib/quote-store";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { findImage } from "@/lib/placeholder-images";

export function QuoteDrawer() {
  const { items, removeProduct, clearQuote, isOpen, setOpen } = useQuoteStore();
  
  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle>Quote Request ({items.length})</SheetTitle>
          <SheetDescription>
            Review your items and submit your request.
          </SheetDescription>
        </SheetHeader>
        
        {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-6">
                <p className="text-muted-foreground">Your quote request is empty.</p>
                <Button onClick={() => setOpen(false)} variant="outline">Continue Browsing</Button>
            </div>
        ) : (
          <>
            <ScrollArea className="flex-1">
              <div className="divide-y divide-border">
                {items.map((item) => {
                  const image = findImage(item.imageId);
                  return (
                    <div key={item.id} className="flex items-start gap-4 p-4">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden border">
                        <Image
                          src={image.imageUrl}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeProduct(item.id)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Remove {item.name}</span>
                      </Button>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            <SheetFooter className="p-6 border-t bg-background">
              <div className="w-full space-y-4">
                 {items.length > 0 && (
                  <Button variant="outline" size="sm" onClick={clearQuote} className="w-full">
                    Clear All
                  </Button>
                )}
                <Button size="lg" className="w-full" asChild onClick={() => setOpen(false)}>
                  <Link href="/checkout">
                    Submit Quote Request
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
