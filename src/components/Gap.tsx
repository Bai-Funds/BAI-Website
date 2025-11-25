import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface GapProps {
  className?: string;
}

const Gap: React.FC<GapProps> = ({ className }) => {
  return (
    <section id="how-it-works" className={cn('py-28 md:py-36 bg-neutral-950', className)}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <FadeIn>
            <p className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-[0.95] tracking-[-0.02em]">
              How It Works
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-20 max-w-3xl font-normal">
              Execution results feed back into the model. Continuously tunes venue weights and child-order sizing.
            </p>
          </FadeIn>
        
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <FadeIn delay={150}>
              <div className="border-t border-neutral-800 pt-10">
                <div className="text-5xl font-bold text-neutral-800 mb-6 tracking-[-0.02em]">01</div>
                <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
                <p className="text-neutral-600 leading-relaxed text-sm font-normal">
                  Direct low-latency connections to global exchanges and liquidity sources.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="border-t border-neutral-800 pt-10">
                <div className="text-5xl font-bold text-neutral-800 mb-6 tracking-[-0.02em]">02</div>
                <h3 className="text-lg font-bold text-white mb-4">Aggregate</h3>
                <p className="text-neutral-600 leading-relaxed text-sm font-normal">
                  Unified order book. Aggregate depth, fees, latencies and calculate effective price in real time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="border-t border-neutral-800 pt-10">
                <div className="text-5xl font-bold text-neutral-800 mb-6 tracking-[-0.02em]">03</div>
                <h3 className="text-lg font-bold text-white mb-4">Route</h3>
                <p className="text-neutral-600 leading-relaxed text-sm font-normal">
                  Evaluate spread, depth, volatility, latency, fees, fill probability, risk constraints. Execute optimally.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="border-t border-neutral-800 pt-10">
              <h3 className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-8">Reinforcement Loop</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-white font-medium text-sm mb-2">Fills vs Expected</div>
                  <p className="text-xs text-neutral-600 font-normal">Track execution quality against predictions</p>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-2">Slippage Patterns</div>
                  <p className="text-xs text-neutral-600 font-normal">Learn from market impact data</p>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-2">Latency Anomalies</div>
                  <p className="text-xs text-neutral-600 font-normal">Detect and adapt to venue issues</p>
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-2">Venue Outages</div>
                  <p className="text-xs text-neutral-600 font-normal">Automatic failover routing</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Gap;
