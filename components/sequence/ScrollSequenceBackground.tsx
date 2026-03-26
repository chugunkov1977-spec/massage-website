'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  sectionId: string;
  folders: string[];
  totalFrames: number;
};

const frameUrl = (folders: string[], frame: number) => {
  const folderIndex = Math.floor(frame / 192);
  const localFrame = frame % 192;
  const folder = folders[folderIndex];
  return `${folder}/frame_${String(localFrame).padStart(3, '0')}_delay-0.042s.webp`;
};

export default function ScrollSequenceBackground({ sectionId, folders, totalFrames }: Props) {
  const [frame, setFrame] = useState(0);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [slotSrc, setSlotSrc] = useState([frameUrl(folders, 0), frameUrl(folders, 0)]);
  const [slotOpacity, setSlotOpacity] = useState([1, 0]);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handle = () => setReduceMotion(mq.matches);
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const tick = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const secH = rect.height || window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / secH));
      const nextFrame = reduceMotion ? 0 : Math.floor(progress * (totalFrames - 1));
      setFrame(nextFrame);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionId, reduceMotion, totalFrames]);

  useEffect(() => {
    const inactive = activeSlot === 0 ? 1 : 0;
    const nextSrc = frameUrl(folders, frame);
    setSlotSrc((prev) => {
      const next = [...prev] as [string, string];
      next[inactive] = nextSrc;
      return next;
    });
    setSlotOpacity(activeSlot === 0 ? [0, 1] : [1, 0]);
    setActiveSlot(inactive as 0 | 1);
  }, [frame, activeSlot, folders]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none">
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          <img src={slotSrc[0]} alt="PulseForce sequence" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-linear" style={{ opacity: slotOpacity[0] }} />
        </div>
        <div className="absolute inset-0">
          <img src={slotSrc[1]} alt="PulseForce sequence" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-linear" style={{ opacity: slotOpacity[1] }} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
    </div>
  );
}
