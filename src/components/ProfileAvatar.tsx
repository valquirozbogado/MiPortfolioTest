import React from 'react';

export const ProfileAvatar: React.FC<{ size?: number }> = ({ size = 120 }) => {
  return (
    <div 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-hover) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden',
        border: '4px solid var(--color-surface)',
        transition: 'transform var(--duration-normal) ease',
      }}
      className="profile-avatar"
    >
      {/* Decorative background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          animation: 'pulse 4s infinite alternate',
        }}
      />
      <span 
        style={{
          fontFamily: 'var(--font-headline)',
          fontSize: `${size * 0.35}px`,
          fontWeight: 700,
          color: 'var(--color-on-brand)',
          letterSpacing: '-1px',
          zIndex: 1,
        }}
      >
        VQ
      </span>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.1); opacity: 0.9; }
        }
        .profile-avatar:hover {
          transform: scale(1.05) rotate(2deg);
        }
      `}</style>
    </div>
  );
};
