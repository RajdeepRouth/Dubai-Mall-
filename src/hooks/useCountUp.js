import { useState, useEffect } from 'react';

export default function useCountUp(targetValue, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const isDecimal = targetValue % 1 !== 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentVal = targetValue * easeProgress;

      if (isDecimal) {
        setValue(currentVal.toFixed(1));
      } else {
        setValue(Math.round(currentVal));
      }

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(isDecimal ? targetValue.toFixed(1) : Math.round(targetValue));
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, duration]);

  return value;
}
