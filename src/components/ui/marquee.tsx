'use client';

import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { MarqueeProps as FastMarqueeProps } from 'react-fast-marquee';
import FastMarquee from 'react-fast-marquee';

export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn('relative w-full overflow-hidden', className)}
    {...props}
  />
);

export type MarqueeContentProps = FastMarqueeProps & {
  children: ReactNode;
};

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  children,
  ...props
}: MarqueeContentProps) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handler = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (isReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={cn(
          'flex w-full whitespace-nowrap select-none',
          'overflow-x-auto',
          props.className
        )}
        tabIndex={0}
        style={{ WebkitOverflowScrolling: 'touch' }}
        aria-label="Marquee content (drag to scroll)"
      >
        {children}
      </div>
    );
  }

  return (
    <FastMarquee
      autoFill={autoFill}
      loop={loop}
      pauseOnHover={pauseOnHover}
      {...props}
    >
      {children}
    </FastMarquee>
  );
};

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: 'left' | 'right';
};

export const MarqueeFade = ({
  className,
  side,
  ...props
}: MarqueeFadeProps) => (
  <div
    className={cn(
      'absolute top-0 bottom-0 z-10 h-full w-4 md:w-10 lg:w-16 from-background to-transparent',
      side === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
      className
    )}
    {...props}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn('m-2 flex-shrink-0 object-contain', className)}
    {...props}
  />
);
