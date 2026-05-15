import { useEffect, useRef, useState } from 'react';

export const useReveal = (options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: '-80px', threshold: 0.1, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
};
