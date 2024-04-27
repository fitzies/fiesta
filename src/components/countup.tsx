"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({
  children,
  duration = 2000,
}: {
  children: any;
  duration: number;
}) => {
  const [num, setNum] = useState<number>();

  const countTo = parseInt((num ?? 1400).toString(), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getNumber = async () => {
      const res = await axios({
        method: "get",
        url: "https://api.jsonbin.io/v3/b/662d2138ad19ca34f8609caf",
        headers: {
          // "Content-Type": "application/json",
          "X-Master-Key":
            "$2a$10$PUVrxT.9h6QXyxKC.f0nmOIpnNb8nI7O9gcI4pBb4XPMfJQgQ/7Ca",
          "X-Access-Key":
            "$2a$10$ttcXb9HaUfCheJaQiVacS.u4/k0lr5utLQzOfh1v6DB20PIkZkhp2",
        },
      });
      const emails: string[] = res.data.record.emails;
      return emails.length;
    };
    getNumber().then((res) => {
      setNum(() => res + 1400);
      console.log(res);

      let frame = 0;
      const totalFrames = Math.round(duration / frameDuration);
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(parseInt((res + 1400).toString(), 10) * progress);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    });
  }, []);

  return Math.floor(count);
};

export default CountUpAnimation;
