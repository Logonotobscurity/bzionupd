
'use client';
import { Section } from "@/components/ui/section"
import { AnimatedDiv } from "@/components/animated-div";
import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 20, suffix: '+', label: 'Years in Business' },
    { value: 3000, suffix: '+', label: 'Happy Customers' },
    { value: 50, suffix: '+', label: 'Partner Brands' }
]

const CountUpNumber = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLPivElement>(null);
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
        <Section className="bg-primary text-primary-foreground">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
                {stats.map((stat, index) => (
                    <AnimatedDiv key={stat.label} delay={index * 0.1}>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-5xl xs:text-5xl sm:text-5xl md:text-8xl lg:text-10xl font-black text-accent leading-tight tracking-tight">
                                <CountUpNumber value={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-200 mt-3 sm:mt-4 md:mt-6 leading-snug">{stat.label}</p>
                        </div>
                    </AnimatedDiv>
                ))}
            </div>
        </Section>
    )
}

export default CompanyStats;
