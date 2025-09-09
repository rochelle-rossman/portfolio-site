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


// Add children prop for drag fallback
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

  // Unified pointer events for drag-to-scroll
  useEffect(() => {
    if (!isReducedMotion) return;
    const container = containerRef.current;
    if (!container) return;

    let pointerDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      pointerDown = true;
      container.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollLeft = container.scrollLeft;
      container.classList.add('cursor-grabbing');
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!pointerDown) return;
      e.preventDefault();
      const x = e.clientX;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };
    const onPointerUp = (e: PointerEvent) => {
      pointerDown = false;
      container.releasePointerCapture(e.pointerId);
      container.classList.remove('cursor-grabbing');
    };
    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointerleave', onPointerUp);
    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointerleave', onPointerUp);
    };
  }, [isReducedMotion]);

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
      'absolute top-0 bottom-0 z-10 h-full w-24 from-background to-transparent',
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
