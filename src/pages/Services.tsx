import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Zap,
  Package,
  DollarSign,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  ShieldCheck,
  Sparkles,
  ChevronRight
} from 'lucide-react';

/**
 * Static data hoisted to module scope to avoid re-allocation on re-renders.
 */
const featuredServices = [
  {
    icon: ShoppingCart,
    title: 'Walmart Marketplace Management',
    description: 'From account creation to first sale, we handle everything.',
    features: [
      'Account registration & verification',
      'Brand registry & protection',
      'Store design & optimization',
      'Product catalog setup',
      'WFS strategy planning',
    ],
  },
  {
    icon: BarChart3,
    title: 'eBay Store Management',
    description: 'Full-service day-to-day operations management.',
    features: [
      'Inventory planning & management',
      'Pricing strategy optimization',
      'Performance monitoring',
      'Seller health maintenance',
      'Policy compliance & updates',
    ],
  },
  {
    icon: Target,
    title: 'TikTok Shop Management',
    description: 'Maximize visibility with optimized product listings.',
    features: [
      'Keyword research & targeting',
      'Title & bullet optimization',
      'Creator & live shopping content',
      'Image optimization',
      'Category & backend keywords',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Etsy Store Management',
    description: 'Data-driven campaigns that maximize ROAS.',
    features: [
      'Campaign strategy & setup',
      'Keyword & targeting optimization',
      'Bid management & automation',
      'Negative keyword optimization',
      'Performance analytics & reporting',
    ],
  },
  {
    icon: Users,
    title: 'Temu Seller Central Management',
    description: 'Professional customer service to maintain stellar ratings.',
    features: [
      '24/7 customer inquiry handling',
      'Returns & refund management',
      'Review monitoring & response',
      'Feedback management',
      'Claims & dispute resolution',
    ],
  },
  {
    icon: Zap,
    title: 'Growth & Scaling',
    description: 'Strategic expansion to new markets and products.',
    features: [
      'Market expansion strategy',
      'Product line development',
      'International marketplace entry',
      'Brand protection & enforcement',
      'Competitor analysis & positioning',
    ],
  },
];

const marketplaces = [
  {
    id: 'walmart',
    name: 'Walmart Marketplace',
    accent: '#0071CE',
    logo: (
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
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
    services: [
      'WFS Setup & Management',
      'Walmart Connect Ads',
      'Listing Optimization',
      'Walmart Drop Ship Vendor',
      'Replenishment Programs',
      'Performance Optimization',
    ],
    stats: [{ label: 'Sellers in Top 10%', value: '87%' }],
  },
  {
    id: 'ebay',
    name: 'eBay Store',
    accent: '#E53238',
    logo: (
      <svg viewBox="0 0 80 36" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="w-12 h-7">
        <text x="0" y="30" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif">
          <tspan fill="#E53238">e</tspan>
          <tspan fill="#0064D2">B</tspan>
          <tspan fill="#F5AF02">a</tspan>
          <tspan fill="#86B817">y</tspan>
        </text>
      </svg>
    ),
    services: [
      'Store Subscription Setup',
      'eBay Promoted Listings',
      'International Shipping',
      'eBay Analytics',
      'Best Match Optimization',
      'Top Rated Seller Status',
    ],
    stats: [{ label: 'Conversion Rate Boost', value: '215%' }],
  },
  {
    id: 'tiktok',
    name: 'TikTok Shop',
    accent: '#010101',
    logo: (
      <svg viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-8">
        <path d="M28.5 0C29.2 5.8 32.5 9.5 38 10v7c-3.2-.1-6-1-8.5-2.8V28c0 7.7-5.6 14-13.2 14C9 42 2 35.7 2 27.5 2 19 9 12.5 16.8 12.5c.7 0 1.4.1 2.2.2v7.3c-.7-.2-1.4-.3-2.2-.3-3.8 0-6.8 3-6.8 6.8 0 3.8 3 6.8 6.8 6.8 3.8 0 7-2.8 7-6.8V0h4.7z" fill="#010101"/>
        <path d="M28.5 0C29.2 5.8 32.5 9.5 38 10v7c-3.2-.1-6-1-8.5-2.8V28c0 7.7-5.6 14-13.2 14C9 42 2 35.7 2 27.5 2 19 9 12.5 16.8 12.5c.7 0 1.4.1 2.2.2v7.3c-.7-.2-1.4-.3-2.2-.3-3.8 0-6.8 3-6.8 6.8 0 3.8 3 6.8 6.8 6.8 3.8 0 7-2.8 7-6.8V0h4.7z" fill="#69C9D0" opacity="0.5"/>
        <path d="M26 0C26.7 5.8 30 9.5 35.5 10v7C32.3 16.9 29.5 16 27 14.2V28c0 7.7-5.6 14-13.2 14C6.5 42-.5 35.7-.5 27.5-.5 19 6.5 12.5 14.3 12.5c.7 0 1.4.1 2.2.2v7.3c-.7-.2-1.4-.3-2.2-.3-3.8 0-6.8 3-6.8 6.8 0 3.8 3 6.8 6.8 6.8 3.8 0 7-2.8 7-6.8V0H26z" fill="#EE1D52" opacity="0.5"/>
      </svg>
    ),
    services: [
      'Shop Account Setup',
      'Creator Partnerships',
      'Live Shopping Strategy',
      'Affiliate Program',
      'Content Strategy',
      'TikTok Ads Integration',
    ],
    stats: [{ label: 'Viral Campaign Success', value: '78%' }],
  },
  {
    id: 'etsy',
    name: 'Etsy Store',
    accent: '#F56400',
    logo: (
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="50" height="50" rx="8" fill="#F56400"/>
        <text x="11" y="36" fontSize="34" fontWeight="bold" fontFamily="Georgia, serif" fill="white">E</text>
      </svg>
    ),
    services: [
      'Shop Setup & Optimization',
      'Etsy Ads Management',
      'SEO & Tag Optimization',
      'Star Seller Achievement',
      'Pattern Website Setup',
      'International Shipping',
    ],
    stats: [{ label: 'Traffic Increase', value: '180%' }],
  },
  {
    id: 'temu',
    name: 'Temu Seller Central',
    accent: '#FB7701',
    logo: (
      <svg viewBox="0 0 80 30" overflow="visible" xmlns="http://www.w3.org/2000/svg" className="w-12 h-6">
        <text x="0" y="26" fontSize="28" fontWeight="900" fontFamily="Arial Black, sans-serif" fill="#FB7701">TEMU</text>
      </svg>
    ),
    services: [
      'Seller Central Onboarding',
      'Catalog & Listing Management',
      'Pricing & Margin Strategy',
      'Order & Fulfillment Support',
      'Promotional Campaigns',
      'Performance & Compliance',
    ],
    stats: [{ label: 'Avg. Sales Growth', value: '210%' }],
  },
];

const businessModels = [
  {
    id: 'private-label',
    title: 'Private Label',
    description: 'Build your own brand with exclusive products',
    icon: Award,
    benefits: [
      'Brand ownership & trademark protection',
      'Higher profit margins',
      'Differentiation from competitors',
      'Long-term brand equity',
      'Full control over pricing',
    ],
    bestFor: 'Entrepreneurs ready to invest in building a lasting brand',
    investment: '$15K – $50K+ to launch',
    recommended: true,
  },
  {
    id: 'white-label',
    title: 'White Label',
    description: 'Rebrand existing products as your own',
    icon: Package,
    benefits: [
      'Lower startup costs',
      'Faster time to market',
      'Proven product success',
      'Minimal R&D investment',
      'Scalable catalog expansion',
    ],
    bestFor: 'Sellers wanting quick entry with branded products',
    investment: '$5K – $20K to launch',
  },
  {
    id: 'dropshipping',
    title: 'Dropshipping',
    description: 'Low-risk entry with no inventory required',
    icon: Globe,
    benefits: [
      'No inventory investment',
      'Test products risk-free',
      'Low capital requirements',
      'Flexibility to pivot quickly',
      'Wide product selection',
    ],
    bestFor: 'New sellers testing the market with minimal risk',
    investment: '$500 – $3K to start',
  },
  {
    id: 'wholesale',
    title: 'Wholesale',
    description: 'Access established brands at bulk prices',
    icon: DollarSign,
    benefits: [
      'Sell proven, trusted brands',
      'Consistent demand',
      'Lower marketing costs',
      'Established brand recognition',
      'Simple business model',
    ],
    bestFor: 'Sellers with capital seeking reliable revenue streams',
    investment: '$10K – $100K+ inventory',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We analyze your business, goals, and current marketplace presence.',
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Custom roadmap with clear milestones and KPIs.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Our experts execute the strategy with precision.',
  },
  {
    step: '04',
    title: 'Optimization & Scale',
    description: 'Continuous improvement and growth acceleration.',
  },
];

const heroStats = [
  { value: '5', label: 'Marketplaces Managed' },
  { value: '100+', label: 'Brands Scaled' },
  { value: '$150M+', label: 'Revenue Generated' },
  { value: '4.9/5', label: 'Client Rating' },
];

const Services = () => {
  return (
    <div className="font-sans antialiased text-neutral-800 bg-white overflow-hidden min-h-screen">
      {/* Modernized Dark Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center flex flex-col items-center">
            
            {/* Social Proof Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full shadow-inner mb-8 backdrop-blur-md">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-white">
                Trusted across every major marketplace platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] sm:leading-[1.1] lg:leading-[1.1] tracking-tight mb-6 max-w-4xl">
              Complete Marketplace Services,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400">
                Built to Scale
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl font-normal">
              From account setup to high-velocity scaling, we provide end-to-end management across every major marketplace, so you focus on product, not platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                See Client Results
              </Link>
            </div>

            {/* Micro-badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Authorized Channel Partners
              </span>
              <span className="hidden sm:inline text-neutral-700">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary-400" /> Specialized Platform Experts
              </span>
            </div>

          </div>

          {/* Hero Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10 max-w-4xl mx-auto">
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">{stat.value}</p>
                <p className="text-neutral-400 text-xs font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Marketplace Quick Nav */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3.5 hidden lg:block shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider mr-2">Jump to:</span>
            {marketplaces.map((mp) => (
              <a
                key={mp.id}
                href={`#${mp.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-neutral-700 hover:text-primary-600 hover:bg-neutral-100/80 transition-all border border-transparent hover:border-neutral-200"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mp.accent }} />
                {mp.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Capabilities Grid */}
      <section className="py-20 bg-neutral-50/50 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-3 block">
              Core Operational Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 tracking-tight mb-4">
              Full-Spectrum Marketplace Management
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              End-to-end execution vectors tailored specifically to eliminate technical, logistical, and advertising friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200/80 hover:border-primary-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-xs mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs font-medium text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-xs font-bold text-primary-600 uppercase tracking-wider group-hover:text-primary-700 pt-4 border-t border-neutral-100"
                >
                  Consult Specialist <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace-Specific Detailed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-3 block">
              Channel Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 tracking-tight mb-4">
              Platform-Specific Strategies, Not Guesswork
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              Every marketplace operates under distinct algorithmic rules and buyer dynamics. We deploy dedicated experts for each.
            </p>
          </div>

          <div className="space-y-8">
            {marketplaces.map((marketplace) => (
              <div
                key={marketplace.id}
                id={marketplace.id}
                className="scroll-mt-32 bg-neutral-50/70 rounded-3xl p-8 sm:p-10 border border-neutral-200/80 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                  
                  {/* Left Marketplace Card */}
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-neutral-200 rounded-2xl mb-6 p-3 shadow-sm">
                        {marketplace.logo}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-4">
                        {marketplace.name}
                      </h3>
                    </div>

                    <div
                      className="rounded-2xl p-5 border border-black/5"
                      style={{ backgroundColor: `${marketplace.accent}0D` }}
                    >
                      {marketplace.stats.map((stat, idx) => (
                        <div key={idx}>
                          <p className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight" style={{ color: marketplace.accent }}>
                            {stat.value}
                          </p>
                          <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Marketplace Features Grid */}
                  <div className="lg:w-2/3">
                    <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">
                      Tailored {marketplace.name} Deliverables
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
                      {marketplace.services.map((service, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 p-3.5 bg-white rounded-xl border border-neutral-200/60 shadow-2xs hover:border-primary-200 transition-colors"
                        >
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span className="text-xs font-medium text-neutral-800">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group"
                    >
                      Get Started with {marketplace.name} Management
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-24 bg-neutral-50/50 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-3 block">
              Strategic Fit
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 tracking-tight mb-4">
              Business Models We Support
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              Playbooks aligned specifically to your inventory model, operational capital, and long-term brand goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessModels.map((model) => (
              <div
                key={model.id}
                id={model.id}
                className={`group relative bg-white rounded-3xl p-8 sm:p-10 border transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                  model.recommended
                    ? 'border-primary-300 ring-2 ring-primary-500/10 shadow-lg'
                    : 'border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                {model.recommended && (
                  <span className="absolute -top-3.5 left-8 px-4 py-1 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-md">
                    MOST POPULAR
                  </span>
                )}

                <div>
                  <div className="flex items-start space-x-5 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-primary-600/20">
                      <model.icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-1">
                        {model.title}
                      </h3>
                      <p className="text-neutral-500 text-xs font-medium">{model.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {model.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs font-medium text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-neutral-100">
                  <div className="text-xs">
                    <span className="text-neutral-400 font-medium">Best for: </span>
                    <span className="text-neutral-700 font-semibold">{model.bestFor}</span>
                  </div>
                  <div className="text-xs font-bold text-primary-600 whitespace-nowrap bg-primary-50 px-3 py-1.5 rounded-lg w-max">
                    {model.investment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Process Section */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-3 block">
              Proven Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
              A Structured Path From Audit to Expansion
            </h2>
            <p className="text-base sm:text-lg text-neutral-400">
              Four distinct, systematic phases engineered to ensure predictable operational continuity and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative bg-neutral-900/60 rounded-2xl p-6 border border-neutral-800/80">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary-600/20 border border-primary-500/40 text-primary-400 font-heading font-extrabold text-sm">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-neutral-400 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;