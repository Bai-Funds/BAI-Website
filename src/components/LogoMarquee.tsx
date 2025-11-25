import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  className?: string;
  embedded?: boolean;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ className, embedded = false }) => {
  // Most prestigious first, staggered: Schools and Companies alternating
  const logos = [
    // School - Ivy League
    { src: '/assets/Cornell Medicine Logo.png', alt: 'Cornell Medicine' },
    // Company - Major Canadian Bank
    { src: '/assets/rbccm_logo.png', alt: 'RBC Capital Markets' },
    // School - Top Public University
    { src: '/assets/UC Davis Logo.png', alt: 'UC Davis' },
    // Company - Major Pension Fund
    { src: '/assets/CPP_Investment_Board_Logo.svg.png', alt: 'CPP Investments' },
    // School - Top Canadian Engineering/CS
    { src: '/assets/Waterloo Logo.png', alt: 'University of Waterloo' },
    // Company - Major Pension Fund
    { src: "/assets/Ontario_Teachers'_Pension_Plan_logo_2021.svg.png", alt: 'Ontario Teachers Pension Plan' },
    // School - Top Canadian Business School
    { src: '/assets/Ivey Logo.png', alt: 'Ivey Business School' },
    // Company - Major Canadian Bank
    { src: '/assets/BMO_Capital_Markets_logo.svg.png', alt: 'BMO Capital Markets' },
    // School - Top Chinese University
    { src: '/assets/university of science and technology of china logo.png', alt: 'USTC' },
    // Company - Major Exchange
    { src: '/assets/TMX Logo.png', alt: 'TMX Group' },
    // School - Canadian Business School
    { src: '/assets/Laurier Logo.png', alt: 'Wilfrid Laurier University' },
    // Company - Pension Plan
    { src: '/assets/upp-logo-c.png', alt: 'UPP' },
    // School - University College
    { src: '/assets/Huron Logo.png', alt: 'Huron University College' },
    // Company - Startup
    { src: '/assets/Boardy Logo.png', alt: 'Boardy AI' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const content = (
    <>
      <div className={embedded ? "mb-8 text-center" : "container mx-auto mb-10"}>
        <div className={embedded ? "" : "max-w-5xl mx-auto text-center"}>
          <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-4">
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.01em]">
            Where Our Team Has Worked & Studied
          </h2>
        </div>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Fade edges */}
        <div className={cn("absolute left-0 top-0 bottom-0 w-32 z-10", embedded ? "bg-gradient-to-r from-gray-50 to-transparent" : "bg-gradient-to-r from-white to-transparent")} />
        <div className={cn("absolute right-0 top-0 bottom-0 w-32 z-10", embedded ? "bg-gradient-to-l from-gray-50 to-transparent" : "bg-gradient-to-l from-white to-transparent")} />
        
        {/* Scrolling logos */}
        <div className="flex animate-scroll-left">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
              style={{ width: '280px', height: '80px' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ 
                  height: '64px',
                  width: 'auto',
                  objectFit: 'contain',
                  maxWidth: '100%'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  if (embedded) {
    return <div className={cn('overflow-hidden', className)}>{content}</div>;
  }

  return (
    <section className={cn('py-20 bg-white overflow-hidden border-t border-gray-100', className)}>
      {content}
    </section>
  );
};

export default LogoMarquee;

