
'use client';
import { Section } from "@/components/ui/section"
import { AnimatedDiv } from "@/components/animated-div";

const stats = [
    { value: '20+', label: 'Years in Business' },
    { value: '3,000+', label: 'Happy Customers' },
    { value: '50+', label: 'Partner Brands' },
    { value: '24-Hour', label: 'Delivery Promise' }
]

const CompanyStats = () => {
    return (
        <Section className="bg-primary text-primary-foreground">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <AnimatedDiv key={stat.label} delay={index * 0.1}>
                        <div className="flex flex-col">
                            <p className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</p>
                            <p className="text-sm md:text-base text-slate-300 mt-2">{stat.label}</p>
                        </div>
                    </AnimatedDiv>
                ))}
            </div>
        </Section>
    )
}

export default CompanyStats;
