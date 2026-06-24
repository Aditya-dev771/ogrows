"use client";

import { useEffect, useState } from "react";

export default function MintCountdown() {
  const mintDate = new Date("2026-06-25T10:30:00Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = mintDate.getTime() - now;

      if (distance <= 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] border border-[#b9ff5c]/20 bg-[#b9ff5c]/5 p-10 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#b9ff5c]">
          OGROWs Mint
        </p>

        <h2 className="mt-4 text-5xl font-black uppercase">
          Mint Starts In
        </h2>

        <div className="mt-8 grid grid-cols-4 gap-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <p className="mt-8 text-white/60">
          June 25, 2026 • 10:30 AM UTC
        </p>

        <a
          href="https://opensea.io/collection/ogrow/overview"
          target="_blank"
          className="mt-8 inline-flex rounded-2xl bg-[#b9ff5c] px-8 py-4 font-black text-black"
        >
          Mint On OpenSea
        </a>
      </div>
    </section>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
      <div className="text-4xl font-black">{value}</div>
      <div className="mt-2 text-xs font-black uppercase tracking-widest text-white/45">
        {label}
      </div>
    </div>
  );
}