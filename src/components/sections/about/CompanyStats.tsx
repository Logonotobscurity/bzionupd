
'use client';
import { Section } from "@/components/ui/section"
import { GsapScrollTrigger } from "@/components/ui/GsapScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award } from "lucide-react";

const stats = [
    { 
        value: 20, 
        suffix: '+', 
        label: 'Years in Business',
        description: 'Trusted partner in FMCG supply chain',
        icon: TrendingUp,
        color: 'from-orange-500 to-red-500'
    },
    { 
        value: 3000, 
        suffix: '+', 
        label: 'Happy Customers',
        description: 'Businesses powered by BZION',
        icon: Users,
        color: 'from-blue-500 to-cyan-500'
    },
    { 
        value: 50, 
        suffix: '+', 
        label: 'Partner Brands',
        description: 'Quality products from trusted manufacturers',
        icon: Award,
        color: 'from-green-500 to-emerald-500'
    }
]

const CountUpNumber = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const startTime = Date.now();
                    
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const currentCount = Math.floor(value * progress);
                        setCount(currentCount);
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(value);
                        }
                    };
                    
                    animate();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [value, duration]);

    return (
        <div ref={elementRef}>
            {count.toLocaleString()}{suffix}
        </div>
    );
};

const CompanyStats = () => {
    return (
        <Section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
            <GsapScrollTrigger>
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        BZION by the Numbers
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Our impact on Nigeria's food supply chain, one business at a time
                    </p>
                </div>
            </GsapScrollTrigger>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <GsapScrollTrigger key={stat.label} delay={index * 0.15}>
                            <div className="group h-full">
                                {/* Card */}
                                <div className="relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30">
                                    {/* Gradient accent bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}></div>

                                    {/* Decorative icon background */}
                                    <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r ${stat.color} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Content */}
                                    <div className="relative p-8 md:p-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <div className={`inline-flex w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-lg bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                        </div>

                                        {/* Main stat number */}
                                        <div className="mb-3">
                                            <p className="text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                                <CountUpNumber value={stat.value} suffix={stat.suffix} />
                                            </p>
                                        </div>

                                        {/* Label */}
                                        <h3 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                                            {stat.label}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
                                            {stat.description}
                                        </p>

                                        {/* Bottom accent line */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    </div>
                                </div>
                            </div>
                        </GsapScrollTrigger>
                    );
                })}
            </div>
        </Section>
    )
}

export default CompanyStats;
