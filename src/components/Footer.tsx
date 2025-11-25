import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl instanceof HTMLElement ? headerEl.offsetHeight : 80;
      if (element) {
        const rect = element.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        window.scrollTo({
          top: absoluteTop - headerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className={cn('py-14 bg-black border-t border-neutral-900', className)}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14">
          <div>
            <img 
              src="/assets/logo-dark.png" 
              alt="Sequence Markets" 
              className="h-8 w-auto object-contain mb-5"
            />
            <p className="text-neutral-600 text-xs max-w-xs font-normal leading-relaxed">
              The Execution OS for Digital Assets. Venue-neutral smart order routing for crypto and tokenised markets.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <h4 className="text-white text-[11px] font-normal uppercase tracking-[0.3em] mb-4">Company</h4>
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'team', label: 'Team' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-xs text-neutral-600 hover:text-white transition-colors text-left font-normal"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-normal uppercase tracking-[0.3em] mb-4">Platform</h4>
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'what-we-do', label: 'Products' },
                  { id: 'technology', label: 'Technology' },
                  { id: 'how-it-works', label: 'How It Works' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-xs text-neutral-600 hover:text-white transition-colors text-left font-normal"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-neutral-700 font-normal">
            &copy; {new Date().getFullYear()} Sequence Markets. All rights reserved.
          </div>
          <a 
            href="mailto:team@baifunds.com"
            className="text-[11px] text-neutral-600 hover:text-white transition-colors font-normal"
          >
            team@baifunds.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
