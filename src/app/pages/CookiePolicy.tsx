import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

export function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: March 15, 2024</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl p-8 md:p-12 space-y-8">
              <Section title="What Are Cookies?">
                <p>Cookies are small text files placed on your device when you visit our website. We use cookies to enhance your experience, analyze site traffic, and support our marketing efforts.</p>
              </Section>

              <Section title="Types of Cookies We Use">
                <p><strong className="text-foreground">Strictly Necessary Cookies:</strong> Essential for the website to function. They enable core features like authentication, security, and session management. These cannot be disabled.</p>
                <p><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous data. We use this to improve our service.</p>
                <p><strong className="text-foreground">Functional Cookies:</strong> Remember your preferences (e.g., cookie consent choices, UI settings) to enhance your experience.</p>
                <p><strong className="text-foreground">Marketing Cookies:</strong> Used to show you relevant advertisements. We require your consent before setting these cookies.</p>
              </Section>

              <Section title="Specific Cookies">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 font-semibold text-foreground">Cookie</th>
                      <th className="text-left py-2 font-semibold text-foreground">Type</th>
                      <th className="text-left py-2 font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {[
                      { name: 'cookie-consent', type: 'Necessary', duration: '1 year' },
                      { name: '_hn_session', type: 'Necessary', duration: 'Session' },
                      { name: '_hn_analytics', type: 'Analytics', duration: '2 years' },
                      { name: '_ga', type: 'Analytics', duration: '2 years' },
                    ].map((cookie, idx) => (
                      <tr key={idx} className="border-b border-border/30">
                        <td className="py-2 font-mono text-xs">{cookie.name}</td>
                        <td className="py-2">{cookie.type}</td>
                        <td className="py-2">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Section>

              <Section title="Your Choices">
                <p>You can manage your cookie preferences through the cookie banner on our website. You can also disable cookies through your browser settings, though this may affect site functionality.</p>
                <p>To opt out of analytics tracking, you can visit our cookie preference center or use browser-level opt-outs for specific tools.</p>
              </Section>

              <Section title="Contact Us">
                <p>For cookie-related inquiries: privacy@hospitalistnetwork.com</p>
              </Section>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
