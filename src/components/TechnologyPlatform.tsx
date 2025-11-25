import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import CodeRain from './CodeRain';

interface TechnologyPlatformProps {
  className?: string;
}

const TechnologyPlatform: React.FC<TechnologyPlatformProps> = ({ className }) => {
  return (
    <section id="technology" className={cn('pt-16 pb-28 md:pt-20 md:pb-36 bg-white relative overflow-hidden', className)}>
      {/* Code snippets typing in background */}
      <CodeRain />
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">
              Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-[0.95] tracking-[-0.02em]">
              Technology
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-20 max-w-3xl font-normal">
              Purpose-built execution infrastructure designed for speed, reliability, and continuous optimization.
            </p>
          </FadeIn>
        
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <FadeIn delay={150}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Rust Routing Engine</h3>
                <p className="text-gray-600 text-base font-normal">Microsecond-level processing with deterministic recovery</p>
              </div>
            </FadeIn>
            <FadeIn delay={175}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Python Control Layer</h3>
                <p className="text-gray-600 text-base font-normal">Models, feedhandlers, reinforcement logic, strategy configuration</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Redis Streams</h3>
                <p className="text-gray-600 text-base font-normal">Ultra-fast message passing for depth and routing decisions</p>
              </div>
            </FadeIn>
            <FadeIn delay={225}>
              <div className="border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-3">PostgreSQL + Parquet</h3>
                <p className="text-gray-600 text-base font-normal">Historical execution and market analytics</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250}>
            <div className="mb-20 border-t border-gray-200 pt-10">
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-8">Performance Targets</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">&lt;5ms</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">End-to-end latency</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">&lt;1ms</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Internal decision time</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">99.9%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">System uptime</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-[-0.02em]">Multi-region</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Failover capability</div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">Venue Connectivity</h3>
              <p className="text-gray-600 mb-4 text-base font-normal">
                Direct API connections to major global exchanges and Canadian registered platforms.
              </p>
              <p className="text-sm text-gray-400 font-normal">
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
