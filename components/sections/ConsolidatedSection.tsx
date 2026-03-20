'use client';

import { useEffect, useState } from 'react';
import ScrollSequenceBackground from '../sequence/ScrollSequenceBackground';

const FRAME_FOLDERS = ['/assets/Frames-1', '/assets/Frames-2', '/assets/Frames-3', '/assets/Frames-4'];
const TOTAL_FRAMES = 768;

export default function ConsolidatedSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('consolidated');
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

  const currentFrame = Math.floor(progress * (TOTAL_FRAMES - 1));
  const segment = Math.floor(currentFrame / 192);
  const localFrame = currentFrame % 192;
  const localProgress = localFrame / 191;

  let content;
  if (segment === 0) {
    // Hero
    const fade = Math.min(1, Math.max(0, localProgress / 0.2));
    content = (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-4 text-xs uppercase tracking-[0.35em] text-white/85" style={{ opacity: fade }}>
          PulseForce
        </div>
        <h1
          className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase leading-[0.85] bg-gradient-to-r from-[#A0A0A0] via-white to-[#A0A0A0] bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          style={{ opacity: fade }}
        >
          PRO
        </h1>
        <button
          style={{ opacity: fade }}
          className="mt-12 rounded-full border border-white/40 bg-black/50 px-7 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
        >
          Shop Now
        </button>
      </div>
    );
  } else if (segment === 1) {
    // Design
    const alpha = Math.min(1, Math.max(0, localProgress * 1.4));
    const x = Math.max(-30, -120 + localProgress * 120);
    content = (
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="w-full max-w-2xl md:w-1/2" style={{ opacity: alpha, transform: `translateX(${x}px)` }}>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-300">PRECISION DESIGN</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">Engineered<br />for Comfort</h2>
          <p className="mt-4 max-w-md text-sm md:text-lg text-slate-300">
            Ergonomic grip with premium aluminum alloy body. Weighs only 350g — lighter than your phone.
          </p>
        </div>
      </div>
    );
  } else if (segment === 2) {
    // Engineered
    const alpha = Math.min(1, Math.max(0, localProgress * 1.4));
    const x = Math.min(0, 120 - localProgress * 120);
    content = (
      <div className="absolute inset-0 flex items-center justify-end px-6 md:px-16">
        <div className="w-full max-w-2xl md:w-1/2 text-right" style={{ opacity: alpha, transform: `translateX(${x}px)` }}>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-300">SILENT POWER</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">45dB Quiet<br />Technology</h2>
          <p className="mt-4 max-w-md text-sm md:text-lg text-slate-300 ml-auto">
            Brushless motor delivers up to 3200 RPM with near-silent operation. Feel the power, not the noise.
          </p>
        </div>
      </div>
    );
  } else if (segment === 3) {
    // Technology
    const alpha = Math.min(1, Math.max(0, (localProgress - 0.3) * 2.2));
    content = (
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
        <div className="text-center" style={{ opacity: alpha }}>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-300">WHAT&apos;S INSIDE</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">See the<br />Difference</h2>
          <p className="mt-4 max-w-2xl text-sm md:text-lg text-slate-300">
            Advanced brushless motor. Smart PCB with 4 speed modes. 2500mAh lithium battery for 6 hours of use. Every component designed for peak performance.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="consolidated" className="relative h-[800vh] bg-black text-white">
      <div id="home" className="absolute top-0"></div>
      <div id="design" className="absolute top-[25%]"></div>
      <div id="engineered" className="absolute top-[50%]"></div>
      <div id="technology" className="absolute top-[75%]"></div>
      <div className="sticky top-0 h-screen overflow-hidden z-1">
        <ScrollSequenceBackground sectionId="consolidated" folders={FRAME_FOLDERS} totalFrames={TOTAL_FRAMES} />
        {content}
      </div>
    </section>
  );
}