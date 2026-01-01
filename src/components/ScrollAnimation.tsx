import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'rotate';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const animationClass = `scroll-${animation}`;
  const visibleClass = isVisible ? 'visible' : '';
  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${visibleClass} ${delayClass} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

