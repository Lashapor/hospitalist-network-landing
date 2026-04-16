import { useRef } from 'react';
import { Link } from 'react-router';
import { openCalendlyPopup } from '../components/BookDemo';
import { motion, useInView } from 'motion/react';
import { Target, TrendingUp, Zap, Users } from 'lucide-react';

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

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text-emerald">Hospitalist Network</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're building the intelligence layer between hospitals and hospitalist physicians -
              replacing opaque agency models with transparent, data-driven recruitment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded by hospitalist medicine professionals who experienced the staffing crisis firsthand,
                we saw a broken model: hospitals overpay agencies who provide no quality data, while
                physicians are treated as commodities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our fix: a network of pre-vetted physicians with real readiness intelligence. We empower
                hospitals to make data-driven hiring decisions and give physicians direct access to
                opportunities without agency middlemen taking cuts from their rates.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we build
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Clinical Excellence',
                description: 'Every physician scored on 30+ dimensions. Quality is never negotiable.',
              },
              {
                icon: TrendingUp,
                title: 'Radical Transparency',
                description: 'Real data, no hidden markups, full audit trails. You deserve to know.',
              },
              {
                icon: Zap,
                title: 'Speed Without Compromise',
                description: "6.4-day deployment doesn't mean cutting corners. It means being prepared.",
              },
              {
                icon: Users,
                title: 'Partner-First',
                description: 'Your success metrics are our success metrics. We win when you win.',
              },
            ].map((value, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card rounded-xl p-6 h-full">
                  <value.icon size={32} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Over 45 years of combined experience in healthcare advisory and consulting
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Shiv P. Kalan, MD, MBA, CPE, FACP',
                initials: 'SK',
                role: 'Founder, President & CEO',
                bio: 'Board-certified hospitalist with 12 years of frontline experience, leading HPSI assessments and driving data-driven program optimization as a former CMO.',
              },
              {
                name: 'Veevy Nguyen',
                initials: 'VN',
                role: 'VP of Client Relations & Physician Partnerships',
                bio: 'Architects the trust-based relationships between hospital clients and the physician community, overseeing retention and long-term professional growth.',
              },
              {
                name: 'Lisa T. Miller, MHA',
                initials: 'LM',
                role: 'Executive Advisor & Head of Business Development',
                bio: '25 years of hospital operations experience, bridging network capabilities to C-suite executives and leading strategic partnership development.',
              },
              {
                name: 'Mylan Em',
                initials: 'ME',
                role: 'Director of Credentialing & Licensing',
                bio: 'Oversees the compliance and credentialing infrastructure enabling rapid, multi-state physician deployment that outpaces traditional staffing agencies.',
              },
            ].map((member, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the hospital systems transforming their staffing strategy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openCalendlyPopup}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold emerald-glow hover:scale-105 transition-all"
              >
                Book a Demo
              </button>
              <a
                href="https://hospitalist-network.vercel.app"
                className="px-8 py-4 border border-border rounded-xl font-semibold hover:border-primary hover:text-primary transition-all"
              >
                Explore the Portal →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
