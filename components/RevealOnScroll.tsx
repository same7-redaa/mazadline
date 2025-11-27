import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'zoom-in';
}

const RevealOnScroll: React.FC<Props> = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 500, // Fast and smooth
  animation = 'fade-up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0';
      case 'slide-in-right':
        return isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0';
      case 'slide-in-left':
        return isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0';
      case 'zoom-in':
        return isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0';
      case 'fade-in':
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${getAnimationClass()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;