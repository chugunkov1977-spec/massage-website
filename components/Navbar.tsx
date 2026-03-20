'use client';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#design', label: 'Design' },
  { href: '#engineered', label: 'Engineered' },
  { href: '#technology', label: 'Technology' },
  { href: '#technical-specs', label: 'Technical Specs' },
  { href: '/checkout', label: 'Checkout' },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-3">
      <nav className="flex w-full items-center justify-between">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
          PulseForce
        </a>
        <div className="hidden gap-6 text-xs uppercase tracking-[0.25em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
