import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Download, 
  BookOpen, 
  FileSpreadsheet, 
  Zap, 
  ShieldCheck, 
  Mail, 
  TrendingUp, 
  Award,
  Clock
} from 'lucide-react';

/**
 * Static arrays hoisted to module scope to prevent re-allocations on re-renders/state changes.
 */
const teams = [
  'NordicHome',
  'VELORA',
  'Brik&Co',
  'FUSE',
  'cinder.co',
  'Marlow',
];

const valuePerks = [
  {
    title: 'The Growth Playbook',
    type: 'PDF Guide',
    description: 'Our battle-tested scaling roadmap for Walmart, eBay, Etsy, TikTok Shop, and Temu.',
    icon: BookOpen,
    badge: 'Free Download'
  },
  {
    title: 'Listing Audit Templates',
    type: 'Spreadsheet Kit',
    description: 'Plug-and-play SEO & conversion rate optimization checklists used by top agencies.',
    icon: FileSpreadsheet,
    badge: 'Free Download'
  }
];

const newsletterFeatures = [
  {
    icon: TrendingUp,
    title: 'Algorithmic Breakdown',
    description: 'Deep dives into recent ranking algorithm updates on Walmart Connect, TikTok Shop, and eBay.'
  },
  {
    icon: Zap,
    title: 'Actionable Strategies',
    description: 'Zero fluff. Step-by-step PPC bid structures, WFS fulfillment tricks, and listing conversion hacks.'
  },
  {
    icon: Award,
    title: 'Exclusive Case Studies',
    description: 'Real seller numbers, revenue breakdowns, and campaign post-mortems sent directly to your inbox.'
  }
];

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('Subscribed:', email);
    setSubmitted(true);
  };

  return (
    <div className="font-sans bg-white text-neutral-900 antialiased selection:bg-primary-500 selection:text-white min-h-screen flex flex-col">
      
      {/* Dark Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 sm:gap-8">
          
          {/* Avatar Stack + Rating Badge (Above-the-fold: eager loading, decoding="async") */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex -space-x-2">
              <img src="https://i.ibb.co/Hp2sZfTN/Marcus-Reyes.jpg" alt="Reader" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover shadow-sm" decoding="async" />
              <img src="https://i.ibb.co/s9dv9knN/Sarah-Klein.jpg" alt="Reader" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover shadow-sm" decoding="async" />
              <img src="https://i.ibb.co/hx5Zn8YS/David-Foss.jpg" alt="Reader" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover shadow-sm" decoding="async" />
              <img src="https://i.ibb.co/N6RRQB20/Elena-Cho.jpg" alt="Reader" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover shadow-sm" decoding="async" />
              <img src="https://i.ibb.co/whdBXhJv/Jordan-Pace.jpg" alt="Reader" className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover shadow-sm" decoding="async" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white text-xs font-medium backdrop-blur-md">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>Read by 1000+ eCommerce Sellers</span>
            </div>
          </div>

          {/* Main Headline & Subtitle Container */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.15] lg:leading-[1.15] mb-4">
              Multi-Marketplace Growth Strategies{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400">
                & Tactics
              </span>
              , In Your Inbox.
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Subscribe to <strong className="text-white">The Marketplace Edge</strong> and instantly unlock our free{' '}
              <span className="text-primary-300 font-semibold underline decoration-primary-500/50 underline-offset-2">Growth Playbook</span> and{' '}
              <span className="text-primary-300 font-semibold underline decoration-primary-500/50 underline-offset-2">Listing Audit Templates</span>.
            </p>
          </div>

          {/* Form / Success State Container */}
          <div className="w-full max-w-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full pl-10 pr-4 py-3 bg-neutral-900/90 border border-white/10 rounded-xl text-white text-sm placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:from-primary-500 hover:to-primary-600 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>Get My Bonuses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-5 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-center shadow-2xl backdrop-blur-md">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">You're on the list!</h3>
                <p className="text-xs text-emerald-200 mb-3">
                  Check your inbox ({email}) for your welcome email and bonus download links.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="text-xs text-neutral-400 hover:text-white underline transition-colors"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>

          {/* Micro Trust Guarantee */}
          <div className="flex items-center justify-center gap-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              Every Monday morning
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              1-Click Unsubscribe
            </span>
          </div>

        </div>
      </section>

      {/* Free Bonuses Value Stack Section */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-xs tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Access Included</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-2">
              What You Receive Immediately
            </h2>
            <p className="text-neutral-600 text-sm">
              Free resources designed to help you optimize marketplace listings and scale efficiently.
            </p>
          </div>

          {/* Bonus Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {valuePerks.map((perk, index) => {
              const IconComponent = perk.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-50/80 rounded-2xl p-6 border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-md uppercase tracking-wider">
                        {perk.badge}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{perk.type}</span>
                    <h3 className="text-lg font-heading font-bold text-neutral-900 mt-0.5 mb-2">{perk.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">{perk.description}</p>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-neutral-700">
                    <Download className="w-3.5 h-3.5 text-primary-600" />
                    <span>Delivered via email upon signup</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* What to Expect Features */}
          <div className="border-t border-neutral-200/80 pt-14">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-900 mb-2">
                What You'll Get Every Monday
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm">
                Curated insights from our team managing live multi-channel eCommerce accounts.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {newsletterFeatures.map((feature, idx) => {
                const IconComp = feature.icon;
                return (
                  <div key={idx} className="text-center p-4">
                    <div className="w-10 h-10 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mx-auto mb-3 border border-neutral-200/60">
                      <IconComp className="w-5 h-5 text-primary-600" />
                    </div>
                    <h4 className="font-bold text-neutral-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Loved By Brands Section */}
      <section className="mt-auto py-12 bg-neutral-50 border-t border-neutral-200/80">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
            Loved by eCommerce teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {teams.map((name, i) => (
              <span
                key={i}
                className="text-base sm:text-lg font-bold text-neutral-400 hover:text-neutral-700 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Newsletter;