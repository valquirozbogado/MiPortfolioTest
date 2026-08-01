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
      <img
        src="/icon photo.jpeg"
        alt="Valeria Quiroz Bogado"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      <style>{`
        .profile-avatar:hover {
          transform: scale(1.05) rotate(2deg);
        }
      `}</style>
    </div>
  );
};
