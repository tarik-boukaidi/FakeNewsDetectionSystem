import React, { useEffect, useRef, ReactNode } from 'react';
import './AnimatedSection.css';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: string; // e.g., 'fadeInUp', 'zoomIn'
  duration?: string; // e.g., '1s'
  delay?: string; // e.g., '0.2s'
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, animation = 'fadeInUp', duration = '0.8s', delay = '0s' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
            ref.current.style.animation = `${animation} ${duration} ${delay} forwards`;
          }
          observer.disconnect(); // Une fois l'animation déclenchée, on déconnecte l'observateur
        }
      },
      { threshold: 0.1 } // Déclenche l'animation lorsque 10% de la section est visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, duration, delay]);

  return (
    <div ref={ref} className="animated-section">
      {children}
    </div>
  );
};

export default AnimatedSection;
