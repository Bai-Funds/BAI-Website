import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface TechnologyPlatformProps {
  className?: string;
}

const TechnologyPlatform: React.FC<TechnologyPlatformProps> = ({ className }) => {
  return (
    <section id="technology" className={cn('py-28 md:py-36 bg-black', className)}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <FadeIn>
            <p className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">
              Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-[0.95] tracking-[-0.02em]">
              Technology
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-20 max-w-3xl font-normal">
              Purpose-built execution infrastructure designed for speed, reliability, and continuous optimization.
            </p>
          </FadeIn>
        
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={150}>
              <div className="border-t border-neutral-800 pt-10">
                <h3 className="text-base font-bold text-white mb-3">Rust Routing Engine</h3>
                <p className="text-neutral-600 text-sm font-normal">Microsecond-level processing with deterministic recovery</p>
              </div>
            </FadeIn>
            <FadeIn delay={175}>
              <div className="border-t border-neutral-800 pt-10">
                <h3 className="text-base font-bold text-white mb-3">Python Control Layer</h3>
                <p className="text-neutral-600 text-sm font-normal">Models, feedhandlers, reinforcement logic, strategy configuration</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="border-t border-neutral-800 pt-10">
                <h3 className="text-base font-bold text-white mb-3">Redis Streams</h3>
                <p className="text-neutral-600 text-sm font-normal">Ultra-fast message passing for depth and routing decisions</p>
              </div>
            </FadeIn>
            <FadeIn delay={225}>
              <div className="border-t border-neutral-800 pt-10">
                <h3 className="text-base font-bold text-white mb-3">PostgreSQL + Parquet</h3>
                <p className="text-neutral-600 text-sm font-normal">Historical execution and market analytics</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250}>
            <div className="mb-20 border-t border-neutral-800 pt-10">
              <h3 className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-8">Performance Targets</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="border-l border-neutral-700 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-[-0.02em]">&lt;5ms</div>
                  <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">End-to-end latency</div>
                </div>
                <div className="border-l border-neutral-700 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-[-0.02em]">&lt;1ms</div>
                  <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">Internal decision time</div>
                </div>
                <div className="border-l border-neutral-700 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-[-0.02em]">99.9%</div>
                  <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">System uptime</div>
                </div>
                <div className="border-l border-neutral-700 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-[-0.02em]">Multi-region</div>
                  <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">Failover capability</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="border-t border-neutral-800 pt-10">
              <h3 className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">Venue Connectivity</h3>
              <p className="text-neutral-500 mb-4 text-sm font-normal">
                Direct API connections to major global exchanges and Canadian registered platforms.
              </p>
              <p className="text-xs text-neutral-700 font-normal">
                Expanding coverage across North America, Asia, and Europe.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatform;
