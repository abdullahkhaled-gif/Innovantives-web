import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Users,
  BarChart3,
  ShoppingCart,
  Target,
  Zap,
  Award,
  CheckCircle,
  Star,
  ChevronRight,
  ShieldCheck,
  Mail,
  Lock
} from 'lucide-react';

/**
 * All data below is fully static (no props/state dependencies), so it is
 * defined once at module scope instead of inside the component body.
 * Defined once per page load to prevent unnecessary re-allocations on state updates.
 */

const stats = [
  { value: '100+', label: 'Clients Served', subtext: 'Across 12+ categories' },
  { value: '$150M+', label: 'Revenue Generated', subtext: 'Tracked GMV since inception' },
  { value: '98%', label: 'Client Retention', subtext: 'Long-term agency partners' },
  { value: '100+', label: 'Team Experts', subtext: 'Dedicated marketplace specialists' },
];

const carouselTestimonials = [
  {
    headline: "From $0 to $20K/mo",
    quote: "We'd been burned before, so I was skeptical. Six months later we're doing $20K a month.",
    name: "Marcus Reyes",
    role: "Founder, Home & Garden Brand",
    avatar: "https://i.ibb.co/Hp2sZfTN/Marcus-Reyes.jpg",
  },
  {
    headline: "210% Growth in year",
    quote: "Revenue's up 210% year over year since we handed off Ebay and Walmart. Pretty smooth process overall.",
    name: "Sarah Klein",
    role: "CEO, DTC Apparel Brand",
    avatar: "https://i.ibb.co/s9dv9knN/Sarah-Klein.jpg",
  },
  {
    headline: "Finally Ranking on Etsy",
    quote: "My listings barely showed up in search before. Now I'm getting found for stuff we actually sell.",
    name: "Jordan Pace",
    role: "Ecommerce Director",
    avatar: "https://i.ibb.co/whdBXhJv/Jordan-Pace.jpg",
  },
  {
    headline: "More Time for the Business",
    quote: "Solid team, I can focus on products and growth instead of managing marketplace tasks every day.",
    name: "Elena Cho",
    role: "Owner, Beauty Products Brand",
    avatar: "https://i.ibb.co/N6RRQB20/Elena-Cho.jpg",
  },
  {
    headline: "They Actually Reply",
    quote: "Small thing, but it matters. I actually get updates before I even have to ask.",
    name: "David Foss",
    role: "Founder, Outdoor Gear Brand",
    avatar: "https://i.ibb.co/hx5Zn8YS/David-Foss.jpg",
  },
];

const marqueeTestimonials = [...carouselTestimonials, ...carouselTestimonials];

