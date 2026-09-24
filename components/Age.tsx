"use client";

import { useEffect, useState } from "react";
import { getAge, msUntilStockholmMidnight } from "@/lib/age";

/**
 * The static HTML carries the age from build time. In the browser it is
 * recomputed from the birth date and again at every Stockholm midnight, so it
 * goes up on the birthday without a rebuild.
 */
export function Age({ initial }: { initial: number }) {
  const [age, setAge] = useState(initial);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      setAge(getAge());
      // Small buffer so the timer never fires just before midnight
      timer = setTimeout(tick, msUntilStockholmMidnight() + 1000);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return <>{age}</>;
}
