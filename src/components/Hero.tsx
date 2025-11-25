import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('relative w-full min-h-[100svh] bg-black overflow-hidden', className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-32">
          <div className="max-w-5xl animate-fade-in">
            <p className="text-[11px] md:text-xs text-neutral-500 uppercase tracking-[0.4em] font-normal mb-10">
              Execution Infrastructure
            </p>

            <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-bold tracking-[-0.02em] text-white leading-[0.9] mb-12">
              The Execution OS<br />
              <span className="text-neutral-600">for Digital Assets</span>
            </h1>
            
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-xl mb-14 font-normal">
              Venue-neutral smart order routing for crypto and tokenised assets. We connect to global liquidity, evaluate real-time depth, fees and latency, and execute with precision.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#what-we-do"
                className="inline-block border border-white text-white font-normal text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-200"
              >
                What We Do
              </a>
              <a 
                href="#contact"
                className="inline-block border border-neutral-700 text-neutral-400 font-normal text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 hover:border-neutral-500 hover:text-white transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
