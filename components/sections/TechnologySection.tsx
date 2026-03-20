'use client';

import { useEffect, useState } from 'react';
import ScrollSequenceBackground from '../sequence/ScrollSequenceBackground';

export default function TechnologySection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('technology');
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

  const alpha = Math.min(1, Math.max(0, (progress - 0.3) * 2.2));

  return (
    <section id="technology" className="relative h-[200vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <ScrollSequenceBackground sectionId="technology" folders={["/assets/Frames-4"]} totalFrames={192} />
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
          <div className="text-center" style={{ opacity: alpha }}>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-300">WHAT&apos;S INSIDE</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">See the<br />Difference</h2>
            <p className="mt-4 max-w-2xl text-sm md:text-lg text-slate-300">
              Advanced brushless motor. Smart PCB with 4 speed modes. 2500mAh lithium battery for 6 hours of use. Every component designed for peak performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
