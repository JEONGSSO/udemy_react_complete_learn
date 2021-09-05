import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options?: IntersectionObserverInit
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const isIntersecting = entry?.isIntersecting;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      root: undefined,
      rootMargin: undefined,
      threshold: 1,
      ...options,
    });

    const node = elementRef?.current; // DOM Ref
    if (!node || isIntersecting) return;

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, isIntersecting]);

  return [isIntersecting, entry];
}

export default useIntersectionObserver;
