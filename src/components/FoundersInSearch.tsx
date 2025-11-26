import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import LogoMarquee from './LogoMarquee';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Feature flag: Set to true to show Zilong Bai
  const SHOW_ZILONG_BAI = false;

  const allTeamMembers = [
    {
      name: "Peter Bai",
      role: "CEO",
      degree: "HBA, Ivey Business School (Western)",
      logoPrimary: "/assets/Ivey Logo.png",
      fullDescription:
        "Peter leads product strategy and execution at Sequence Markets. He previously worked on the Macro Trading Desk at a major Canadian pension fund covering FX, equity TRS, and repo. Earlier, he worked in quantitative research at a Canadian exchange focused on market structure and equities product design. Dean's Honour List at Ivey. Co-President of Western AI. Founded Leap & Strive, a national mentorship program.",
      image: "/assets/Peter HeadShot.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "CTO",
      degree: "B.Sc. Computer Science & AI, Waterloo",
      logoPrimary: "/assets/Waterloo Logo.png",
      fullDescription:
        "Muhammad leads engineering and infrastructure at Sequence Markets. He is a Founding ML Engineer at Boardy AI, architecting systems handling 10K+ daily active users. Previously built ML pipelines and contributed to autonomous vehicle perception systems. Built HFT systems from scratch with microsecond-level order processing. Created AI game systems using MCTS and neural networks.",
      image: "/assets/Muhammad HeadShot.png",
      linkedin: "https://www.linkedin.com/in/muhammad-awan0",
    },
    {
      name: "Frank Zou",
      role: "Head of Business Development",
      degree: "B.MOS Finance, Huron (Western); Ivey AEO",
      logoPrimary: "/assets/Huron Logo.png",
      fullDescription:
        "Frank leads business development and client relations at Sequence Markets, managing institutional outreach, pilot programs, and partnerships. He previously worked at a Canadian exchange as a quantitative analyst conducting market structure research and focusing on product innovation. Varsity rower at Western.",
      image: "/assets/Frank HeadShot.png",
      linkedin: "https://www.linkedin.com/in/fzou26/",
    },
    {
      name: "Josephina Kim",
      role: "Head of Execution Research",
      degree: "B.Sc. Computer Science (Waterloo) & B.B.A. (Laurier)",
      logoPrimary: "/assets/Waterloo Logo.png",
      logoSecondary: "/assets/Laurier Logo.png",
      fullDescription:
        "Josephina leads execution research at Sequence Markets, managing data/vendor relationships and research operations. Schulich Leader Scholar. Previously worked as a quantitative analyst at a major Canadian bank's electronic trading desk developing models for electronic execution.",
      image: "/assets/Josephina HeadShot.png",
      linkedin: "https://www.linkedin.com/in/josephina-kim/",
    },
    {
      name: "Zilong Bai",
      role: "AI & ML Advisor",
      degree: "Ph.D. CS (UC Davis); M.Eng. & B.Eng. (USTC)",
      logoPrimary: "/assets/UC Davis Logo.png",
      logoSecondary: "/assets/university of science and technology of china logo.png",
      fullDescription:
        "Zilong advises Sequence Markets' machine learning program: shaping research best practices, reviewing model specifications, and guiding reinforcement learning for execution optimization. Research Associate at a major medical research institution. First-author publications at leading venues including Science Translational Medicine, KDD, NPJ.",
      image: "/assets/Zilong HeadShot.png",
      linkedin: "https://www.linkedin.com/in/zilong-bai-72a227133/",
    },
  ];

  // Filter team members based on feature flag
  const teamMembers = allTeamMembers.filter(member => 
    member.name !== "Zilong Bai" || SHOW_ZILONG_BAI
  );

  return (
    <section id="team" className={cn('pt-16 pb-28 md:pt-20 md:pb-36 bg-gray-50', className)}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto mb-16">
          <FadeIn>
            <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-medium mb-6">
              People
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-[0.95] tracking-[-0.02em]">
              Team
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-3xl font-normal">
              Market-structure engineers and ML researchers building execution infrastructure.
            </p>
          </FadeIn>
          
          <FadeIn delay={150}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-gray-200">
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Exchanges</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Market Structure</div>
              </div>
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Asset Managers</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Execution Systems</div>
              </div>
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Banks</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">Electronic Trading</div>
              </div>
              <div className="border-l-2 border-gray-900 pl-6">
                <div className="text-lg font-bold text-gray-900 mb-1">Research</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em]">ML & AI</div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={200 + index * 50}>
              <div 
                className="cursor-pointer group"
                onClick={() => setExpandedIndex(index)}
              >
                {/* Dark blue tint that reveals original color on hover */}
                <div className="aspect-square mb-4 overflow-hidden bg-gray-100 rounded-lg relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 team-photo-tint"
                  />
                  <div 
                    className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-all duration-300"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>

              <Dialog open={expandedIndex === index} onOpenChange={(open) => setExpandedIndex(open ? index : null)}>
                <DialogContent className="max-w-4xl bg-white border border-gray-200 p-0 max-h-[90svh] overflow-y-auto shadow-2xl" aria-describedby={undefined}>
                  <VisuallyHidden>
                    <DialogTitle>{member.name} - {member.role}</DialogTitle>
                  </VisuallyHidden>
                  <div className="p-10 md:p-12">
                    <div className="flex flex-col md:flex-row items-start gap-10">
                      {/* Left column - Photo and logos centered */}
                      <div className="flex flex-col items-center gap-6 flex-shrink-0 w-full md:w-auto">
                        <div className="w-44 h-44 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Logos - centered below photo, same width as photo */}
                        <div className="flex flex-col items-center gap-4 w-44">
                          {member.logoPrimary && (
                            <img
                              src={member.logoPrimary}
                              alt="School"
                              className="w-full h-auto object-contain"
                            />
                          )}
                          {member.logoSecondary && (
                            <img
                              src={member.logoSecondary}
                              alt="School"
                              className="w-full h-auto object-contain"
                            />
                          )}
                        </div>
                      </div>
                      {/* Right column - Info */}
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{member.name}</h3>
                        <p className="text-xl text-gray-600 mb-2">{member.role}</p>
                        <p className="text-base text-gray-400 mb-10">{member.degree}</p>
                        <p className="text-gray-600 leading-relaxed mb-10 text-lg font-normal">
                          {member.fullDescription}
                        </p>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-sm text-gray-900 uppercase tracking-[0.2em] border-b border-gray-900 pb-1 hover:opacity-70 transition-opacity"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </FadeIn>
          ))}
        </div>
        
        {/* Experience section - moved inside Team */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <LogoMarquee embedded />
        </div>
      </div>
    </section>
  );
};

export default FoundersInSearch;
