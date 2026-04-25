import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HOME_LINKS = [
  ['Inicio',   'inicio'],
  ['Sedes',    'sedes'],
  ['Nosotros', 'nosotros'],
  ['Contacto', 'contacto'],
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();
  const isMenuPage              = location.pathname === '/menu';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const href = (anchor) => isMenuPage ? `/#${anchor}` : `#${anchor}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isMenuPage
        ? 'bg-espresso-900/95 backdrop-blur shadow-xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href={isMenuPage ? '/' : '#inicio'} className="flex items-center gap-2 group">
          <span className="text-2xl">🥐</span>
          <span className="font-display text-2xl font-bold text-cream-50 tracking-wide group-hover:text-caramel-400 transition-colors">
            Panquesú
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {HOME_LINKS.map(([label, anchor]) => (
            <a
              key={label}
              href={href(anchor)}
              className="nav-link text-cream-100 hover:text-caramel-400 font-body font-medium text-sm tracking-wide transition-colors"
            >
              {label}
            </a>
          ))}
          <Link
            to="/menu"
            className={`nav-link font-body font-medium text-sm tracking-wide transition-colors ${
              isMenuPage
                ? 'text-caramel-400'
                : 'text-cream-100 hover:text-caramel-400'
            }`}
          >
            Menú
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream-50 p-2" aria-label="Menú">
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-espresso-900/98 backdrop-blur px-5 pb-6 pt-2 space-y-4">
          {HOME_LINKS.map(([label, anchor]) => (
            <a
              key={label}
              href={href(anchor)}
              onClick={() => setOpen(false)}
              className="block text-cream-100 hover:text-caramel-400 font-body font-medium py-1 transition-colors"
            >
              {label}
            </a>
          ))}
          <Link
            to="/menu"
            onClick={() => setOpen(false)}
            className={`block font-body font-medium py-1 transition-colors ${
              isMenuPage
                ? 'text-caramel-400'
                : 'text-cream-100 hover:text-caramel-400'
            }`}
          >
            Menú
          </Link>
        </div>
      )}
    </nav>
  );
}
