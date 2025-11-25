import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Gap from '@/components/Gap';
import FoundersInSearch from '@/components/FoundersInSearch';
import TechnologyPlatform from '@/components/TechnologyPlatform';
import About from '@/components/About';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl instanceof HTMLElement ? headerEl.offsetHeight : 80;
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          window.scrollTo({
            top: absoluteTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);
  
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <About />
      <Manifesto />
      <Gap />
      <TechnologyPlatform />
      <FoundersInSearch />
      <Community />
      <Footer />
    </main>
  );
};

export default Index;
