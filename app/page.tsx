'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import ConsolidatedSection from '@/components/sections/ConsolidatedSection';
import TechnicalSpecsSection from '@/components/sections/TechnicalSpecsSection';

const FRAME_FOLDERS = ['/assets/Frames-1', '/assets/Frames-2', '/assets/Frames-3', '/assets/Frames-4'];
const TOTAL_FRAMES = 192 * FRAME_FOLDERS.length;

const frameUrl = (folder: string, i: number) => `${folder}/frame_${String(i).padStart(3, '0')}_delay-0.042s.webp`;

export default function HomePage() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const progress = useMemo(() => Math.round((loadedCount / TOTAL_FRAMES) * 100), [loadedCount]);

  useEffect(() => {
    const preload = async () => {
      let loaded = 0;
      for (const folder of FRAME_FOLDERS) {
        for (let i = 0; i < 192; i += 1) {
          const src = frameUrl(folder, i);
          await new Promise<void>((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => {
              loaded += 1;
              setLoadedCount(loaded);
              resolve();
            };
            img.onerror = () => {
              loaded += 1;
              setLoadedCount(loaded);
              resolve();
            };
          });
        }
      }
      setTimeout(() => setIsLoaded(true), 300);
    };

    preload();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
          <div className="w-full max-w-md px-6 text-center">
            <div className="mb-5 text-2xl font-semibold uppercase tracking-[0.35em] text-white">PulseForce</div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full rounded-full bg-gradient-to-r from-slate-300 via-white to-slate-400 transition-all" style={{ width: `${Math.min(100, progress)}%` }} />
            </div>
            <p className="mt-3 text-sm text-slate-300">Loading frames: {progress}%</p>
          </div>
        </div>
      )}
      <Navbar />
      <main className="bg-black text-white">
        <ConsolidatedSection />
        <TechnicalSpecsSection />
      </main>
    </div>
  );
}
