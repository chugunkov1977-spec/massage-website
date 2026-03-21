'use client';

import Link from 'next/link';

export default function AboutPage() {
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

      <main>
        {/* Hero Section */}
        <section
          className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/about/AU1.png)' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-6">
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">OUR STORY</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Built by Engineers,<br />For Everyone
            </h1>
          </div>
        </section>

        {/* The Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-gray-300 mb-8">HOW IT STARTED</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                It started with frustration. In 2023, a small team of mechanical and electrical engineers — athletes themselves — couldn't find a massage gun that truly worked. Everything on the market was either too loud, too heavy, too weak, or fell apart after a few months.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                So they decided to build their own. Working nights and weekends in a small workshop in Stockholm, they disassembled over 50 competing devices, studied every motor, every battery, every gear mechanism. They wanted to understand why no one had gotten it right.
              </p>
              <p className="text-gray-300 leading-relaxed">
                After 14 months, 87 prototypes, and countless testing sessions, PulseForce PRO was born — a massage gun that delivers clinical-grade percussion therapy in a device that weighs less than a smartphone.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/about/AU2.png"
                alt="Transparent massage gun"
                className="rounded-xl border border-white/10 max-w-md w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-2xl p-12 hover:from-white/15 hover:via-white/8 transition-all duration-300">
              <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">OUR MISSION</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Professional Recovery,<br />Accessible to All
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We believe everyone deserves access to the same recovery tools used by professional athletes. No compromises on power. No compromises on quality. Just pure, silent, effective percussion therapy — at a price that makes sense.
              </p>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/about/AU3.png"
                alt="Massage gun in hand"
                className="rounded-xl border border-white/10 max-w-md w-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-gray-300 mb-8">DESIGNED FOR LIFE</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Use It Anywhere
              </h3>
              <p className="text-gray-300 leading-relaxed">
                At home after a workout. At the office between meetings. While traveling. PulseForce PRO was designed to fit seamlessly into your daily routine — compact enough to carry, powerful enough to make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-xl p-8 hover:from-white/15 hover:via-white/8 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-gradient-to-r from-gray-300 to-white bg-clip-text">Innovation</h3>
                <p className="text-gray-400">
                  We never stop improving. Every component is chosen, tested, and refined.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-xl p-8 hover:from-white/15 hover:via-white/8 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-gradient-to-r from-gray-300 to-white bg-clip-text">Quality</h3>
                <p className="text-gray-400">
                  Aircraft-grade aluminum. Japanese bearings. German-engineered motor. We use the best.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-xl p-8 hover:from-white/15 hover:via-white/8 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-gradient-to-r from-gray-300 to-white bg-clip-text">Performance</h3>
                <p className="text-gray-400">
                  3200 RPM. 45dB quiet. 6-hour battery. Numbers that speak for themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-gray-400 to-white text-black font-semibold py-4 px-8 rounded-full hover:from-white hover:to-gray-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore PulseForce PRO
          </Link>
        </section>
      </main>
    </div>
  );
}
