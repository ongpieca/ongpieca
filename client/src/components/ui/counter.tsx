import { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  isVisible: boolean;
  duration?: number;
}

export default function Counter({ end, isVisible, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      const increment = end / (duration / 20);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration, hasAnimated]);

  return <span>{count.toLocaleString()}</span>;
}
