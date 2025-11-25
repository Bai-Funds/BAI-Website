import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-28 md:py-36 bg-neutral-950', className)}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <FadeIn>
            <p className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">
              About
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-[0.95] tracking-[-0.02em]">
              Who We Are
            </h2>
          </FadeIn>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <FadeIn delay={100}>
                <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-10 font-normal">
                  Sequence Markets is an execution-technology company focused on digital assets and tokenised markets.
                </p>
              </FadeIn>
              
              <FadeIn delay={150}>
                <p className="text-base text-neutral-500 leading-relaxed mb-12 font-normal">
                  We operate at the intersection of market structure, low-latency engineering, and AI-driven decision systems. Headquartered in Toronto, with planned expansion into Asia and the United States.
                </p>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="border-t border-neutral-800 pt-10">
                  <h3 className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">Team Background</h3>
                  <ul className="space-y-3 text-neutral-400 text-sm font-normal">
                    <li>Market-structure research at major Canadian exchanges</li>
                    <li>Execution systems for institutional asset managers</li>
                    <li>Low-latency trading infrastructure</li>
                    <li>Machine learning and distributed systems</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
            
            <div>
              <FadeIn delay={250}>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="border-l border-neutral-700 pl-6">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-[-0.02em]">5+ bps</div>
                    <div className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">Target Slippage Improvement</div>
                  </div>
                  <div className="border-l border-neutral-700 pl-6">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-[-0.02em]">95%+</div>
                    <div className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">Routing Success Target</div>
                  </div>
                  <div className="border-l border-neutral-700 pl-6">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-[-0.02em]">99.9%</div>
                    <div className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">Uptime Target</div>
                  </div>
                  <div className="border-l border-neutral-700 pl-6">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-[-0.02em]">&lt;5ms</div>
                    <div className="text-[10px] text-neutral-600 uppercase tracking-[0.2em]">Latency Target</div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="border-t border-neutral-800 pt-10">
                  <h3 className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">Approach</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-[3px] h-[3px] bg-neutral-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-medium text-sm mb-1">Venue-Neutral by Design</div>
                        <div className="text-xs text-neutral-600 font-normal">We do not custody assets or operate an exchange</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-[3px] h-[3px] bg-neutral-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-medium text-sm mb-1">AI-Driven Routing</div>
                        <div className="text-xs text-neutral-600 font-normal">Dynamic optimization based on reinforcement learning</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-[3px] h-[3px] bg-neutral-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-medium text-sm mb-1">Full Transparency</div>
                        <div className="text-xs text-neutral-600 font-normal">Every decision logged with exact costs and slippage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
