import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { openCalendlyPopup } from '../components/BookDemo';
import { PortalLink } from '../components/PortalLink';
import { motion, useInView, useAnimation } from 'motion/react';
import {
  MapPin,
  BarChart3,
  Bot,
  Zap,
  DollarSign,
  Shield,
  Calendar,
  Sliders,
  Rocket,
  AlertTriangle,
  CheckCircle2,
  Building2,
  Quote,
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

// Counter component with animation
function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Animated Section Wrapper
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                <Building2 size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Trusted by 14+ Hospital Systems Nationwide
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Intelligence Layer for{' '}
                <span className="gradient-text-emerald">Hospitalist Recruitment</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Stop guessing. Start deploying. Our AI-powered network matches credentialed hospitalists
                to your facility in days - not months. Real readiness data. Zero agency markup.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={openCalendlyPopup}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold emerald-glow hover:scale-105 transition-all"
                >
                  Book Your Demo
                </button>
                <PortalLink className="px-8 py-4 border border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-all">
                  Explore the Portal →
                </PortalLink>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-sm text-muted-foreground">
                No credit card required · HIPAA compliant · SOC 2 certified
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Problem → Solution */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* The Crisis */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-destructive">
                  <AlertTriangle size={24} />
                  <h2 className="text-2xl md:text-3xl font-bold">The Crisis</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  78% of hospitals face staffing shortages. Agency costs are up 340%. Traditional recruitment takes 90–120 days.
                </p>
                <div className="space-y-4">
                  {[
                    '$180+/hr agency rates eating your margin',
                    '90-day average time-to-fill with no quality guarantee',
                    'Zero visibility into physician readiness or credentials',
                  ].map((pain, idx) => (
                    <div key={idx} className="glass-card rounded-xl p-4 border-l-4 border-l-destructive">
                      <p className="text-sm text-muted-foreground">{pain}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* The Solution */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary">
                  <CheckCircle2 size={24} />
                  <h2 className="text-2xl md:text-3xl font-bold">The Solution</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The Hospitalist Network gives you a pre-vetted, credentialed network with real-time
                  readiness intelligence.
                </p>
                <div className="space-y-4">
                  {[
                    '$42/hr average savings vs. agency staffing',
                    '6.4-day average deployment velocity',
                    'Every physician scored on 30+ clinical & operational dimensions',
                  ].map((solution, idx) => (
                    <div key={idx} className="glass-card rounded-xl p-4 border-l-4 border-l-primary">
                      <p className="text-sm text-foreground">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 124, suffix: '+', label: 'Vetted Hospitalists', sublabel: 'Credentialed & network-verified' },
              { value: 22, suffix: '', label: 'States Covered', sublabel: 'Active multi-state licensure' },
              { value: 6.4, suffix: ' Days', label: 'Avg. Deployment Time', sublabel: 'Inquiry to on-floor' },
              { value: 4.2, suffix: 'M', prefix: '$', label: 'Partner Savings YTD', sublabel: 'vs. agency staffing costs' },
            ].map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text-emerald mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="text-base md:text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">
                PLATFORM CAPABILITIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Staff <span className="gradient-text-emerald">Smarter</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Intelligence Map',
                description:
                  'Visualize every hospitalist on an interactive US map. Search by hospital, filter by credentials, view physicians within your radius.',
              },
              {
                icon: BarChart3,
                title: 'Readiness Profiles',
                description:
                  'Every physician scored across 30+ dimensions: clinical skills, credentials, availability, EMR proficiency, and cultural fit.',
              },
              {
                icon: Bot,
                title: 'AI-Powered Search',
                description:
                  'Ask our AI assistant in plain English: "Find me a board-certified nocturnist licensed in TX with Epic experience." Get instant results.',
              },
              {
                icon: Zap,
                title: 'Rapid Deployment',
                description:
                  'From inquiry to on-floor in 6.4 days average. Pre-credentialed physicians with verified licensure cut your time-to-fill by 90%.',
              },
              {
                icon: DollarSign,
                title: 'Cost Intelligence',
                description:
                  'See projected savings vs. agency rates in real-time. Track your cost avoidance, shift continuity, and HPSI\u2122 stability metrics.',
              },
              {
                icon: Shield,
                title: 'Compliance Built-In',
                description:
                  'HIPAA-compliant data handling, SOC 2 certified infrastructure, RLS-protected database, and full audit trails.',
              },
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all">
                  <feature.icon size={32} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">
                HOW IT WORKS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Go Live in <span className="gradient-text-emerald">3 Simple Steps</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: 1,
                icon: Calendar,
                title: 'Book Your Demo',
                description:
                  "Schedule a 30-minute walkthrough. We'll show you the intelligence map, readiness profiles, and how our network matches to your needs.",
              },
              {
                number: 2,
                icon: Sliders,
                title: 'Define Your Needs',
                description:
                  'Tell us your facility type, shift requirements, credentialing standards, and timeline. Our AI matches you with the right physicians.',
              },
              {
                number: 3,
                icon: Rocket,
                title: 'Deploy & Track',
                description:
                  'Review matched physicians, send inquiries, and track deployment. Average time from request to physician on-floor: 6.4 days.',
              },
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="relative">
                  <div className="glass-card rounded-xl p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <step.icon size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness Tiers */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">
                PHYSICIAN READINESS PROFILE™
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Three Tiers of <span className="gradient-text-emerald">Deployment Readiness</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Every physician in our network is classified into a readiness tier based on 30+ clinical,
                operational, and cultural dimensions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: 'Stabilization Ready', color: 'primary', emoji: '🟢', description: 'Elite physicians for culture resets, site launches, and critical stabilization.', percentage: '18% of network (22 physicians)' },
              { tier: 'Leadership Ready', color: 'gold', emoji: '🟡', description: 'Prepared for mentorship, medical director roles, and program development.', percentage: '34% of network (42 physicians)' },
              { tier: 'Network Ready', color: 'blue', emoji: '🔵', description: 'Vetted hospitalists for high-quality standard coverage.', percentage: '48% of network (60 physicians)' },
            ].map((tier, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className={`glass-card rounded-xl p-6 border-2 ${tier.color === 'primary' ? 'border-primary' : tier.color === 'gold' ? 'border-[hsl(45,93%,58%)]' : 'border-[hsl(210,100%,56%)]'}`}>
                <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{tier.emoji}</span>
                <h3 className={`text-xl font-semibold ${tier.color === 'primary' ? 'text-primary' : tier.color === 'gold' ? 'gradient-text-gold' : 'text-[hsl(210,100%,56%)]'}`}>{tier.tier}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{tier.description}</p>
                <p className="text-xs text-muted-foreground font-semibold">{tier.percentage}</p>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">
                WHAT OUR PARTNERS SAY
              </span>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
              quote:
                "The Hospitalist Network reduced our time-to-fill from 90 days to under a week. The readiness profiles gave us confidence we'd never had with agency staffing.",
              author: 'Dr. Sarah Mitchell',
              role: 'VP of Medical Affairs, Ascend Health System',
              },
              {
              quote:
                'The intelligence map is a game-changer. We can see exactly which physicians are available, credentialed, and ready for our specific needs. Every hiring decision is now backed by real data.',
              author: 'Dr. James Okafor',
              role: 'Chief Medical Officer, Meridian Health',
              },
              {
              quote:
                'We saved $1.2M in our first year by replacing agency contracts with The Hospitalist Network placements. The quality of physicians is consistently higher.',
              author: 'Dr. Linda Carver',
              role: 'Director of Hospital Medicine, Westbrook Medical Center',
              },
            ].map((testimonial, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="glass-card rounded-xl p-6 h-full">
                <Quote size={32} className="text-primary mb-4 opacity-50" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-semibold">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA Banner */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Hospitalist Staffing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 14+ hospital systems already using The Hospitalist Network to deploy better physicians,
              faster and for less.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={openCalendlyPopup}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold emerald-glow hover:scale-105 transition-all"
              >
                Book Your Demo
              </button>
              <PortalLink className="px-8 py-4 border border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-all">
                Open the Portal →
              </PortalLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* For Physicians */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">
                FOR PHYSICIANS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Looking for Your Next <span className="gradient-text-emerald">Hospitalist Opportunity</span>?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join the Hospitalist Network to access curated job postings matched to your credentials,
                licensure, and preferences. See your match score, express interest, and get placed - all
                without the agency middleman.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                'Direct placement \u2014 no agency fees taken from your rate',
                'AI-matched positions based on your full credential profile',
                'Transparent job details: pay, shifts, EMR, location, requirements',
              ].map((benefit, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 text-center">
                  <CheckCircle2 size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <PortalLink className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold emerald-glow hover:scale-105 transition-all">
                Join as a Physician →
              </PortalLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
          </AnimatedSection>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: 'What is the Hospitalist Network?',
                a: 'The Hospitalist Network is a healthcare recruitment intelligence platform that connects hospital systems with pre-vetted, credentialed hospitalist physicians. We provide real-time readiness data, AI-powered matching, and transparent deployment tracking.',
              },
              {
                q: 'How is this different from a staffing agency?',
                a: 'Unlike traditional agencies that add 40-80/hr markups, we operate as a direct network with transparent pricing. We provide comprehensive readiness profiles with 30+ scored dimensions, giving you visibility into physician quality that agencies never offer.',
              },
              {
                q: 'How are physicians vetted?',
                a: 'Every physician undergoes credential verification, multi-state licensure checks, and is scored across 30+ dimensions including clinical skills, EMR proficiency, shift flexibility, and cultural fit. We classify physicians into three readiness tiers.',
              },
              {
                q: 'What does it cost?',
                a: 'We offer tiered pricing based on your facility size and needs. Visit our pricing page or book a demo to discuss your specific requirements and see projected ROI.',
              },
              {
                q: 'How quickly can I deploy a physician?',
                a: 'Our average deployment time is 6.4 days from inquiry to physician on-floor, compared to the industry standard of 90-120 days. This is possible because our network is pre-credentialed and verified.',
              },
              {
                q: 'Is the platform HIPAA compliant?',
                a: 'Yes. We are HIPAA compliant with SOC 2 Type II certification, row-level security in our database, 256-bit encryption, and full audit trails for all data access.',
              },
              {
                q: 'Can physicians apply directly?',
                a: 'Yes! Physicians can create profiles, browse matched job postings, and express interest through our portal. We verify credentials and score readiness before activating profiles.',
              },
              {
                q: 'What EMR systems do your physicians know?',
                a: 'Our network includes physicians proficient in Epic, Cerner, Meditech, Allscripts, Athenahealth, CPSI, and other major EMR systems. You can filter by EMR proficiency in your search.',
              },
            ].map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <Accordion.Item value={`item-${idx}`} className="glass-card rounded-xl overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:text-primary transition-colors group">
                      {faq.q}
                      <span className="text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">
                        ▼
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </Accordion.Content>
                </Accordion.Item>
              </AnimatedSection>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Losing Money to Agency Staffing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See why hospital systems are switching to intelligence-driven hospitalist recruitment.
            </p>
            <button
              onClick={openCalendlyPopup}
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold emerald-glow hover:scale-105 transition-all mb-4"
            >
              Book Your Free Demo →
            </button>
            <p className="text-sm text-muted-foreground">
              Or explore the portal now -{' '}
              <PortalLink className="text-primary hover:underline">
                Open The Hospitalist Network →
              </PortalLink>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
