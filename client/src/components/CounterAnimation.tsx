import { useState, useEffect } from "react";

interface CounterAnimationProps {
  end: number;
  duration: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export function CounterAnimation({
  end,
  duration,
  label,
  prefix = "",
  suffix = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-green-600">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-gray-600 mt-2">{label}</span>
    </div>
  );
}
