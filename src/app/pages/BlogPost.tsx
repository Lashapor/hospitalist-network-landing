import { useRef } from 'react';
import { Link, useParams } from 'react-router';
import { motion, useInView } from 'motion/react';
import { Clock, ArrowLeft } from 'lucide-react';

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

export function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen">
      <div className="pt-24 md:pt-32 pb-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="h-96 glass-card rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
            <span className="text-8xl opacity-50">{"\ud83d\udcca"}</span>
          </div>
        </div>
      </div>

      <article className="pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">Staffing Trends</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The True Cost of Agency Hospitalist Staffing in 2024</h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">SC</div>
                  <div>
                    <p className="font-semibold text-foreground">Dr. Sarah Chen</p>
                    <p>March 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-1"><Clock size={16} /><span>8 min read</span></div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <div className="glass-card rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Agency hospitalist staffing has become a necessary evil for many hospital systems, but the true costs extend far beyond the hourly rate. In 2024, we're seeing agency markups of $40-80/hr above direct-hire equivalents, representing a 340% increase since 2020.</p>
                <p className="text-muted-foreground leading-relaxed">This article breaks down the complete economic impact of agency staffing and explores alternative models that are emerging in the market.</p>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-12">The Hidden Costs</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">When hospitals calculate the cost of agency staffing, they often focus only on the hourly rate. However, the true cost includes:</p>
              <ul className="space-y-3 mb-8">
                <li className="text-muted-foreground"><strong className="text-foreground">Agency fees:</strong> Typically 40-50% markup on base physician rate</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Credentialing delays:</strong> Average 45-60 days, requiring interim coverage</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Continuity of care impact:</strong> Rotating agency physicians reduce patient satisfaction scores by 12-18%</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Administrative overhead:</strong> HR and medical staff office time managing agency contracts</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-12">Case Study: Mid-Sized Community Hospital</h2>
              <div className="glass-card rounded-xl p-8 mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">A 250-bed community hospital in the Midwest was spending $2.8M annually on agency hospitalists (8 FTE equivalents at $175/hr average). After transitioning to a direct network model with readiness-scored physicians, they:</p>
                <ul className="space-y-2 mb-4">
                  <li className="text-muted-foreground">{"\u2705"} Reduced per-physician cost to $133/hr (24% savings)</li>
                  <li className="text-muted-foreground">{"\u2705"} Cut deployment time from 67 days to 9 days</li>
                  <li className="text-muted-foreground">{"\u2705"} Improved HPSI scores by 15 points</li>
                  <li className="text-muted-foreground">{"\u2705"} Annual savings: $1.1M</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-12">The Path Forward</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Progressive hospital systems are shifting to intelligence-driven recruitment models that provide the flexibility of agency staffing without the markup. Key characteristics include:</p>
              <ul className="space-y-3 mb-8">
                <li className="text-muted-foreground">Pre-credentialed physician networks</li>
                <li className="text-muted-foreground">Transparent readiness scoring (clinical skills, availability, credentials)</li>
                <li className="text-muted-foreground">Direct relationships with physicians (no middleman)</li>
                <li className="text-muted-foreground">Data-driven matching algorithms</li>
              </ul>

              <div className="glass-card rounded-xl p-8 bg-primary/10 border-primary/30 mt-12">
                <h3 className="text-xl font-bold mb-3">Want to see this intelligence in action?</h3>
                <p className="text-muted-foreground mb-4">Hospitalist Network provides the infrastructure for hospitals to access pre-vetted physicians with transparent readiness data\u2014cutting costs and deployment time.</p>
                <button onClick={openCalendlyPopup} className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold emerald-glow-hover hover:scale-105 transition-all">Book a Demo →</button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="glass-card rounded-xl p-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-semibold text-primary flex-shrink-0">SC</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Dr. Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground mb-2">Chief Medical Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Dr. Chen is a board-certified hospitalist with 15+ years of experience in hospital medicine operations and quality improvement. She specializes in staffing optimization and physician workforce analytics.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Link key={i} to="/blog" className="glass-card rounded-xl p-4 hover:border-primary/50 transition-all">
                    <div className="h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-3xl opacity-50">{"\ud83d\udcc4"}</span>
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">Related Article Title {i}</h4>
                    <p className="text-xs text-muted-foreground">5 min read</p>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </div>
  );
}
