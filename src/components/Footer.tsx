import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

/**
 * Static constants hoisted outside component scope to prevent re-creation during renders.
 */
const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_LINKS = {
  services: [
    { label: 'Walmart Marketplace Management', path: '/services#walmart' },
    { label: 'eBay Store Management', path: '/services#ebay' },
    { label: 'TikTok Shop Management', path: '/services#tiktok' },
    { label: 'Etsy Store Management', path: '/services#etsy' },
    { label: 'Temu Seller Central Management', path: '/services#temu' },
  ],
  business: [
    { label: 'Private Label', path: '/services#private-label' },
    { label: 'White Label', path: '/services#white-label' },
    { label: 'Dropshipping', path: '/services#dropshipping' },
    { label: 'Wholesale', path: '/services#wholesale' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/contact' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-300 overflow-hidden border-t border-white/10 font-sans antialiased">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Pre-Footer Conversion Call-To-Action Banner */}
      <div className="relative border-b border-white/10 bg-neutral-900/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-neutral-900 via-neutral-850 to-neutral-900 border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl text-center lg:text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-500/10 text-primary-300 text-xs font-semibold uppercase tracking-wider border border-primary-500/20 mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Scale Your Store Today
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight mb-3">
                Ready to Expand Across Global Marketplaces?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Partner with our specialized team to audit your catalog, optimize ad spend, and unlock sustainable multi-channel revenue growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-primary-600/25 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                Book Free Consultation
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="https://wa.me/923464166466"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-sm rounded-xl border border-emerald-500/30 transition-all duration-300 gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Agency Bio Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="p-2.5 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-xl shadow-lg shadow-primary-600/20 group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-extrabold text-white tracking-tight group-hover:text-primary-400 transition-colors">
                  Innovantives
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                  eCommerce Agency
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-md">
              Your trusted partner for end-to-end eCommerce solutions. We help entrepreneurs, brands, and enterprise sellers establish market dominance on the world's leading online marketplaces.
            </p>

            {/* Direct Contact Information Cards */}
            <div className="space-y-3.5 text-xs sm:text-sm">
              <a
                href="mailto:hello@innovantives.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors group p-2 rounded-lg hover:bg-white/5 w-max"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">hello@innovantives.com</span>
              </a>

              <a
                href="tel:+923464166466"
                className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors group p-2 rounded-lg hover:bg-white/5 w-max"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+92 346-4166466</span>
              </a>

              <a
                href="https://wa.me/923464166466"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-300 hover:text-emerald-400 transition-colors group p-2 rounded-lg hover:bg-white/5 w-max"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="font-medium">WhatsApp: +92 346-4166466</span>
              </a>

              <div className="flex items-center gap-3 text-neutral-400 p-2">
                <div className="w-8 h-8 rounded-lg bg-neutral-800/60 flex items-center justify-center text-neutral-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">Islamabad, Pakistan &middot; London, England</span>
              </div>
            </div>
          </div>

          {/* Links Column: Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 group-hover:text-primary-400 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Business Models */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Business Models
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.business.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 group-hover:text-primary-400 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Company */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 group-hover:text-primary-400 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <p>&copy; {CURRENT_YEAR} Innovantives. All rights reserved.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;