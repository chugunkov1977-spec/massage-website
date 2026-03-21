'use client';

import Link from 'next/link';

export default function ColorsPage() {
  const colors = [
    { name: 'Silver', image: 'colors/Silver.png', status: 'Current', isCurrent: true },
    { name: 'Matte Black', image: 'colors/Matte_Black.png', status: 'Coming Soon', isCurrent: false },
    { name: 'Rose Gold', image: 'colors/Rose_Gold.png', status: 'Coming Soon', isCurrent: false },
    { name: 'Arctic White', image: 'colors/Arctic_White.png', status: 'Coming Soon', isCurrent: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-3">
        <nav className="flex w-full items-center justify-between">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90 hover:text-white transition-colors">
            PulseForce
          </Link>
          <Link href="/" className="text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-200">
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-4 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Choose Your Color
            </h1>
            <p className="text-lg text-gray-400">
              Express your style with PulseForce PRO
            </p>
          </section>

          {/* Color Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={`relative rounded-2xl border transition-all duration-300 overflow-hidden group cursor-pointer ${
                    color.isCurrent
                      ? 'border-white/40 bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/8'
                      : 'border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-white/15 hover:via-white/8 hover:border-white/30'
                  }`}
                >
                  <div className="p-8 flex flex-col items-center justify-center min-h-[300px]">
                    {/* Color Swatch */}
                    <div className="mb-8 relative flex items-center justify-center overflow-hidden rounded-xl border border-white/20">
                      <img
                        src={`/assets/${color.image}`}
                        alt={`${color.name} product image`}
                        className="max-h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105 rounded-xl"
                      />
                      {color.isCurrent && (
                        <div className="absolute inset-0 rounded-xl border-2 border-white/60"></div>
                      )}
                    </div>

                    {/* Color Name */}
                    <h3 className="text-2xl font-bold mb-4">{color.name}</h3>

                    {/* Status Badge */}
                    {color.isCurrent ? (
                      <div className="inline-block bg-gradient-to-r from-gray-400 to-white text-black font-semibold py-2 px-6 rounded-full text-sm">
                        Current
                      </div>
                    ) : (
                      <div className="inline-block bg-white/10 border border-white/20 text-white/70 font-semibold py-2 px-6 rounded-full text-sm">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info Section */}
          <section className="text-center py-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">More Colors Coming Soon</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're expanding our color lineup to match every style. New colors will include premium finishes and exclusive colorways. Stay tuned for updates.
            </p>
            <Link
              href="/"
              className="inline-block text-white/70 hover:text-white transition-colors underline"
            >
              Back to Home
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
