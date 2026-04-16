import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/Gallery', label: 'Gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0200]/95 backdrop-blur-md shadow-lg shadow-black/40 py-3 border-b border-white/5'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="w-full px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-white text-xl font-bold tracking-wide uppercase">
            Shyam Events<span className="text-[#e31e24]">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-[#e31e24] ${
                location.pathname === l.href
                  ? 'text-[#e31e24]'
                  : 'text-white/80'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-[#e31e24] text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[#c01a1f] transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          className="md:hidden text-white transition-colors duration-300 hover:text-[#e31e24]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f0200]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium uppercase tracking-wider text-white/80 hover:text-[#e31e24] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="bg-[#e31e24] text-white px-5 py-3 text-sm font-bold uppercase tracking-wider text-center hover:bg-[#c01a1f] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
