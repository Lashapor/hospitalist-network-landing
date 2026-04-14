import { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { Check } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Pricing() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="gradient-text-emerald">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No agency markups. No hidden fees. Just better physicians, faster.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="glass-card rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-sm text-muted-foreground mb-6">For individual facilities</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Up to 5 physician searches/month', 'Basic readiness profiles', 'Email support', 'Standard deployment timeline'].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center px-6 py-3 border border-border rounded-lg font-semibold hover:border-primary hover:text-primary transition-all">Get Started</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-xl p-8 h-full flex flex-col border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-sm text-muted-foreground mb-6">For health systems</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Unlimited physician searches', 'Full readiness profiles + radar charts', 'AI assistant access', 'Priority deployment (48-hr fast-track)', 'Dedicated account manager', 'Cost intelligence dashboard'].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold emerald-glow hover:scale-105 transition-all">Book a Demo</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-sm text-muted-foreground mb-6">For large networks</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Everything in Professional', 'Custom integrations (ATS, HRIS)', 'White-label options', 'On-site training', 'SLA guarantees', 'Priority support'].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center px-6 py-3 border border-border rounded-lg font-semibold hover:border-primary hover:text-primary transition-all">Contact Sales</Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                All plans include: HIPAA compliance · SOC 2 certification · Physician verification · 30+ dimension readiness scoring
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing FAQs</h2>
            </div>
          </AnimatedSection>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              { q: 'What are your billing cycles?', a: 'We offer monthly and annual billing. Annual plans receive a 15% discount. All plans are billed in advance with the option to cancel at any time.' },
              { q: 'Are there any setup fees?', a: 'No setup fees for Starter and Professional plans. Enterprise plans may have one-time implementation fees depending on custom integration requirements.' },
              { q: 'How do you calculate ROI?', a: 'Our cost intelligence dashboard tracks your savings vs. agency rates in real-time. Most partners see ROI within the first 2-3 placements. On average, partners save $42/hr per physician compared to agency staffing.' },
              { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, you can change plans at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.' },
              { q: 'What payment methods do you accept?', a: 'We accept ACH transfers, wire transfers, and major credit cards (Visa, Mastercard, American Express). Enterprise clients can also arrange invoice billing.' },
              { q: 'Is there a contract term requirement?', a: 'Starter and Professional plans have no contract term\u2014cancel anytime. Enterprise plans typically involve 12-month agreements with custom terms available.' },
            ].map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <Accordion.Item value={`item-${idx}`} className="glass-card rounded-xl overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:text-primary transition-colors group">
                      {faq.q}
                      <span className="text-muted-foreground group-data-[state=open]:rotate-180 transition-transform">\u25bc</span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</Accordion.Content>
                </Accordion.Item>
              </AnimatedSection>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which plan?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a demo and we'll help you find the right fit for your organization</p>
            <Link to="/contact" className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold emerald-glow hover:scale-105 transition-all">Book a Demo</Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
