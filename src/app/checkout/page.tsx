'use client';

import { useQuoteStore, type QuoteItem } from '@/lib/quote-store';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Breadcrumbs } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { AnimatedDiv } from '@/components/animated-div';
import { Package, Truck, Shield, CheckCircle } from 'lucide-react';

const checkoutSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  company: z.string().optional(),
  address: z.string().min(1, { message: 'Address is required.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  state: z.string().min(1, { message: 'State is required.' }),
  phone: z.string().min(1, { message: 'Phone number is required.' }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, clearQuote } = useQuoteStore((state) => ({
    items: state.items as QuoteItem[],
    clearQuote: state.clearQuote,
  }));
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      address: '',
      city: '',
      state: '',
      phone: '',
    }
  });

  const { formState: { isSubmitting } } = form;

  const onSubmit = async (data: CheckoutFormValues) => {
    const message = `Address: ${data.address}, ${data.city}, ${data.state}`;
    const name = `${data.firstName} ${data.lastName}`;

    try {
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          name,
          message,
          items,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request.');
      }

      const result = await response.json();

      toast({
        title: 'Quote Request Submitted!',
        description: 'Thank you! We will get back to you shortly.',
      });

      // Open WhatsApp if URL is available
      if (result.whatsappUrl) {
        setTimeout(() => {
          window.open(result.whatsappUrl, '_blank', 'noopener,noreferrer');
        }, 500);
      }
      
      clearQuote();
      router.push('/');

    } catch (error) {
      console.error(error);
      toast({
        title: 'Submission Error',
        description: 'There was a problem submitting your request. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Submit Request', href: '/checkout' },
  ];

  return (
    <main className="flex-grow bg-white md:bg-gradient-to-b md:from-slate-50 md:via-white md:to-slate-50 min-h-screen">
      <Section className="py-6 md:py-12 px-4 md:px-0">
        <div className="mb-8 md:mb-12">
            <div className="hidden md:block mb-6">
              <Breadcrumbs items={breadcrumbItems} lightText={false} />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mt-2 md:mt-4 mb-2 md:mb-3">Complete Your Quote</h1>
            <p className="text-base md:text-lg xl:text-xl text-slate-600 max-w-2xl">Review your items and provide your delivery details to get started</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* --- LEFT: CHECKOUT FORM (Takes 2 columns) --- */}
          <div className="lg:col-span-2 order-2 lg:order-1 will-change-auto">
            <Card className="shadow-sm md:shadow-lg border border-slate-200/50 md:border-slate-200/80 rounded-xl md:rounded-2xl">
              <Form {...form}>
                <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
                  {/* Contact Information Section */}
                  <CardHeader className="bg-slate-50 md:bg-gradient-to-r md:from-slate-50 md:to-slate-100/50 border-b border-slate-200/50 p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base md:text-xl">Contact Information</CardTitle>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 ml-11 md:ml-13">How we'll reach you about your order</p>
                  </CardHeader>
                  <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-bold text-slate-900 text-sm md:text-base">Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="you@company.com" className="rounded-lg md:rounded-xl border-slate-300 focus:border-primary h-9 md:h-11 text-sm md:text-base" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                  </CardContent>

                  {/* Business Information Section */}
                  <CardHeader className="bg-slate-50 md:bg-gradient-to-r md:from-slate-50 md:to-slate-100/50 border-t md:border-t border-b border-slate-200/50 p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Package className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base md:text-xl">Delivery Information</CardTitle>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 ml-11 md:ml-13">Where we'll send your products</p>
                  </CardHeader>
                  <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <FormField control={form.control} name="firstName" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-slate-900 text-sm md:text-base">First Name</FormLabel>
                                <FormControl><Input className="rounded-lg md:rounded-xl border-slate-300 focus:border-primary h-9 md:h-11 text-sm md:text-base" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="lastName" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-slate-900 text-sm md:text-base">Last Name</FormLabel>
                                <FormControl><Input className="rounded-lg md:rounded-xl border-slate-300 focus:border-primary h-9 md:h-11 text-sm md:text-base" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                     <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-slate-900">Company Name <span className="text-slate-500 font-normal">(optional)</span></FormLabel>
                            <FormControl><Input className="rounded-xl border-slate-300 focus:border-primary h-11 text-base" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                     )} />
                    <FormField control={form.control} name="address" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-slate-900">Street Address</FormLabel>
                            <FormControl><Input className="rounded-xl border-slate-300 focus:border-primary h-11 text-base" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <div className="grid sm:grid-cols-2 gap-6">
                         <FormField control={form.control} name="city" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold text-slate-900">City</FormLabel>
                                <FormControl><Input className="rounded-xl border-slate-300 focus:border-primary h-11 text-base" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                         <FormField control={form.control} name="state" render={({ field }) => (
                             <FormItem>
                                <FormLabel className="font-bold text-slate-900">State/Region</FormLabel>
                                <FormControl><Input className="rounded-xl border-slate-300 focus:border-primary h-11 text-base" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                         )} />
                    </div>
                     <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-slate-900">Phone Number</FormLabel>
                            <FormControl><Input className="rounded-xl border-slate-300 focus:border-primary h-11 text-base" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                     )} />
                </CardContent>
                </form>
              </Form>
            </Card>
          </AnimatedDiv>

          {/* --- RIGHT: ORDER SUMMARY --- */}
          <div className="lg:col-span-1 order-1 lg:order-2 space-y-4 md:space-y-6">
             {/* Summary Card */}
             <Card className="shadow-sm md:shadow-lg border border-slate-200/50 md:border-slate-200/80 md:sticky md:top-24 md:max-h-[calc(100vh-7rem)] flex flex-col">
                <CardHeader className="bg-slate-50 md:bg-gradient-to-r md:from-primary/5 md:to-secondary/5 border-b border-slate-200/50 md:border-primary/10 p-4 md:p-6 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base md:text-lg">Quote Summary</CardTitle>
                      <div className="px-2 md:px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs md:text-sm">{items.length} items</div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4 md:pt-6 flex-1 flex flex-col overflow-hidden">
                    <div className="space-y-3 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 flex-1">
                        {items.length > 0 ? (
                            items.map((item) => {
                                return (
                                    <div key={item.id} className="flex items-start gap-3 pb-3 border-b border-slate-200/50 last:border-0">
                                        <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                                            <Image src={item.images?.[0] || item.imageUrl || '/images/placeholder.jpg'} alt={item.name || 'Product'} fill className="object-contain p-1" sizes="56px" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-slate-900 text-xs md:text-sm line-clamp-2">{item.name || 'Product'}</p>
                                            <p className="text-xs text-slate-600 mt-1">Qty: <span className="font-bold text-primary">{item.quantity}</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <p className="text-sm text-slate-500 text-center py-8">Your quote request is empty.</p>
                        )}
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-slate-200/50 mt-3 md:mt-4 flex-shrink-0">
                      <div className="flex items-start gap-2">
                        <Truck className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-medium text-slate-700">Fast delivery across Nigeria</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-medium text-slate-700">Quality guaranteed products</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs font-medium text-slate-700">Competitive wholesale pricing</span>
                      </div>
                    </div>
                </CardContent>
             </Card>

             {/* Submit Button */}
             <Button type="submit" form="checkout-form" size="lg" className="w-full rounded-lg md:rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white text-sm md:text-base font-bold py-2 md:py-3 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-2xl hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-slate-400 transition-all duration-200 h-10 md:h-12 flex-shrink-0" disabled={isSubmitting || items.length === 0}>
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
             </Button>

             {/* Trust Badge */}
             <div className="text-center p-3 md:p-4 rounded-lg md:rounded-xl bg-slate-50 border border-slate-200/50 flex-shrink-0">
              <p className="text-xs text-slate-600">🔒 <span className="font-bold">Secure & Confidential</span></p>
              <p className="text-xs text-slate-500 mt-1">Your information is protected and only used for order processing</p>
             </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
