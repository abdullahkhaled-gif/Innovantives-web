import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  Clock, 
  ShieldCheck, 
  Building2, 
  HelpCircle 
} from 'lucide-react';

/**
 * Hoisted static constants & arrays to eliminate re-allocation overhead on component re-renders.
 */
const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service_interest: '',
  marketplace: '',
  business_model: '',
  budget: '',
  message: '',
};

const serviceOptions = [
  'Walmart Marketplace Management',
  'eBay Store Management',
  'TikTok Shop Management',
  'Etsy Store Management',
  'Temu Seller Central Management',
  'Full-Service Management',
  'Other',
];

const marketplaceOptions = [
  'Walmart',
  'eBay',
  'TikTok Shop',
  'Etsy',
  'Temu',
  'Multiple Platforms',
  'Not Sure Yet',
];

const businessModelOptions = [
  'Private Label',
  'White Label',
  'Dropshipping',
  'Wholesale',
  'Multiple Models',
  'Not Sure',
];

const budgetOptions = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'Flexible',
];

const faqs = [
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients see significant improvements within 3-6 months. However, results vary based on your business model, marketplace, and starting point.',
  },
  {
    question: 'What marketplaces do you support?',
    answer: 'We specialize in Walmart, eBay, TikTok Shop, Etsy, and Temu. We have dedicated teams for each platform with platform-specific expertise.',
  },
  {
    question: 'Do you work with new sellers?',
    answer: 'Absolutely! We help entrepreneurs at all stages—from first-time sellers to established brands seeking to scale. Our strategies are tailored to your experience level.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing including monthly retainers, project-based fees, and performance-based models. We\'ll discuss the best approach during your consultation.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData(INITIAL_FORM_DATA);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="font-sans bg-white text-neutral-900 antialiased selection:bg-primary-500 selection:text-white min-h-screen">
      
      {/* Dark Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-xs font-medium mb-6 backdrop-blur-md shadow-inner">
            <Clock className="w-3.5 h-3.5 text-primary-400" />
            <span>We respond within 24 hours</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Scale Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400">
              eCommerce Empire
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Schedule a free strategic consultation with our marketplace experts. We'll analyze your goals and engineer a tailored multi-channel strategy for your brand.
          </p>

          {/* Above-the-fold avatars: eager loaded, decoding="async" */}
          <div className="flex items-center justify-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <div className="flex -space-x-2">
              <img src="https://i.ibb.co/Hp2sZfTN/Marcus-Reyes.jpg" alt="Client" className="w-7 h-7 rounded-full border-2 border-neutral-900 object-cover" decoding="async" />
              <img src="https://i.ibb.co/hx5Zn8YS/David-Foss.jpg" alt="Client" className="w-7 h-7 rounded-full border-2 border-neutral-900 object-cover" decoding="async" />
              <img src="https://i.ibb.co/whdBXhJv/Jordan-Pace.jpg" alt="Client" className="w-7 h-7 rounded-full border-2 border-neutral-900 object-cover" decoding="async" />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white">
              <div className="flex items-center">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
              <span className="font-bold">4.9/5 Rating</span>
              <span className="text-neutral-400">from 100+ Brands</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span>Currently Accepting New Clients</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-3 tracking-tight">
                  Get in Touch With Our Team
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Ready to take your marketplace sales to the next level? Submit the form and an account representative will contact you within 24 hours.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@innovantives.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 hover:border-primary-300 hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500">Email Us Directly</p>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      hello@innovantives.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+923464166466"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 hover:border-primary-300 hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500">Call Us</p>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      +92 346-4166466
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/923464166466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500">Instant WhatsApp</p>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                      +92 346-4166466
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                  <div className="w-11 h-11 bg-neutral-200 text-neutral-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500">Global Offices</p>
                    <p className="text-sm font-semibold text-neutral-900">
                      Islamabad, Pakistan <span className="text-neutral-400 font-normal">|</span> London, England
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours Box */}
              <div className="bg-primary-50/60 rounded-2xl p-5 border border-primary-100/80">
                <div className="flex items-center gap-2 text-primary-700 font-semibold text-sm mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>Office Operating Hours</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM PST<br />
                  Saturday – Sunday: By Special Appointment
                </p>
              </div>
            </div>

            {/* Contact Form Box */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200/80 shadow-xl shadow-neutral-100 relative">
                
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-900 mb-1">
                    Start Your Free Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Provide details about your current brand setup so we can best match your needs.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="text-center py-12 px-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm border border-emerald-200">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-neutral-600 mb-6 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. An eCommerce specialist from our team will review your information and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors text-sm shadow-md"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900 text-xs">Submission Failed</p>
                          <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder="Your Brand LLC"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service_interest" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Primary Service Interest
                      </label>
                      <select
                        id="service_interest"
                        name="service_interest"
                        value={formData.service_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="marketplace" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Target Marketplace
                        </label>
                        <select
                          id="marketplace"
                          name="marketplace"
                          value={formData.marketplace}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none cursor-pointer"
                        >
                          <option value="">Select marketplace</option>
                          {marketplaceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="business_model" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                          Business Model
                        </label>
                        <select
                          id="business_model"
                          name="business_model"
                          value={formData.business_model}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none cursor-pointer"
                        >
                          <option value="">Select model</option>
                          {businessModelOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Estimated Monthly Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none cursor-pointer"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Project Details & Goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Tell us about your current situation, growth targets, and pain points..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Your info is kept 100% confidential. No spam guaranteed.</span>
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-neutral-50/60 border-t border-neutral-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-xs tracking-widest uppercase mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm">
              Everything you need to know about partnering with our marketplace agency.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-primary-200 shadow-md' : 'border-neutral-200/80 hover:border-neutral-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <h3 className="font-bold text-neutral-900 text-sm sm:text-base">{faq.question}</h3>
                    <ChevronDown
                      className={`w-4 h-4 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-neutral-600 px-5 sm:px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;