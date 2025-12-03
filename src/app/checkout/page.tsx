'use client';

import { useQuoteStore } from '@/lib/quote-store';
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
import { findImage } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

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
  const { items, clearQuote } = useQuoteStore(state => ({
      items: state.items,
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

      toast({
        title: 'Quote Request Submitted!',
        description: 'Thank you! We will get back to you shortly.',
      });
      
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
    <main className="flex-grow bg-slate-50">
      <Section className="py-8">
        <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} lightText={false} />
            <h1 className="text-3xl md:text-4xl font-bold text-primary mt-4">Submit Quote Request</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Checkout Form */}
          <Card>
            <Form {...form}>
              <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </CardContent>

                <CardHeader>
                    <CardTitle>Business Information</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="firstName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="lastName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                     <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company (optional)</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                     )} />
                    <FormField control={form.control} name="address" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <div className="grid sm:grid-cols-2 gap-4">
                         <FormField control={form.control} name="city" render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                         <FormField control={form.control} name="state" render={({ field }) => (
                             <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                         )} />
                    </div>
                     <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl><Input {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                     )} />
                </CardContent>
              </form>
            </Form>
          </Card>

          {/* Order Summary */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
             <Card>
                <CardHeader>
                    <CardTitle>Request Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {items.length > 0 ? (
                            items.map(item => {
                                const image = findImage(item.imageId);
                                return (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-16 h-16 bg-white border border-slate-200 rounded-md overflow-hidden flex-shrink-0">
                                                <Image src={image.imageUrl} alt={item.name} fill className="object-contain p-1" sizes="64px" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">{item.name}</p>
                                                <p className="text-xs text-slate-500">SKU: {item.id}</p>
                                                <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <p className="text-sm text-slate-500 text-center py-4">Your quote request is empty.</p>
                        )}
                    </div>
                </CardContent>
             </Card>
             <Button type="submit" form="checkout-form" size="lg" className="w-full" disabled={isSubmitting || items.length === 0}>
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
             </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
