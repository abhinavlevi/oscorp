import React from 'react';

interface OscorpLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'emerald';
  symbolOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const OscorpSymbol: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#000000'
}) => {
  // If color is white or light, we can use CSS invert/brightness filter or clean SVG
  const isWhite = color === '#ffffff' || color === 'white';
  
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/oscorp-symbol.png"
        alt="Oscorp Emblem"
        className="w-full h-full object-contain select-none pointer-events-none"
        style={{
          filter: isWhite ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  );
};

export const OscorpLogo: React.FC<OscorpLogoProps> = ({
  className = '',
  variant = 'dark',
  symbolOnly = false,
  size = 'md'
}) => {
  const isLight = variant === 'light';

  if (symbolOnly) {
    return <OscorpSymbol className={className} color={isLight ? '#ffffff' : '#000000'} />;
  }

  // Exact proportional dimensions matching the authentic 399x103 aspect ratio (~3.87:1)
  const sizeMap = {
    sm: { width: '135px', height: '35px' },
    md: { width: '190px', height: '49px' },
    lg: { width: '235px', height: '61px' },
    xl: { width: '280px', height: '72px' }
  };

  const currentSize = sizeMap[size];
  const logoSrc = isLight ? '/oscorp-logo-white.png' : '/oscorp-logo.png';

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="OSCORP INDUSTRIES"
        className="object-contain select-none pointer-events-none drop-shadow-2xs"
        style={{
          width: currentSize.width,
          height: currentSize.height,
          aspectRatio: '399 / 103'
        }}
      />
    </div>
  );
};
