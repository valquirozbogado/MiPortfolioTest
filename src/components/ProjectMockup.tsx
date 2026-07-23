import React from 'react';

interface ProjectMockupProps {
  projectId: string;
  height?: number;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId: _projectId, height = 240 }) => {
  // If we have other projects in the future, we can add branches.
  // For now, let's build a beautiful abstract cardiology/medical UI campaign design.
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
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 240" 
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Background Grids */}
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

        {/* Abstract design elements representing medical graphic identity & social media posts */}
        {/* Post Container Mockup */}
        <rect x="30" y="30" width="160" height="180" rx="12" fill="var(--color-surface)" stroke="var(--color-outline)" strokeWidth="1" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.04))" />
        
        {/* Header inside post */}
        <circle cx="50" cy="50" r="10" fill="url(#cardio-grad)" />
        <rect x="68" y="44" width="60" height="6" rx="3" fill="var(--color-on-surface)" opacity="0.6" />
        <rect x="68" y="54" width="40" height="4" rx="2" fill="var(--color-on-surface)" opacity="0.3" />

        {/* Content Image inside post (mockup) */}
        <rect x="42" y="70" width="136" height="90" rx="6" fill="var(--color-surface-high)" />
        
        {/* Heart beat pulse line on graphic */}
        <path 
          d="M 50 115 L 75 115 L 85 95 L 95 135 L 105 105 L 115 120 L 125 115 L 170 115" 
          fill="none" 
          stroke="var(--color-brand)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Post caption lines */}
        <rect x="42" y="172" width="100" height="5" rx="2" fill="var(--color-on-surface)" opacity="0.5" />
        <rect x="42" y="182" width="120" height="5" rx="2" fill="var(--color-on-surface)" opacity="0.3" />
        <rect x="42" y="192" width="60" height="5" rx="2" fill="var(--color-on-surface)" opacity="0.2" />

        {/* Right mockup representing brand/identity guidelines (signage) */}
        <rect x="220" y="50" width="150" height="140" rx="8" fill="url(#cardio-grad)" />
        
        {/* White graphic inside signage */}
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

        {/* Dynamic decorative circles */}
        <circle cx="340" cy="150" r="20" fill="var(--color-brand-hover)" opacity="0.4" />
        <circle cx="350" cy="160" r="10" fill="var(--color-surface)" opacity="0.2" />
      </svg>
    </div>
  );
};
