import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Award, 
  CheckCircle,
  Star, 
  Quote, 
  Clock, 
  PieChart, 
  Filter, 
  Sparkles 
} from 'lucide-react';

/**
 * Static arrays hoisted to module scope to eliminate re-allocations on re-renders.
 */
const caseStudies = [
  {
    id: 1,
    title: 'TechGear Direct',
    company: 'Electronics Wholesaler',
    marketplace: 'Walmart',
    accent: '#0071CE',
    image: 'https://i.ibb.co/zVJgs0Nm/9-2.jpg',
    summary: 'Achieved Top Seller status on Walmart within 3 months of launch',
    challenge: 'An established online wholesaler struggled to gain traction on Walmart. After a year of poor sales and account issues, they were ready to exit the platform.',
    solution: 'We completely restructured their Walmart strategy—optimized their catalog for Walmart\'s algorithm, implemented WFS for faster shipping, and launched Walmart Connect campaigns with aggressive bid strategies.',
    results: [
      { metric: 'Top 10%', label: 'Seller Ranking', icon: Target },
      { metric: '$200K', label: 'Monthly Revenue', icon: DollarSign },
      { metric: '4.8', label: 'Average Rating', icon: Award },
      { metric: '15%', label: 'Conversion Rate', icon: TrendingUp },
    ],
    timeline: '3 months turnaround',
    investment: '$15K optimization investment',
    ROI: '8x return',
    testimonial: {
      quote: "We were about to give up on Walmart. Innovantives came in and within 3 months, we were a Top Seller. Their platform-specific expertise is unmatched.",
      author: 'Michael Torres',
      role: 'Founder, TechGear Direct',
    },
    tags: ['Wholesale', 'Walmart', 'Electronics', 'WFS'],
  },
  {
    id: 2,
    title: 'Global Parts Supply',
    company: 'Automotive Parts Supplier',
    marketplace: 'eBay',
    accent: '#E53238',
    image: 'https://loremflickr.com/800/600/autoparts,mechanic',
    summary: 'Established Top Rated Seller status with international reach',
    challenge: 'An automotive parts supplier with good products but poor eBay presence. Inconsistent listings, no international shipping, and low Best Match rankings.',
    solution: 'We implemented eBay\'s Guaranteed Delivery, optimized listings for Best Match algorithm, launched Promoted Listings campaigns, and established international fulfillment partnerships.',
    results: [
      { metric: 'Top Rated', label: 'Seller Status', icon: Award },
      { metric: '$175K', label: 'Monthly Revenue', icon: DollarSign },
      { metric: '40%', label: 'International Sales', icon: Target },
      { metric: '8.5%', label: 'Conversion Rate', icon: TrendingUp },
    ],
    timeline: '4 months optimization',
    investment: '$12K systems upgrade',
    ROI: '12x return',
    testimonial: {
      quote: "Our eBay business went from an afterthought to our second-largest channel. The international expansion alone opened markets we never thought possible.",
      author: 'Kevin Walsh',
      role: 'CEO, Global Parts Supply',
    },
    tags: ['Wholesale', 'eBay', 'Automotive', 'International'],
  },
  {
    id: 3,
    title: 'Artisan Craft Co.',
    company: 'Handmade Artisan Products',
    marketplace: 'Etsy',
    accent: '#F56400',
    image: 'https://loremflickr.com/800/600/handmade,pottery',
    summary: 'From hobby seller to Star Seller with 5x revenue increase',
    challenge: 'A part-time Etsy seller making $2K/month wanted to scale but struggled with SEO, hadn\'t achieved Star Seller status, and couldn\'t handle increased volume.',
    solution: 'We optimized their entire shop for Etsy\'s algorithm, rebranded their listings, implemented automated fulfillment workflows, and launched strategic Etsy Ads campaigns.',
    results: [
      { metric: '$10K+', label: 'Monthly Revenue', icon: DollarSign },
      { metric: 'Star Seller', label: 'Status Achieved', icon: Award },
      { metric: '150%', label: 'Traffic Increase', icon: TrendingUp },
      { metric: '5.0', label: 'Average Rating', icon: Award },
    ],
    timeline: '6 months to Star Seller',
    investment: '$3K optimization',
    ROI: '15x return',
    testimonial: {
      quote: "I was ready to quit my day job but couldn't make Etsy work full-time. Innovantives transformed my shop into a business that now supports my family.",
      author: 'Rachel Morrison',
      role: 'Owner, Artisan Craft Co.',
    },
    tags: ['White Label', 'Etsy', 'Handmade', 'Artisan Products'],
  },
  {
    id: 4,
    title: 'TrendyStyle Fashion',
    company: 'Fashion Dropshipper',
    marketplace: 'TikTok Shop',
    accent: '#EE1D52',
    image: 'https://loremflickr.com/800/600/fashion,clothing',
    summary: 'Generated $200K in first quarter with viral TikTok Shop campaigns',
    challenge: 'A fashion startup wanted to leverage TikTok Shop but had no experience with social commerce, content creation, or influencer partnerships.',
    solution: 'We built their TikTok Shop from scratch, developed a creator partnership program, created viral content strategies, and implemented live shopping events that drove massive engagement.',
    results: [
      { metric: '$200K', label: 'Q1 Revenue', icon: DollarSign },
      { metric: '12M+', label: 'Video Views', icon: Target },
      { metric: '3x', label: 'Viral Hits', icon: TrendingUp },
      { metric: '25K', label: 'Followers Gained', icon: Target },
    ],
    timeline: 'First quarter results',
    investment: '$8K setup and content',
    ROI: '25x return',
    testimonial: {
      quote: "Innovantives understood TikTok Shop before anyone else. Their creator strategy and live shopping execution helped us go viral multiple times. We're now a recognized brand.",
      author: 'Jessica Park',
      role: 'Marketing Director, TrendyStyle',
    },
    tags: ['Dropshipping', 'TikTok Shop', 'Fashion', 'Social Commerce'],
  },
  {
    id: 5,
    title: 'EcoHome Essentials',
    company: 'Private Label Brand',
    marketplace: 'Temu',
    accent: '#FB7701',
    image: 'https://loremflickr.com/800/600/homedecor,eco',
    summary: 'From zero to $500K/month in 18 months with strategic Private Label positioning',
    challenge: 'A first-time seller wanted to launch eco-friendly home products on Temu but had no brand presence, limited capital, and faced fierce competition from established brands.',
    solution: 'We identified a gap in sustainable home goods, developed a differentiated product line, executed comprehensive listing optimization, and implemented aggressive promotional campaigns with influencer partnerships.',
    results: [
      { metric: '$500K+', label: 'Monthly Revenue', icon: DollarSign },
      { metric: '340%', label: 'ROAS Achieved', icon: TrendingUp },
      { metric: '4.9', label: 'Average Rating', icon: Award },
      { metric: '50K+', label: 'Units Sold/Month', icon: Target },
    ],
    timeline: '18 months to success',
    investment: '$30K initial investment',
    ROI: '10x return',
    testimonial: {
      quote: "Innovantives didn't just help us launch—they built us into a market leader. Their strategic approach to differentiation and their relentless optimization made all the difference.",
      author: 'Sarah Chen',
      role: 'CEO, EcoHome Essentials',
    },
    tags: ['Private Label', 'Temu', 'Home Goods', 'Sustainability'],
  },
];

