import { useEffect, useState } from "react";

export default function useCountUp({
  end = 1000,
  duration = 1200,
  start = 0,
  enabled = true,
}) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    // reset on trigger
    setValue(start);

    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const current = Math.floor(progress * (end - start) + start);
      setValue(current);

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [end, duration, start, enabled]);

  return value;
}
