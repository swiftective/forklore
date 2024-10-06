import { useEffect, useState } from "react";

function useThrottle() {
  const [throttle, setThrottle] = useState(false);
  const [timeoutKey, setKey] = useState<null | ReturnType<typeof setTimeout>>(
    null,
  );

  useEffect(() => {
    return () => {
      if (!timeoutKey) return;
      clearTimeout(timeoutKey);
    };
  }, []);

  const throttleFn = (fn: (...args: any[]) => void, delay = 200) => {
    return (...args: any[]) => {
      if (throttle) return;
      fn(...args);
      setThrottle(true);
      setKey(
        setTimeout(() => {
          setThrottle(false);
        }, delay),
      );
    };
  };

  return throttleFn;
}

export default useThrottle;