const marketplaces = [
  {
    name: 'Walmart',
    description: 'Expand to the fastest-growing platform',
    color: '#0071CE',
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="30" cy="9" r="5" fill="#0071CE"/>
        <circle cx="30" cy="51" r="5" fill="#0071CE"/>
        <circle cx="9" cy="30" r="5" fill="#0071CE"/>
        <circle cx="51" cy="30" r="5" fill="#0071CE"/>
        <circle cx="15.1" cy="15.1" r="5" fill="#0071CE"/>
        <circle cx="44.9" cy="44.9" r="5" fill="#0071CE"/>
        <circle cx="44.9" cy="15.1" r="5" fill="#0071CE"/>
        <circle cx="15.1" cy="44.9" r="5" fill="#0071CE"/>
        <circle cx="30" cy="30" r="6" fill="#0071CE"/>
      </svg>
    ),
  },
  {
    name: 'eBay',
    description: 'Reach millions of global buyers',
    color: '#E53238',
    logo: (
      <svg viewBox="0 0 80 36" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="w-14 h-8">
        <text x="0" y="30" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif">
          <tspan fill="#E53238">e</tspan>
          <tspan fill="#0064D2">B</tspan>
          <tspan fill="#F5AF02">a</tspan>
          <tspan fill="#86B817">y</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: 'TikTok Shop',
    description: 'Tap into social commerce',
    color: '#010101',
    logo: (
      <svg viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-10">
        <path d="M28.5 0C29.2 5.8 32.5 9.5 38 10v7c-3.2-.1-6-1-8.5-2.8V28c0 7.7-5.6 14-13.2 14C9 42 2 35.7 2 27.5 2 19 9 12.5 16.8 12.5c.7 0 1.4.1 2.2.2v7.3c-.7-.2-1.4-.3-2.2-.3-3.8 0-6.8 3-6.8 6.8 0 3.8 3 6.8 6.8 6.8 3.8 0 7-2.8 7-6.8V0h4.7z" fill="#010101"/>
        <path d="M28.5 0C29.2 5.8 32.5 9.5 38 10v7c-3.2-.1-6-1-8.5-2.8V28c0 7.7-5.6 14-13.2 14C9 42 2 35.7 2 27.5 2 19 9 12.5 16.8 12.5c.7 0 1.4.1 2.2.2v7.3c-.7-.2-1.4-.3-2.2-.3-3.8 0-6.8 3-6.8 6.8 0 3.8 3 6.8 6.8 6.8 3.8 0 7-2.8 7-6.8V0h4.7z" fill="#69C9D0" opacity="0.5"/>
        <path d="M26 0C26.7 5.8 30 9.5 35.5 10v7C32.3 16.9 29.5 16 27 14.2V28c0 7.7-5.6 14-13.2 14C6.5 42-.5 35.7-.5 27.5-.5 19 6.5 12.5 14.3 12.5c.7 0 1.4.1 2.2.2v7.3c-.7-.2-1.4-.3-2.2-.3-3.8 0-6.8 3-6.8 6.8 0 3.8 3 6.8 6.8 6.8 3.8 0 7-2.8 7-6.8V0H26z" fill="#EE1D52" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Etsy',
    description: 'Connect with creative buyers',
    color: '#F56400',
    logo: (
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="50" height="50" rx="8" fill="#F56400"/>
        <text x="11" y="36" fontSize="34" fontWeight="bold" fontFamily="Georgia, serif" fill="white">E</text>
      </svg>
    ),
  },
  {
    name: 'Temu',
    description: 'Access high-volume global shoppers',
    color: '#FB7701',
    logo: (
      <svg viewBox="0 0 80 30" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="w-14 h-7">
        <text x="0" y="26" fontSize="28" fontWeight="900" fontFamily="Arial Black, sans-serif" fill="#FB7701">TEMU</text>
      </svg>
    ),
  },
];

const heroLogos = [
  ...marketplaces,
  {
    name: 'Amazon',
    logo: (
      <svg viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg" className="w-28 h-auto">
        <text x="4" y="29" fontSize="27" fontWeight="700" fontFamily="Arial, sans-serif" fill="#FFFFFF">amazon</text>
        <path d="M24 37c20 8 48 8 70-1" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="m90 34 6 2-5 5" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

const services = [
  {
    icon: ShoppingCart,
    logo: marketplaces[0].logo,
    title: 'Walmart Marketplace Management',
    description: 'Complete Walmart Marketplace setup, optimization, and WFS strategy to help you sell at scale.',
    link: '/services/marketplace-management',
  },
  {
    icon: BarChart3,
    logo: marketplaces[1].logo,
    title: 'eBay Store Management',
    description: 'Full-service eBay store management including listings, Promoted Listings, and international shipping.',
    link: '/services/marketplace-management',
  },
  {
    icon: Target,
    logo: marketplaces[2].logo,
    title: 'TikTok Shop Management',
    description: 'Creator partnerships, live shopping, and content strategy to turn views into sales.',
    link: '/services/marketplace-management',
  },
  {
    icon: TrendingUp,
    logo: marketplaces[3].logo,
    title: 'Etsy Store Management',
    description: 'Shop setup, SEO, and Etsy Ads management to grow traffic and reach Star Seller status.',
    link: '/services/marketplace-management',
  },
  {
    icon: Users,
    logo: marketplaces[4].logo,
    title: 'Temu Seller Central Management',
    description: 'Temu Seller Central onboarding, listing optimization, and pricing strategy to access global shoppers.',
    link: '/services/marketplace-management',
  },
  {
    icon: Zap,
    title: 'Growth Strategies',
    description: 'Data-driven strategies to scale your business and expand into new markets seamlessly.',
    link: '/services/automation',
  },
];

const tiers = [
  {
    tag: '// 01 — RECOVERY',
    numeral: 'i.',
    title: 'Account Reinstatement',
    subtitle: 'Suspended? Restricted? Losing access?',
    description:
      'A suspended marketplace account can mean lost revenue every day. We diagnose your suspension, identify what needs fixing, and create a tailored reinstatement strategy—a clear path back to selling.',
    bullets: [
      'No confusing policy jargon',
      'No copy-paste appeals',
      'Built around your specific account case',
    ],
    ctaLabel: 'Recover Account',
    gradientClass: 'bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900',
    link: '/services/marketplace-management',
  },
  {
    tag: '// 02 — MANAGEMENT',
    numeral: 'ii.',
    title: 'Marketplace Management',
    subtitle: 'Take your products to the next marketplace',
    description:
      'Full-service management across Walmart, eBay, Etsy, TikTok Shop & Temu. Listings, ads, and inventory sync, without being chained to five separate dashboards.',
    bullets: [
      'Managing 200+ stores',
      '150+ clients · 4.9/5 rated',
      'Transparent monthly retainer',
    ],
    ctaLabel: 'Launch Growth',
    gradientClass: 'bg-gradient-to-br from-primary-700 via-primary-800 to-accent-700',
    link: '/services/automation',
    popular: true,
  },
  {
    tag: '// 03 — EXPANSION',
    numeral: 'iii.',
    title: 'Conversion Optimization',
    subtitle: 'Turn more existing traffic into paying buyers',
    description:
      'Stop guessing why shoppers are not buying. We audit your product pages, images, copy, and pricing to find what is costing you sales, then show you exactly what to fix.',
    bullets: [
      'Buyer-perspective review',
      'Specific, actionable fixes',
      'More sales from the same traffic',
    ],
    ctaLabel: 'Expand Sales',
    gradientClass: 'bg-gradient-to-br from-neutral-900 via-accent-950 to-neutral-950',
    link: '/contact',
  },
];

const pastIssues = [
  {
    author: "Team Innovantives",
    date: "Aug 3, 2026",
    title: "Issue #12: Why we told a client to pause TikTok Shop (for now)",
    excerpt: "TikTok Shop captures demand fast, but when your product needs education first, paid social alone can backfire...",
    avatar1: "https://i.pravatar.cc/100?img=12",
    avatar2: "https://i.pravatar.cc/100?img=5",
  },
  {
    author: "Team Innovantives",
    date: "Jul 27, 2026",
    title: "Issue #11: Real insights from an AI-powered listing audit",
    excerpt: "Everyone's posting 90-second AI audits. We ran a real one on a live Walmart account over two days — here's what it found...",
    avatar1: "https://i.pravatar.cc/100?img=33",
    avatar2: "https://i.pravatar.cc/100?img=45",
  },
  {
    author: "Team Innovantives",
    date: "Jul 20, 2026",
    title: "Issue #10: The Repeat Buyer Flywheel",
    excerpt: "The most underrated metric in multi-marketplace selling. Raise your repeat purchase rate and everything about CAC changes...",
    avatar1: "https://i.pravatar.cc/100?img=51",
    avatar2: "https://i.pravatar.cc/100?img=12",
  },
];

const businessModels = [
  {
    title: 'Private Label',
    description: 'Build exclusive brand equity with proprietary catalog lines.',
    icon: Award,
  },
  {
    title: 'White Label',
    description: 'Rapidly scale proven market concepts with custom branding.',
    icon: CheckCircle,
  },
  {
    title: 'Dropshipping',
    description: 'Capital-efficient expansion with minimal holding overhead.',
    icon: TrendingUp,
  },
  {
    title: 'Wholesale',
    description: 'Capitalize on established volume through streamlined distribution.',
    icon: BarChart3,
  },
];

const Home = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="font-sans antialiased text-neutral-800 bg-white overflow-hidden min-h-screen">
      {/* Modernized Dark Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Floating Marketplace Logos (Desktop Left) */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <div className="absolute transition-all duration-700 hover:scale-110 opacity-40 hover:opacity-100 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10" style={{ top: '22%', left: '8%' }}>
            {heroLogos[0].logo}
          </div>
          <div className="absolute transition-all duration-700 hover:scale-110 opacity-40 hover:opacity-100 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10" style={{ top: '50%', left: '5%' }}>
            {heroLogos[1].logo}
          </div>
          <div className="absolute transition-all duration-700 hover:scale-110 opacity-40 hover:opacity-100 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10" style={{ top: '76%', left: '9%' }}>
            {heroLogos[2].logo}
          </div>
        </div>

        {/* Floating Marketplace Logos (Desktop Right) */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <div className="absolute transition-all duration-700 hover:scale-110 opacity-40 hover:opacity-100 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10" style={{ top: '22%', right: '8%' }}>
            {heroLogos[3].logo}
          </div>
          <div className="absolute transition-all duration-700 hover:scale-110 opacity-40 hover:opacity-100 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10" style={{ top: '50%', right: '5%' }}>
            {heroLogos[4].logo}
          </div>
          <div className="absolute transition-all duration-700 hover:scale-110 opacity-40 hover:opacity-100 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10" style={{ top: '76%', right: '9%' }}>
            {heroLogos[5].logo}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-inner">
              <div className="flex -space-x-2 overflow-hidden">
                <img src="https://i.ibb.co/MxpSPnVS/Face-3.jpg" alt="Client" className="inline-block w-7 h-7 rounded-full ring-2 ring-neutral-900 object-cover" decoding="async" />
                <img src="https://i.ibb.co/BHSw0TW9/random-person-1.jpg" alt="Client" className="inline-block w-7 h-7 rounded-full ring-2 ring-neutral-900 object-cover" decoding="async" />
                <img src="https://i.ibb.co/5XrCdLZw/Face.jpg" alt="Client" className="inline-block w-7 h-7 rounded-full ring-2 ring-neutral-900 object-cover" decoding="async" />
                <img src="https://i.ibb.co/GmsLmhX/Face-1.jpg" alt="Client" className="inline-block w-7 h-7 rounded-full ring-2 ring-neutral-900 object-cover" decoding="async" />
                <img src="https://i.ibb.co/bgxTwBM0/Face-2.jpg" alt="Client" className="inline-block w-7 h-7 rounded-full ring-2 ring-neutral-900 object-cover" decoding="async" />
              </div>
              <div className="flex items-center gap-1.5 pl-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-white">
                  4.9/5 Rating <span className="text-neutral-400 font-normal">by 100+ Brands</span>
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[0.95] sm:leading-[0.95] lg:leading-[0.95] tracking-tight mb-6 max-w-4xl">
              Scale Your Sales Without Scaling Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400">
                Stress
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-10 max-w-2xl font-normal">
              Sell more, reach further, and dominate multi-marketplace operations across Walmart, eBay, TikTok Shop, Etsy & Temu, without the operational headache.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                See Our Client Results
              </Link>
            </div>

            {/* Trust Micro-badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Authorized Channel Partners
              </span>
              <span className="hidden sm:inline text-neutral-700">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent-400" /> No Binding Long-term Lock-ins
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Bar / Trusted By Section */}
      <section className="bg-neutral-950 py-12 text-white relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-neutral-400 text-xs font-bold uppercase tracking-widest mb-8">
            Trusted By High-Growth Digital Brands
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16 opacity-85">
            <div className="text-2xl font-bold tracking-tight text-neutral-200 hover:text-white transition-colors duration-300">
              Nordic<span className="font-light text-neutral-400">Home</span>
            </div>
            <div className="text-2xl font-black tracking-widest text-neutral-200 hover:text-white transition-colors duration-300">
              VELORA
            </div>
            <div className="text-2xl font-bold tracking-tight text-neutral-200 hover:text-white transition-colors duration-300">
              Brik<span className="text-primary-400">&</span>Co
            </div>
            <div className="text-2xl font-black italic tracking-wide text-neutral-200 hover:text-white transition-colors duration-300">
              FUSE
            </div>
            <div className="text-2xl font-bold tracking-tight text-neutral-200 hover:text-white transition-colors duration-300">
              cinder<span className="font-light text-neutral-400">.co</span>
            </div>
            <div className="text-2xl font-bold tracking-tight text-neutral-200 hover:text-white transition-colors duration-300">
              Marlow
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Testimonials Carousel */}
      <section className="relative bg-black py-24 overflow-hidden border-t border-neutral-800">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
          <span className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-3 block">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
            What Our Brand Partners Say
          </h2>
          <p className="text-neutral-400 text-base max-w-2xl mx-auto">
            Real performance numbers and authentic feedback from brand founders we've helped expand.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-r from-neutral-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-l from-neutral-900 to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-slow">
            {marqueeTestimonials.map((t, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-60 sm:w-64 h-[320px] mx-1.5 rounded-2xl overflow-hidden border border-neutral-800 group hover:border-neutral-700 transition-all duration-300 shadow-xl"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <div className="inline-block px-2.5 py-1 bg-primary-600/90 backdrop-blur-md rounded-md text-white text-xs font-bold mb-3 w-max">
                    {t.headline}
                  </div>

                  <p className="text-neutral-200 text-sm leading-relaxed mb-4 line-clamp-3 italic">
                    "{t.quote}"
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-white font-semibold text-sm block">
                        {t.name}
                      </span>
                      <span className="text-neutral-400 text-xs block">
                        {t.role}
                      </span>
                    </div>
                    <img
                      src="https://i.ibb.co/6JNN98d1/linkedin-logo-578229-227.jpg"
                      alt="LinkedIn"
                      className="w-4 h-4 object-contain opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Path Tier Cards */}
      <section className="relative bg-neutral-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-400 text-xs font-bold tracking-widest uppercase mb-3 block">
              Engagement Models
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6 tracking-tight">
              Choose How You Want To{' '}
              <span className="italic font-serif text-primary-400">Scale.</span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
              Most brands plug holes with disconnected freelancers or siloed tools. We deliver one unified, accountable marketplace strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${tier.popular ? 'md:-translate-y-3' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold tracking-wider rounded-full shadow-lg whitespace-nowrap border border-white/20">
                      <Star className="w-3.5 h-3.5 fill-white text-white" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <Link
                  to={tier.link}
                  className={`relative rounded-3xl p-8 sm:p-10 flex flex-col h-full ${tier.gradientClass} border border-white/10 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-white/20`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-white/70 text-xs font-mono tracking-widest uppercase">
                      {tier.tag}
                    </span>
                    <span className="font-serif italic text-white/30 text-3xl leading-none">
                      {tier.numeral}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight mb-3">
                    {tier.title}
                  </h3>
                  <p className="italic font-serif text-primary-200/90 text-sm mb-5">
                    {tier.subtitle}
                  </p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {tier.bullets.map((b, i) => (
                      <li key={i} className="flex items-center text-neutral-200 text-xs font-medium">
                        <CheckCircle className="w-4 h-4 text-accent-400 mr-2.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-white/15 flex items-center justify-between text-white text-xs font-mono tracking-widest uppercase font-semibold">
                    <span>{tier.ctaLabel}</span>
                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-600 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-3 block">
              Multi-Channel Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 tracking-tight mb-4">
              Complete eCommerce Marketplace Solutions
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              End-to-end specialized capabilities designed to launch, optimize, and scale your brand across high-volume sales channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-neutral-50 group-hover:bg-primary-50 transition-colors border border-neutral-100">
                    {service.logo ?? <service.icon className="w-7 h-7 text-primary-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-xs font-bold text-primary-600 uppercase tracking-wider group-hover:text-primary-700"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-md group"
            >
              Explore All Services & Capabilities
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Models Supported Section */}
      <section className="py-20 bg-white border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-3">
              Tailored for Every Business Model
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Whether you build original IP or manage high-velocity wholesale, our team adapts strategies to your specific operating model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModels.map((model, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/70 hover:border-neutral-300 transition-colors">
                <model.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{model.title}</h3>
                <p className="text-neutral-600 text-xs leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Newsletter Section */}
      <section className="relative bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Past Issues */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-6">
                Recent Marketplace Breakdown Issues
              </h2>

              <div className="space-y-4">
                {pastIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="bg-white border border-neutral-200/80 rounded-2xl p-5 hover:border-primary-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="flex -space-x-2 mr-2.5">
                          <img src={issue.avatar1} alt="" className="w-6 h-6 rounded-full ring-2 ring-white object-cover" loading="lazy" decoding="async" />
                          <img src={issue.avatar2} alt="" className="w-6 h-6 rounded-full ring-2 ring-white object-cover" loading="lazy" decoding="async" />
                        </div>
                        <span className="text-neutral-900 text-xs font-semibold">{issue.author}</span>
                      </div>
                      <span className="text-neutral-400 text-xs font-mono">{issue.date}</span>
                    </div>
                    <h3 className="text-neutral-900 font-bold text-base leading-snug mb-1.5 group-hover:text-primary-600 transition-colors">
                      {issue.title}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2">
                      {issue.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Signup CTA Card */}
            <div className="lg:col-span-7">
              <div className="relative bg-gradient-to-br from-neutral-950 via-primary-950 to-neutral-900 rounded-3xl p-8 sm:p-12 lg:p-14 border border-neutral-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-3 mb-4">
                    <img src="https://i.ibb.co/MxpSPnVS/Face-3.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-neutral-900 object-cover" loading="lazy" decoding="async" />
                    <img src="https://i.ibb.co/BHSw0TW9/random-person-1.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-neutral-900 object-cover" loading="lazy" decoding="async" />
                    <img src="https://i.ibb.co/5XrCdLZw/Face.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-neutral-900 object-cover" loading="lazy" decoding="async" />
                    <img src="https://i.ibb.co/bgxTwBM0/Face-2.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-neutral-900 object-cover" loading="lazy" decoding="async" />
                  </div>

                  <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-white text-xs font-medium mb-6">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1.5" />
                    Join 1000+ Ecommerce Sellers — 100% Free
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white leading-tight mb-4">
                    Marketplace growth strategies &{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                      tactics
                    </span>
                    , straight to your inbox.
                  </h2>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                    Subscribe today and gain instant access to our Marketplace Growth Playbook and Listing Audit Framework.
                  </p>

                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <div className="relative flex-1">
                      <Mail className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-11 pr-4 py-3.5 bg-neutral-900/90 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-primary-400 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm rounded-xl transition-colors duration-300 whitespace-nowrap shadow-lg shadow-primary-600/30"
                    >
                      Subscribe Free
                    </button>
                  </form>

                  <div className="flex items-center gap-2 text-neutral-400 text-xs mt-4">
                    <Lock className="w-3.5 h-3.5" /> No spam. Unsubscribe anytime with one click.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;