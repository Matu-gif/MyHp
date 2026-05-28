'use client';
import { useRef, useEffect, useState } from 'react';

export function useInView<T extends HTMLElement = HTMLElement>(
  rootMargin = '0px 0px -4% 0px'
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}

export function fadeUpStyle(inView: boolean, index = 0, stagger = 55) {
  const delay = index * stagger;
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
  };
}