const marketplacesList = ['All', 'Walmart', 'eBay', 'Etsy', 'TikTok Shop', 'Temu'];

const industries = [
  'Home & Kitchen',
  'Electronics',
  'Fashion & Apparel',
  'Beauty & Personal Care',
  'Automotive',
  'Sports & Outdoors',
  'Health & Wellness',
  'Pet Supplies',
];

const heroStats = [
  { value: '$150M+', label: 'Client Revenue Generated' },
  { value: '100+', label: 'Success Stories' },
  { value: '5', label: 'Marketplace Platforms' },
  { value: '340%', label: 'Avg. Revenue Increase' },
];

const CaseStudies = () => {
  const [selectedMarketplace, setSelectedMarketplace] = useState<string>('All');

  const filteredCaseStudies = selectedMarketplace === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.marketplace.toLowerCase() === selectedMarketplace.toLowerCase());

  return (
    <div className="font-sans bg-white text-neutral-900 antialiased selection:bg-primary-500 selection:text-white min-h-screen">
      
      {/* Dark Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-xs font-medium mb-6 backdrop-blur-md shadow-inner">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Verified results across 5 major marketplaces</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Real Results,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400">
                Real Growth.
              </span>
            </h1>
            
            <p className="text-base text-neutral-300 leading-relaxed max-w-xl mx-auto mb-8">
              Explore how our end-to-end marketplace management and scaling strategies drive measurable performance, higher conversion rates, and revenue for our clients.
            </p>

            {/* Industry Tags Pills */}
            <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl mx-auto">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-white/[0.03] border border-white/10 text-neutral-300 rounded-full text-[11px] font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-white/10 max-w-3xl mx-auto text-center">
            {heroStats.map((stat, index) => (
              <div key={index} className="p-2.5 sm:p-3 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-neutral-400 text-xs mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Case Studies Section (White Theme) */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-xs tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-3">
              Proof, Not Promises
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Every strategy below is backed by real accounts, transparent timelines, and measurable returns on investment.
            </p>
          </div>

          {/* Interactive Marketplace Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mr-2 hidden sm:flex">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter Platform:</span>
            </div>
            {marketplacesList.map((marketplace) => (
              <button
                key={marketplace}
                onClick={() => setSelectedMarketplace(marketplace)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedMarketplace.toLowerCase() === marketplace.toLowerCase()
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80 hover:text-neutral-900 border border-neutral-200/60'
                }`}
              >
                {marketplace}
              </button>
            ))}
          </div>

          {/* Case Studies List */}
          <div className="space-y-12 lg:space-y-16">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white rounded-3xl border border-neutral-200/80 overflow-hidden shadow-lg shadow-neutral-100 transition-all duration-300 hover:shadow-xl hover:border-neutral-300"
              >
                <div
                  className={`grid lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-10 items-stretch ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden group h-full min-h-[280px] sm:min-h-[360px] border border-neutral-200/60">
                      <img
                        src={study.image}
                        alt={`${study.title} — ${study.marketplace} case study`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      
                      {/* Marketplace Floating Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className="px-4 py-2 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md backdrop-blur-md"
                          style={{ backgroundColor: `${study.accent}EB` }}
                        >
                          {study.marketplace}
                        </span>
                      </div>

                      {/* Timeline & ROI Overlay Badge */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/50 text-neutral-900 shadow-md">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary-600" />
                          <span className="text-xs font-semibold">{study.timeline}</span>
                        </div>
                        <span className="text-xs text-primary-700 font-bold bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200">
                          {study.ROI}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            onClick={() => {
                              if (marketplacesList.includes(tag)) {
                                setSelectedMarketplace(tag);
                              }
                            }}
                            className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-medium border border-neutral-200/60 transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title & Company */}
                      <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 tracking-tight mb-1">
                          {study.title}
                        </h3>
                        <p className="text-primary-600 text-sm font-semibold mb-3">{study.company}</p>
                        <p className="text-neutral-800 font-semibold text-base sm:text-lg border-l-2 border-primary-600 pl-4 py-0.5">
                          {study.summary}
                        </p>
                      </div>

                      {/* Challenge & Solution Grid */}
                      <div className="grid sm:grid-cols-2 gap-6 mb-8 text-xs sm:text-sm">
                        <div className="bg-neutral-50/80 p-4 rounded-2xl border border-neutral-100">
                          <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            The Challenge
                          </h4>
                          <p className="text-neutral-600 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div className="bg-neutral-50/80 p-4 rounded-2xl border border-neutral-100">
                          <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Our Solution
                          </h4>
                          <p className="text-neutral-600 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Metric Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                        {study.results.map((result, idx) => {
                          const IconComponent = result.icon;
                          return (
                            <div
                              key={idx}
                              className="bg-neutral-50/80 rounded-xl p-3.5 border border-neutral-200/60 hover:border-primary-200 hover:bg-white transition-all duration-200 shadow-sm"
                            >
                              <div className="flex items-center gap-1.5 mb-1 text-primary-600">
                                <IconComponent className="w-4 h-4" />
                                <span className="text-lg sm:text-xl font-heading font-extrabold text-neutral-900">
                                  {result.metric}
                                </span>
                              </div>
                              <p className="text-xs text-neutral-600 font-medium">{result.label}</p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Testimonial Quote */}
                      <div className="relative bg-primary-50/60 rounded-2xl p-5 border border-primary-100/80 mb-6">
                        <Quote className="absolute top-4 right-4 w-6 h-6 text-primary-200" />
                        <p className="text-neutral-700 text-xs sm:text-sm italic mb-3 relative z-10">
                          "{study.testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-bold text-neutral-900 text-xs sm:text-sm">{study.testimonial.author}</p>
                          <p className="text-xs text-neutral-600">{study.testimonial.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="pt-4 border-t border-neutral-200/80 flex flex-wrap items-center justify-between text-xs gap-4">
                      <div className="flex items-center gap-1.5 text-neutral-600">
                        <PieChart className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Investment:</span>
                        <span className="font-semibold text-neutral-900">{study.investment}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-neutral-600">Achieved ROI:</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {study.ROI}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state when filtering */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12 bg-neutral-50 rounded-3xl border border-neutral-200/80">
              <p className="text-neutral-600 text-base mb-4">No case studies found for "{selectedMarketplace}".</p>
              <button
                onClick={() => setSelectedMarketplace('All')}
                className="px-4 py-2 bg-primary-600 text-white rounded-xl text-xs font-semibold hover:bg-primary-700"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden border-t border-neutral-200/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 border border-primary-200 text-primary-600 mb-6 mx-auto shadow-sm">
            <Award className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-neutral-900 tracking-tight mb-4">
            Your Success Story Starts Here
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Join 100+ brands that have transformed their marketplace presence with our expertise. Let's write your success story together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <p className="text-neutral-500 text-xs mt-5 flex items-center justify-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>No long-term contracts required. Cancel anytime.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;