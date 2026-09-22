import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface TrustBadgeProps {
  className?: string;
  compact?: boolean;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ className = '', compact = false }) => {
  return (
    <div
      id="trust-badge"
      className={`inline-flex items-center gap-3 bg-[#F4EFEA] border border-[#E3D9CC] px-4 py-2.5 rounded-full text-[#2C241E] ${className}`}
    >
      <div className="flex items-center gap-1 text-[#B46A3C]">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 fill-current ${i === 4 ? 'opacity-85' : ''}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="h-3.5 w-px bg-[#D6CABE]" aria-hidden="true" />
      <span className="text-xs sm:text-sm font-medium tracking-tight">
        <strong className="font-semibold text-[#2C241E]">{BUSINESS_INFO.rating}/5</strong>
        <span className="text-[#68584B] ml-1.5 font-normal">
          ({BUSINESS_INFO.reviewCount} Google Reviews)
        </span>
      </span>
      {!compact && (
        <span className="hidden md:inline-flex text-[11px] uppercase tracking-wider font-semibold text-[#8C6246] bg-[#ECE2D5] px-2 py-0.5 rounded-full">
          Montpellier
        </span>
      )}
    </div>
  );
};
