import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('py-28 md:py-36 bg-black', className)}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <FadeIn>
            <p className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-[0.95] tracking-[-0.02em]">
              Get Started
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-20 max-w-2xl font-normal">
              Reduce execution cost. Full transparency. No custody risk.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <FadeIn delay={150}>
              <div className="border-t border-neutral-800 pt-10">
                <h3 className="text-base font-bold text-white mb-6">For Institutions</h3>
                <ul className="text-neutral-600 space-y-3 text-sm font-normal">
                  <li>Multi-venue access</li>
                  <li>Total execution cost reduction</li>
                  <li>Transparent analytics</li>
                  <li>No custody risk</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="border-t border-neutral-800 pt-10">
                <h3 className="text-base font-bold text-white mb-6">For Brokers</h3>
                <ul className="text-neutral-600 space-y-3 text-sm font-normal">
                  <li>Best-execution engine</li>
                  <li>Liquidity optimization</li>
                  <li>Plug-and-play API</li>
                  <li>Regulatory-grade logs</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={250}>
              <div className="border-t border-neutral-800 pt-10">
                <h3 className="text-base font-bold text-white mb-6">For Funds</h3>
                <ul className="text-neutral-600 space-y-3 text-sm font-normal">
                  <li>Low-latency multi-venue execution</li>
                  <li>Automated sizing and slicing</li>
                  <li>Real-time slippage control</li>
                  <li>Advanced analytics</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="border-t border-neutral-800 pt-10">
              <h3 className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">Request a Demo</h3>
              <p className="text-neutral-500 mb-8 text-base font-normal">
                See the router in action.
              </p>
              <a 
                href="mailto:team@baifunds.com"
                className="inline-block border border-white text-white font-normal text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-200"
              >
                team@baifunds.com
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Community;
