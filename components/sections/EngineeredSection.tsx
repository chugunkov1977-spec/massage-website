'use client';

import { useEffect, useState } from 'react';
import ScrollSequenceBackground from '../sequence/ScrollSequenceBackground';

export default function EngineeredSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('engineered');
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
  const x = Math.min(0, 120 - progress * 120);

  return (
    <section id="engineered" className="relative h-[200vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <ScrollSequenceBackground sectionId="engineered" folders={["/assets/Frames-3"]} totalFrames={192} />
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-16">
          <div className="w-full max-w-2xl md:w-1/2 text-right" style={{ opacity: alpha, transform: `translateX(${x}px)` }}>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-300">SILENT POWER</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">45dB Quiet<br />Technology</h2>
            <p className="mt-4 max-w-md text-sm md:text-lg text-slate-300 ml-auto">
              Brushless motor delivers up to 3200 RPM with near-silent operation. Feel the power, not the noise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
