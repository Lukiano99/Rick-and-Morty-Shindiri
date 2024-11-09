import { useState, useEffect, useCallback, useRef } from "react";

const useIsInViewport = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsInViewport(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0, // Trigger when fully in view
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [handleIntersection]);

  return { isInViewport, observerRef };
};

export default useIsInViewport;
