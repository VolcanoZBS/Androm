import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      <img 
        src="/Logo_alb.png"
        alt="Androm Constructii Logo"
        className="h-14 md:h-20 w-auto"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.error('Error loading logo:', target.src);
        }}
      />
      <span className="text-lg md:text-2xl font-bold tracking-tight">ANDROM CONSTRUCTII</span>
    </div>
  );
};

export default Logo;