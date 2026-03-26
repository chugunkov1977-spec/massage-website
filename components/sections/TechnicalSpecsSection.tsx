'use client';

import ReviewsSection from './ReviewsSection';

export default function TechnicalSpecsSection() {
  return (
    <section id="technical-specs" className="relative z-10 bg-white text-black flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.3)]">
      <div className="h-32 bg-gradient-to-b from-black to-white" />
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-3 opacity-0 animate-[fadeIn_1s_ease-in_forwards]">Technical Specifications</h2>
          <p className="text-center text-gray-600 mb-10">Built with precision. Designed for performance.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2">⚡ Motor</h3>
              <p className="text-gray-600">3200 RPM brushless motor for powerful, efficient performance.</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2">🔋 Battery</h3>
              <p className="text-gray-600">2500mAh lithium battery providing up to 6 hours of continuous use.</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2">🔇 Noise Level</h3>
              <p className="text-gray-600">Ultra-quiet operation at just 45dB — feel the power, not the noise.</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2">⚖️ Weight</h3>
              <p className="text-gray-600">Lightweight design at only 350g, lighter than your smartphone.</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2">🎚️ Speed Settings</h3>
              <p className="text-gray-600">4 adjustable speed levels for customized massage intensity.</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-2">🔌 Charging</h3>
              <p className="text-gray-600">Fast USB-C charging for quick and convenient power-ups.</p>
            </div>
          </div>
        </div>
      </div>

      <ReviewsSection />
      <footer className="bg-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">PulseForce</h3>
            <p className="text-sm text-gray-600">Premium Massage Technology</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a>
          </div>
          <div className="text-sm text-gray-600">
            © 2026 PulseForce. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
}