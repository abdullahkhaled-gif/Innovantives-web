import { Link } from 'react-router-dom';
import {
  Target,
  Award,
  Heart,
  TrendingUp,
  ArrowRight,
  Linkedin,
  Twitter,
  Star,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';

/**
 * Static arrays defined at module scope to eliminate memory re-allocation on renders.
 */
const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure our success by the success of our clients. Every strategy is designed with clear KPIs and ROI targets.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We stay ahead of marketplace trends and algorithm changes to deliver cutting-edge strategies.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We see ourselves as an extension of your team, invested in your long-term success and growth.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    description: 'We constantly test, learn, and optimize to drive continuous improvement and innovation.',
  },
];

const team = [
  {
    name: 'Umar Farooq',
    role: 'CEO & Founder',
    bio: 'eCommerce strategist with 15+ years scaling marketplace brands across Walmart, eBay, TikTok Shop, Etsy, and Temu.',
    image: 'https://i.pravatar.cc/400?img=12',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Abdullah Khalid',
    role: 'Head of Multi-Channel Advertising',
    bio: 'Performance marketing expert managing $50M+ in ad spend across Walmart Connect, eBay Promoted Listings, and TikTok Ads.',
    image: 'https://i.pravatar.cc/400?img=13',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Abdur Rafae',
    role: 'Product Hunting & Sourcing Lead',
    bio: 'Sourcing and product hunting specialist. Identified and launched 10,000+ winning products across global marketplaces.',
    image: 'https://i.pravatar.cc/400?img=14',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Abdul Moiz',
    role: 'Head of Etsy Operations',
    bio: 'Etsy growth specialist. Led 200+ shops to Star Seller status with SEO, Etsy Ads, and conversion optimization.',
    image: 'https://i.pravatar.cc/400?img=15',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Zaid Khalid',
    role: 'Client Success Manager',
    bio: 'Dedicated to long-term partnerships. Built and scaled support teams for 100+ marketplace sellers.',
    image: 'https://i.pravatar.cc/400?img=51',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Usama Aslam',
    role: 'eBay & Multi-Channel Lead',
    bio: 'eBay and multi-channel expert. Launched and scaled 200+ successful stores across eBay, Walmart, and TikTok Shop.',
    image: 'https://i.pravatar.cc/400?img=33',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
];

const milestones = [
  { year: '2015', event: 'Founded in Islamabad' },
  { year: '2018', event: 'Managed $10M+ in marketplace sales' },
  { year: '2019', event: 'Expanding to Walmart & eBay' },
  { year: '2020', event: 'Launched Etsy & TikTok Shop services' },
  { year: '2021', event: 'Generated $50M+ in client revenue' },
  { year: '2022', event: 'Opened London office' },
  { year: '2023', event: '50+ clients, $150M+ revenue generated' },
  { year: '2024', event: 'Named Top eCommerce Agency by Industry Awards' },
  { year: '2026', event: 'Trusted by 100+ Brands Worldwide & Growing' },
];

const About = () => {
  return (
    <div className="pt-12 sm:pt-14 font-sans antialiased text-neutral-800 bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-neutral-900 pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-neutral-800">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-800/80 border border-neutral-700/80 rounded-full text-white text-xs font-medium mb-6">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-neutral-200">
                Founded 2015 <span className="text-neutral-500">&middot;</span> Islamabad &amp; London
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
              Your Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                eCommerce Success
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              Since 2015, we've helped hundreds of brands navigate the complex world of online marketplaces, turning ambitious entrepreneurs into marketplace leaders.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary-600/20 transition-all group"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-sm rounded-xl border border-neutral-700 transition-all"
              >
                View Client Results
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Authorized Channel Experts
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary-400" /> Dedicated Account Team
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="text-primary-600 font-bold text-xs tracking-widest uppercase mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mb-6 tracking-tight">
                Built by Operators, Not Strategists
              </h2>
              
              <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Innovantives started with a simple observation: while platforms like Walmart and eBay offered incredible growth opportunities, most sellers struggled to navigate the operational complexities of multi-marketplace selling.
                </p>
                <p>
                  Our founder, Umar Farooq, spent years leading marketplace partnerships. He saw firsthand how the right data-driven strategies could transform small sellers into category leaders—while fragmented approaches led to stagnation.
                </p>
                <p>
                  Founded in Islamabad in 2015, Innovantives was built on a mission to democratize enterprise marketplace success. We bring institutional-grade operational precision to brands of all scales.
                </p>
                
                <div className="pt-4 border-t border-neutral-200/80 mt-6">
                  <p className="font-semibold text-neutral-900 text-base leading-snug">
                    Today, we're proud to have helped 100+ clients generate over $150 million in marketplace revenue across Walmart, eBay, TikTok Shop, Etsy, and Temu.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Innovantives agency team at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 bg-neutral-900 text-white p-6 rounded-2xl shadow-xl border border-neutral-800">
                <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">11+</p>
                <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mt-1">Years of Operational Excellence</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary-400 font-bold text-xs tracking-widest uppercase mb-3 block">
              Domain Experts
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Industry practitioners with specialized channel expertise across every major global marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-neutral-900/80 rounded-3xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-6">{member.bio}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex space-x-2.5">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-800 text-neutral-400 hover:bg-primary-600 hover:text-white rounded-xl transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-800 text-neutral-400 hover:bg-primary-600 hover:text-white rounded-xl transition-colors duration-200"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Journey */}
      <section className="py-20 lg:py-28 bg-neutral-50/60 border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs tracking-widest uppercase mb-3 block">
              Our Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 tracking-tight mb-4">
              Milestones From 2015 to Today
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              A decade of disciplined execution and sustained international expansion.
            </p>
          </div>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200 hidden md:block" />
            
            <div className="space-y-6 sm:space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/80 hover:border-primary-300 transition-all duration-300 inline-block text-left">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block mb-1">
                        {milestone.year}
                      </span>
                      <p className="text-sm font-semibold text-neutral-900">{milestone.event}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-primary-600 rounded-full ring-4 ring-primary-100 z-10" />
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs tracking-widest uppercase mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 tracking-tight mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              The fundamental standards that dictate how we manage client portfolios and scale brands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-neutral-50/60 border border-neutral-200/70 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 text-xs leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregate Stats Section */}
      <section className="py-16 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-1">100+</p>
              <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Clients Served</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-1">$150M+</p>
              <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Revenue Generated</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-1">100+</p>
              <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Expert Team Members</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-1">98%</p>
              <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;