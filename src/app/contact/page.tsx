'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Section, SectionHeading, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from "next/image";
import { findImage } from "@/lib/placeholder-images";
import { GsapScrollTrigger } from "@/components/ui/GsapScrollTrigger";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const standards = [
    {
        title: "Customer Obsession",
        description: "We place our partners at the center of everything we do, anticipating needs and exceeding expectations with every delivery.",
        cta: "Learn More"
    },
    {
        title: "Operational Excellence",
        description: "24-hour delivery, damage-free packaging, and efficient logistics that keep your business running smoothly.",
        cta: "View Our Process"
    },
    {
        title: "Acting with Integrity",
        description: "Transparent pricing, genuine products, and honest dealings in every transaction and interaction.",
        cta: "Report a Grievance"
    }
];

const PageHero = () => {
    return (
        <Section className="bg-primary">
            <div className="container-constrained">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-1/4 h-0.5 bg-accent mx-auto mb-6"></div>
                    <p className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                        Contact Us
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">Get in Touch with BZION</h1>
                    <p className="text-lg text-slate-300 mb-8">We're here to help. Whether you're a potential partner, a customer with a question, or just want to learn more about our services, we'd love to hear from you.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">View Open Positions</Button>
                        <Button size="lg" variant="secondary">Become a Partner</Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}

const ContactForm = () => {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        }
    });

    const onSubmit = (data: ContactFormValues) => {
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you shortly.",
        });
        form.reset();
    }

    return (
        <Section className="bg-gradient-to-b from-secondary/5 to-background">
            <div className="max-w-2xl mx-auto">
                <SectionHeading className="text-center">
                    <SectionTitle>Send us a Message</SectionTitle>
                    <SectionDescription>Fill out the form below and we'll get back to you as soon as possible.</SectionDescription>
                </SectionHeading>
                
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+234 1 234 5678" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="How can we help?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Tell us more about your inquiry..." className="min-h-32" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80">
                            Send Message
                        </Button>
                    </form>
                </Form>
            </div>
        </Section>
    );
}

const ContactDetails = () => {
    const hqImage = findImage('contact-hq');
    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl p-2 bg-white">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem] rounded-2xl"></div>
                    <Image 
                        src={hqImage.imageUrl}
                        alt={hqImage.description}
                        fill
                        className="relative object-cover rounded-xl"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        data-ai-hint={hqImage.imageHint}
                    />
                </div>
                <div className="space-y-10">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">Global Headquarters</h2>
                        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <MapPin className="h-5 w-5 text-secondary" />
                                <h3 className="font-semibold text-primary">Ogun State</h3>
                            </div>
                            <p className="text-slate-600 pl-8 mb-2">123 BZION Avenue, Sagamu, Ogun State, Nigeria</p>
                            <p className="text-slate-600 pl-8 flex items-center gap-2"><Phone className="h-4 w-4"/>+234 1 234 5678</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">Strategic Branches</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="h-5 w-5 text-secondary" />
                                    <h3 className="font-semibold text-primary">Lagos State</h3>
                                </div>
                                <p className="text-slate-600 pl-8 mb-2">BZION Lagos Hub<br/>456 Commerce Drive, Ikeja</p>
                                <p className="text-slate-600 pl-8 flex items-center gap-2"><Phone className="h-4 w-4"/>+234 20 987 6543</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="h-5 w-5 text-secondary" />
                                    <h3 className="font-semibold text-primary">Oyo State</h3>
                                </div>
                                <p className="text-slate-600 pl-8 mb-2">BZION Ibadan Depot<br/>789 Distribution Way, Ibadan</p>
                                <p className="text-slate-600 pl-8 flex items-center gap-2"><Phone className="h-4 w-4"/>+234 30 212 3456</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-20">
                <SectionHeading>
                    <SectionTitle>Email Us</SectionTitle>
                </SectionHeading>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <Mail className="h-5 w-5 text-secondary"/>
                            <h3 className="font-semibold text-primary">Customer Care</h3>
                        </div>
                         <a href="mailto:customercare@bzion.shop" className="text-slate-600 hover:text-primary pl-8 block">customercare@bzion.shop</a>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <Mail className="h-5 w-5 text-secondary"/>
                            <h3 className="font-semibold text-primary">Sales Inquiries</h3>
                        </div>
                        <a href="mailto:sales@bzion.shop" className="text-slate-600 hover:text-primary pl-8 block">sales@bzion.shop</a>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <Mail className="h-5 w-5 text-secondary"/>
                            <h3 className="font-semibold text-primary">General Information</h3>
                        </div>
                        <a href="mailto:info@bzion.shop" className="text-slate-600 hover:text-primary pl-8 block">info@bzion.shop</a>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default function ContactPage() {
    return (
        <>
            <PageHero />
            <div className="border-b-2 border-slate-200"></div>
            <ContactDetails />
            <ContactForm />
            
            <Section className="bg-slate-100/50">
                <SectionHeading>
                    <SectionTitle>How We Keep Our Standards High</SectionTitle>
                </SectionHeading>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {standards.map((standard, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center">
                            <h3 className="text-xl font-semibold text-primary mb-4">{standard.title}</h3>
                            <p className="text-slate-600 mb-6 flex-grow">{standard.description}</p>
                            <Button variant="outline">{standard.cta}</Button>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    )
}
