import { useEffect, useRef, useCallback } from "react";

export const useClickOutside = (callback: () => void, deps: any[] = []) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleClick, ...deps]);

  return ref;
};
