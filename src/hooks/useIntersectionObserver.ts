import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options?: IntersectionObserverInit
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref

    if (!node) return;

    const observer = new IntersectionObserver(updateEntry, { ...options });

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef]);

  return entry;
}

export default useIntersectionObserver;
