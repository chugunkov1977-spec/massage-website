'use client';

import { useEffect, useState } from 'react';
import ScrollSequenceBackground from '../sequence/ScrollSequenceBackground';

export default function DesignSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('design');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const secH = rect.height || window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / secH));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const alpha = Math.min(1, Math.max(0, progress * 1.4));
  const x = Math.max(-30, -120 + progress * 120);

  return (
    <section id="design" className="relative h-[200vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <ScrollSequenceBackground sectionId="design" folders={["/assets/Frames-2"]} totalFrames={192} />
        <div className="absolute inset-0 flex items-center px-6 md:px-16">
          <div className="w-full max-w-2xl md:w-1/2" style={{ opacity: alpha, transform: `translateX(${x}px)` }}>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-300">PRECISION DESIGN</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Engineered<br />for Comfort</h2>
            <p className="mt-4 max-w-md text-sm md:text-lg text-slate-300">
              Ergonomic grip with premium aluminum alloy body. Weighs only 350g — lighter than your phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
