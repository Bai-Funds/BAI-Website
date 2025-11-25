import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Peter Bai",
      role: "CEO",
      degree: "HBA, Ivey Business School (Western)",
      logoPrimary: "/assets/Ivey Logo.jpg",
      fullDescription:
        "Peter leads product strategy and execution at Sequence Markets. He previously worked on the Macro Trading Desk at a major Canadian pension fund covering FX, equity TRS, and repo. Earlier, he worked in quantitative research at a Canadian exchange focused on market structure and equities product design. Dean's Honour List at Ivey. Co-President of Western AI. Founded Leap & Strive, a national mentorship program.",
      image: "/assets/Peter HeadShot.png",
      linkedin: "https://www.linkedin.com/in/peter-bai/",
    },
    {
      name: "Muhammad Awan",
      role: "CTO",
      degree: "B.Sc. Computer Science & AI, Waterloo",
      logoPrimary: "/assets/Waterloo Logo.jpeg",
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
      degree: "B.Sc. CS (Waterloo) & B.B.A. (Laurier)",
      logoPrimary: "/assets/Waterloo Logo.jpeg",
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
      logoSecondary: "/assets/university of science and technology of china logo.jpeg",
      fullDescription:
        "Zilong advises Sequence Markets' machine learning program: shaping research best practices, reviewing model specifications, and guiding reinforcement learning for execution optimization. Research Associate at a major medical research institution. First-author publications at leading venues including Science Translational Medicine, KDD, NPJ.",
      image: "/assets/Zilong HeadShot.png",
      linkedin: "https://www.linkedin.com/in/zilong-bai-72a227133/",
    },
  ];

  return (
    <section id="team" className={cn('py-28 md:py-36 bg-neutral-950', className)}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mb-16">
          <FadeIn>
            <p className="text-[11px] text-neutral-500 uppercase tracking-[0.4em] font-normal mb-6">
              People
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-[0.95] tracking-[-0.02em]">
              Team
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-16 max-w-3xl font-normal">
              Market-structure engineers and ML researchers building execution infrastructure.
            </p>
          </FadeIn>
          
          <FadeIn delay={150}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-neutral-800">
              <div className="border-l border-neutral-700 pl-6">
                <div className="text-lg font-bold text-white mb-1">Exchanges</div>
                <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">Market Structure</div>
              </div>
              <div className="border-l border-neutral-700 pl-6">
                <div className="text-lg font-bold text-white mb-1">Asset Managers</div>
                <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">Execution Systems</div>
              </div>
              <div className="border-l border-neutral-700 pl-6">
                <div className="text-lg font-bold text-white mb-1">Banks</div>
                <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">Electronic Trading</div>
              </div>
              <div className="border-l border-neutral-700 pl-6">
                <div className="text-lg font-bold text-white mb-1">Research</div>
                <div className="text-[10px] text-neutral-600 uppercase tracking-[0.15em]">ML & AI</div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={200 + index * 50}>
              <div 
                className="cursor-pointer group"
                onClick={() => setExpandedIndex(index)}
              >
                <div className="aspect-square mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-sm font-medium text-white mb-1">{member.name}</h3>
                <p className="text-xs text-neutral-600">{member.role}</p>
              </div>

              <Dialog open={expandedIndex === index} onOpenChange={(open) => setExpandedIndex(open ? index : null)}>
                <DialogContent className="max-w-2xl bg-black border border-neutral-900 p-0 max-h-[85svh] overflow-y-auto">
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-8">
                      <div className="flex flex-col items-center gap-4 flex-shrink-0">
                        <div className="w-28 h-28 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {member.logoPrimary && (
                          <img
                            src={member.logoPrimary}
                            alt="School"
                            className="w-20 h-auto opacity-40"
                          />
                        )}
                        {member.logoSecondary && (
                          <img
                            src={member.logoSecondary}
                            alt="School"
                            className="w-20 h-auto opacity-40"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-base text-neutral-500 mb-1">{member.role}</p>
                        <p className="text-xs text-neutral-700 mb-6">{member.degree}</p>
                        <p className="text-neutral-500 leading-relaxed mb-6 text-sm font-normal">
                          {member.fullDescription}
                        </p>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[10px] text-neutral-400 hover:text-white uppercase tracking-[0.2em] border-b border-neutral-700 hover:border-white pb-1 transition-colors"
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
      </div>
    </section>
  );
};

export default FoundersInSearch;
