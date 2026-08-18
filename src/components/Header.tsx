import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, ArrowRight } from 'lucide-react';

/**
 * Static navigation items hoisted outside component render loop.
 */
const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/newsletter', label: 'Newsletter' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-neutral-200/80 py-3'
            : 'bg-white/95 backdrop-blur-sm border-b border-neutral-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative p-2 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-xl shadow-md shadow-primary-600/20 group-hover:shadow-lg group-hover:shadow-primary-600/30 group-hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-extrabold text-neutral-900 tracking-tight leading-none group-hover:text-primary-600 transition-colors">
                  Innovantives
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1">
                  eCommerce Agency
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-100/70 p-1 rounded-full border border-neutral-200/60 shadow-2xs">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      active
                        ? 'bg-white text-primary-600 shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white text-xs font-bold rounded-xl shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/35 hover:from-primary-500 hover:to-primary-700 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-neutral-900" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[100%] bg-white/98 backdrop-blur-xl border-b border-neutral-200 shadow-2xl transition-all duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      active
                        ? 'bg-primary-50 text-primary-600 border border-primary-100'
                        : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-primary-600" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-neutral-200/80 space-y-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-sm rounded-xl shadow-md shadow-primary-600/20 active:scale-[0.99] transition-transform"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <div className="text-center pt-2">
                <span className="text-[11px] text-neutral-400 font-medium">
                  Trusted across Walmart, eBay, TikTok Shop, Etsy & Temu
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;