import React, { useEffect, useState } from 'react';

interface Skydiver {
  id: number;
  x: number;
  direction: 'left' | 'right';
}

const CloudBackground = () => {
  const [skydivers, setSkydivers] = useState<Skydiver[]>([]);

  useEffect(() => {
    const spawnSkydiver = () => {
      const newSkydiver: Skydiver = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        direction: Math.random() > 0.5 ? 'left' : 'right'
      };
      
      setSkydivers(prev => [...prev, newSkydiver]);
      
      // Remove skydiver after animation completes
      setTimeout(() => {
        setSkydivers(prev => prev.filter(s => s.id !== newSkydiver.id));
      }, 8000);
    };

    // Spawn a skydiver every 5-8 seconds
    const interval = setInterval(() => {
      spawnSkydiver();
    }, Math.random() * 3000 + 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main sky background */}
      <div className="absolute inset-0 bg-horizon-gradient" />
      
      {/* Cloud-shaped elements using CSS clip-path */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-cloud-gradient opacity-60 animate-float cloud-shape-1" />
      <div className="absolute top-40 right-20 w-24 h-12 bg-cloud-gradient opacity-50 animate-float-delayed cloud-shape-2" />
      <div className="absolute top-32 left-1/3 w-28 h-14 bg-cloud-gradient opacity-40 animate-float cloud-shape-3" />
      <div className="absolute top-60 right-1/3 w-20 h-10 bg-cloud-gradient opacity-45 animate-float-delayed cloud-shape-1" />
      
      {/* Larger background clouds */}
      <div className="absolute -top-10 -left-20 w-64 h-32 bg-cloud-gradient opacity-30 animate-float cloud-shape-2" />
      <div className="absolute -top-5 -right-24 w-72 h-36 bg-cloud-gradient opacity-25 animate-float-delayed cloud-shape-3" />
      
      {/* Additional cloud bumps using pseudo-elements */}
      <div className="absolute top-16 left-1/4 w-40 h-20 opacity-35 animate-float">
        <div className="relative w-full h-full bg-cloud-gradient rounded-full">
          <div className="absolute -top-2 left-4 w-12 h-12 bg-cloud-gradient rounded-full"></div>
          <div className="absolute -top-1 right-6 w-8 h-8 bg-cloud-gradient rounded-full"></div>
          <div className="absolute -bottom-1 left-8 w-10 h-10 bg-cloud-gradient rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute top-48 right-1/4 w-36 h-18 opacity-30 animate-float-delayed">
        <div className="relative w-full h-full bg-cloud-gradient rounded-full">
          <div className="absolute -top-3 left-6 w-14 h-14 bg-cloud-gradient rounded-full"></div>
          <div className="absolute -top-2 right-4 w-10 h-10 bg-cloud-gradient rounded-full"></div>
          <div className="absolute -bottom-2 left-10 w-8 h-8 bg-cloud-gradient rounded-full"></div>
        </div>
      </div>
      
      {/* Animated skydivers */}
      {skydivers.map(skydiver => (
        <div
          key={skydiver.id}
          className={`absolute text-2xl animate-skydive-${skydiver.direction} z-20`}
          style={{
            left: `${skydiver.x}px`,
            top: '-50px',
            animationDuration: '8s',
            animationTimingFunction: 'linear'
          }}
        >
          🪂
        </div>
      ))}
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  );
};

export default CloudBackground;