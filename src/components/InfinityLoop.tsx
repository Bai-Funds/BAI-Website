import React, { useEffect, useState } from 'react';

const InfinityLoop: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let time = 0;
    const animate = () => {
      time += 0.02;
      setOffset(prev => (prev + 1) % 1000);
      // Gentle breathing effect - scale between 0.85 and 1.15
      setScale(1 + Math.sin(time) * 0.15);
    };
    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <svg
        width="90%"
        height="90%"
        viewBox="0 0 400 200"
        className="opacity-8"
        style={{ transform: `scale(${scale})`, transition: 'transform 0.03s linear' }}
      >
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#333" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#333" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#333" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Main infinity symbol - larger, centered */}
        <path
          d="M 100 100 
             C 100 50, 150 50, 200 100 
             C 250 150, 300 150, 300 100 
             C 300 50, 250 50, 200 100 
             C 150 150, 100 150, 100 100"
          stroke="#ddd"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Animated flowing line on infinity */}
        <path
          d="M 100 100 
             C 100 50, 150 50, 200 100 
             C 250 150, 300 150, 300 100 
             C 300 50, 250 50, 200 100 
             C 150 150, 100 150, 100 100"
          stroke="#888"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="40 360"
          strokeDashoffset={-offset}
          opacity="0.4"
        />
        
        {/* Second flowing line (offset) */}
        <path
          d="M 100 100 
             C 100 50, 150 50, 200 100 
             C 250 150, 300 150, 300 100 
             C 300 50, 250 50, 200 100 
             C 150 150, 100 150, 100 100"
          stroke="#aaa"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="25 375"
          strokeDashoffset={-offset - 200}
          opacity="0.25"
        />
        
        {/* Subtle labels */}
        <text x="55" y="105" fill="#ccc" fontSize="8" fontFamily="monospace" opacity="0.3">IN</text>
        <text x="330" y="105" fill="#ccc" fontSize="8" fontFamily="monospace" opacity="0.3">OUT</text>
      </svg>
    </div>
  );
};

export default InfinityLoop;
