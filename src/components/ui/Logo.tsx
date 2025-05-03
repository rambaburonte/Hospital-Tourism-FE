import React from 'react';
import { Plane, HeartPulse } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        <Plane className="w-8 h-8 text-primary transform -rotate-45" />
        <HeartPulse className="w-6 h-6 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Logo;