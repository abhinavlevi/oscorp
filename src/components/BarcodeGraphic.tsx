import React from 'react';

interface BarcodeGraphicProps {
  value: string;
  className?: string;
  height?: number;
  showText?: boolean;
}

export const BarcodeGraphic: React.FC<BarcodeGraphicProps> = ({
  value,
  className = '',
  height = 36,
  showText = true
}) => {
  // Generate deterministic bar widths from string value
  const bars: number[] = [];
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) & 0xffffffff;
  }

  // Consistent start guard
  bars.push(2, 1, 2, 1);
  for (let i = 0; i < 48; i++) {
    const bit = (Math.abs(hash ^ (i * 2654435761))) % 5;
    bars.push(bit === 0 ? 1 : bit === 1 ? 2 : bit === 2 ? 3 : bit === 3 ? 1 : 2);
    bars.push(1); // space
  }
  // Stop guard
  bars.push(2, 1, 1, 2);

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className="flex items-stretch overflow-hidden" style={{ height: `${height}px` }}>
        {bars.map((w, idx) => (
          <div
            key={idx}
            className={idx % 2 === 0 ? 'bg-current' : 'bg-transparent'}
            style={{ width: `${w * 1.5}px` }}
          />
        ))}
      </div>
      {showText && (
        <span className="font-mono text-[9px] tracking-[0.25em] mt-0.5 opacity-90 uppercase">
          *{value}*
        </span>
      )}
    </div>
  );
};
