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
      
      // Use easing function for smooth animation
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration, hasAnimated]);

  return (
    <span className="inline-block transform transition-all duration-300 hover:scale-110">
      {count.toLocaleString()}
    </span>
  );
}
