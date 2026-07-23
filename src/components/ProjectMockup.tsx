import React from 'react';

interface ProjectMockupProps {
  projectId: string;
  height?: number;
  imageUrl?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId, height = 240, imageUrl }) => {
  const renderMockup = () => {
    if (imageUrl) {
      return (
        <img 
          src={imageUrl} 
          alt={`Mockup for ${projectId}`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      );
    }
    switch (projectId) {
      case 'boshu':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="boshu-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#40916C" />
                <stop offset="100%" stopColor="#1B4332" />
              </linearGradient>
              <pattern id="leaf-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 15 0 C 20 10, 20 20, 15 30 C 10 20, 10 10, 15 0 Z" fill="#2D6A4F" opacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#D8F3DC" />
            <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
            
            {/* Terracota Sun */}
            <circle cx="200" cy="110" r="60" fill="#E29578" opacity="0.4" />
            
            {/* Jaguar Abstract Silhouette */}
            <path 
              d="M170,140 C175,100 225,100 230,140 C210,130 190,130 170,140 Z M180,95 L170,80 L185,88 Z M220,95 L230,80 L215,88 Z" 
              fill="url(#boshu-grad)" 
            />
            <circle cx="200" cy="115" r="30" fill="url(#boshu-grad)" />
            
            {/* Clean tropical leaves */}
            <path d="M90,200 Q120,130 160,190 Z" fill="#52B788" opacity="0.8" />
            <path d="M310,200 Q280,120 240,195 Z" fill="#74C69D" opacity="0.7" />
            
            {/* Naming Typography */}
            <text x="200" y="200" textAnchor="middle" fill="#1B4332" fontFamily="var(--font-headline)" fontSize="20" fontWeight="bold" letterSpacing="2">BOSHÚ</text>
          </svg>
        );
      case 'masquevisual':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="mv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A9D8F" />
                <stop offset="100%" stopColor="#264653" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#E9C46A" opacity="0.15" />
            <rect width="100%" height="100%" fill="#F4A261" opacity="0.05" />
            
            {/* Isometric Tablet Mockup */}
            <g transform="translate(100, 40) rotate(-6 100 80)">
              <rect x="0" y="0" width="200" height="130" rx="10" fill="#264653" stroke="#2A9D8F" strokeWidth="2" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.15))" />
              <rect x="8" y="8" width="184" height="114" rx="6" fill="#F4F6F8" />
              
              {/* Prototyped screen details */}
              <text x="20" y="35" fontFamily="var(--font-headline)" fontSize="18" fontWeight="bold" fill="#264653">+ que visual</text>
              <line x1="20" y1="45" x2="110" y2="45" stroke="#E76F51" strokeWidth="3" strokeLinecap="round" />
              
              {/* Accessibility UI elements */}
              <rect x="20" y="60" width="70" height="40" rx="4" fill="#2A9D8F" opacity="0.2" />
              <circle cx="35" cy="80" r="8" fill="#2A9D8F" />
              <rect x="50" y="76" width="30" height="4" rx="2" fill="#264653" />
              <rect x="50" y="83" width="20" height="4" rx="2" fill="#264653" opacity="0.6" />
              
              {/* Large accessibility icon representation */}
              <circle cx="145" cy="80" r="22" fill="url(#mv-grad)" />
              <path d="M 145 68 L 145 88 M 137 75 L 153 75 M 140 85 L 150 85" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="145" cy="65" r="2" fill="#FFFFFF" />
            </g>
          </svg>
        );
      case 'juegosolimpicos':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="jo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0077B6" />
                <stop offset="100%" stopColor="#0096C7" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#CAF0F8" opacity="0.5" />
            
            {/* Dynamic circular background art */}
            <circle cx="280" cy="120" r="70" fill="#90E0EF" opacity="0.3" />
            <circle cx="310" cy="120" r="50" fill="#00B4D8" opacity="0.1" />
            
            {/* Web browser frame mockup */}
            <rect x="40" y="40" width="320" height="160" rx="8" fill="var(--color-surface)" stroke="var(--color-outline-variant)" strokeWidth="1" filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.06))" />
            
            {/* Browser top bar */}
            <path d="M40,55 L360,55" stroke="var(--color-outline-variant)" strokeWidth="1" />
            <circle cx="52" cy="48" r="3" fill="#FF5F56" />
            <circle cx="60" cy="48" r="3" fill="#FFBD2E" />
            <circle cx="68" cy="48" r="3" fill="#27C93F" />
            
            {/* Hero Banner inside browser */}
            <rect x="52" y="67" width="296" height="70" rx="4" fill="url(#jo-grad)" />
            
            {/* 2018 Large Text representation */}
            <text x="200" y="118" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-headline)" fontSize="42" fontWeight="bold" opacity="0.9" letterSpacing="1">2018</text>
            
            {/* Caption blocks */}
            <rect x="52" y="150" width="120" height="8" rx="2" fill="var(--color-on-surface)" opacity="0.6" />
            <rect x="52" y="165" width="200" height="6" rx="2" fill="var(--color-on-surface)" opacity="0.3" />
            <rect x="52" y="177" width="160" height="6" rx="2" fill="var(--color-on-surface)" opacity="0.3" />
            
            <circle cx="320" cy="165" r="12" fill="#0077B6" opacity="0.2" />
          </svg>
        );
      case 'festivalcine':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
            <rect width="100%" height="100%" fill="#0D0D0D" />
            
            {/* Diagonal Cinema Stripes */}
            <path d="M -50 240 L 150 -50 L 180 -50 L -20 240 Z" fill="#F5CB5C" opacity="0.1" />
            <path d="M 100 240 L 300 -50 L 330 -50 L 130 240 Z" fill="#F5CB5C" opacity="0.15" />
            
            {/* Bold Editorial Composition */}
            <g transform="translate(40, 30)">
              {/* Experimental large vertical lettering */}
              <text x="0" y="70" fill="#F5CB5C" fontFamily="var(--font-headline)" fontSize="64" fontWeight="bold" letterSpacing="-2">FES</text>
              <text x="0" y="130" fill="#FFFFFF" fontFamily="var(--font-headline)" fontSize="64" fontWeight="bold" letterSpacing="-2">TIV</text>
              <text x="0" y="190" fill="#F5CB5C" fontFamily="var(--font-headline)" fontSize="64" fontWeight="bold" letterSpacing="-2">AL</text>
              
              {/* Double page layout split line */}
              <line x1="160" y1="0" x2="160" y2="180" stroke="#333333" strokeDasharray="4 4" />
              
              {/* Film catalog information lines */}
              <text x="180" y="40" fill="#F5CB5C" fontFamily="var(--font-mono)" fontSize="10" fontWeight="bold" letterSpacing="1">RESISTENCIA, CHACO</text>
              <text x="180" y="55" fill="#FFFFFF" fontFamily="var(--font-body)" fontSize="12" fontWeight="500">9, 10, 11, 12 y 14 de diciembre</text>
              
              <rect x="180" y="80" width="130" height="4" fill="#FFFFFF" opacity="0.8" />
              <rect x="180" y="92" width="110" height="4" fill="#FFFFFF" opacity="0.4" />
              <rect x="180" y="104" width="120" height="4" fill="#FFFFFF" opacity="0.4" />
              
              {/* Abstract camera / projection graphic */}
              <rect x="180" y="125" width="40" height="25" rx="2" fill="#F5CB5C" />
              <circle cx="235" cy="137" r="10" fill="#F5CB5C" />
              <path d="M 220 137 L 235 127 L 235 147 Z" fill="#F5CB5C" />
            </g>
          </svg>
        );
      case 'cardiologia':
      default:
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-outline-variant)" strokeWidth="0.5" />
              </pattern>
              <linearGradient id="cardio-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--color-brand-hover)" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="var(--color-surface)" />
            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
            
            {/* Post Container Mockup */}
            <rect x="30" y="30" width="160" height="180" rx="12" fill="var(--color-surface)" stroke="var(--color-outline)" strokeWidth="1" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.04))" />
            <circle cx="50" cy="50" r="10" fill="url(#cardio-grad)" />
            <rect x="68" y="44" width="60" height="6" rx="3" fill="var(--color-on-surface)" opacity="0.6" />
            <rect x="68" y="54" width="40" height="4" rx="2" fill="var(--color-on-surface)" opacity="0.3" />
            
            <rect x="42" y="70" width="136" height="90" rx="6" fill="var(--color-surface-high)" />
            
            {/* Heart beat pulse line */}
            <path 
              d="M 50 115 L 75 115 L 85 95 L 95 135 L 105 105 L 115 120 L 125 115 L 170 115" 
              fill="none" 
              stroke="var(--color-brand)" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            
            <rect x="42" y="172" width="100" height="5" rx="2" fill="var(--color-on-surface)" opacity="0.5" />
            <rect x="42" y="182" width="120" height="5" rx="2" fill="var(--color-on-surface)" opacity="0.3" />
            
            {/* Right mockup representing brand/identity guidelines */}
            <rect x="220" y="50" width="150" height="140" rx="8" fill="url(#cardio-grad)" />
            <path 
              d="M 250 120 C 250 100, 275 100, 275 120 C 275 100, 300 100, 300 120 C 300 140, 275 160, 275 165 C 275 160, 250 140, 250 120 Z" 
              fill="none" 
              stroke="var(--color-on-brand)" 
              strokeWidth="4" 
              strokeLinejoin="round" 
              opacity="0.8"
            />
            <rect x="250" y="80" width="90" height="8" rx="4" fill="var(--color-on-brand)" opacity="0.9" />
            <rect x="250" y="95" width="50" height="5" rx="2" fill="var(--color-on-brand)" opacity="0.7" />
            
            <circle cx="340" cy="150" r="20" fill="var(--color-brand-hover)" opacity="0.4" />
          </svg>
        );
    }
  };

  return (
    <div 
      style={{
        width: '100%',
        height: `${height}px`,
        backgroundColor: 'var(--color-surface-low)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-outline-variant)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border-color var(--duration-normal) ease',
      }}
      className="project-mockup"
    >
      {renderMockup()}
    </div>
  );
};
