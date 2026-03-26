'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ScrollSequenceBackground from '../sequence/ScrollSequenceBackground';

export default function HeroSection() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('hero');
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

  const fade = Math.min(1, Math.max(0, progress / 0.2));

  return (
    <section id="hero" className="relative h-[200vh] bg-black text-white">
      <div className="sticky top-0 h-screen">
        <ScrollSequenceBackground sectionId="hero" folders={["/assets/Frames-1"]} totalFrames={192} />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-auto">
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
            onClick={() => router.push('/checkout')}
            style={{ opacity: fade, pointerEvents: 'auto' } as React.CSSProperties}
            className="mt-12 relative z-[9999] rounded-full border border-white/40 bg-black/50 px-7 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white/20 cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
