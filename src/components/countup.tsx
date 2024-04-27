"use client";

import React, { useEffect, useState } from "react";

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({
  num = 1401,
  duration = 2000,
}: {
  num: number;
  duration: number;
}) => {
  if (localStorage.getItem("code") !== null) {
    num += 1;
  }
  const countTo = parseInt(num.toString(), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
};

export default CountUpAnimation;
