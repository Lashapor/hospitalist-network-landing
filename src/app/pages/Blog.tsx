import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { Clock } from 'lucide-react';

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

const blogPosts = [
  { slug: 'true-cost-of-agency-staffing-2024', title: 'The True Cost of Agency Hospitalist Staffing in 2024', category: 'Staffing Trends', excerpt: 'Agency rates have increased 340% since 2020. We break down the hidden costs and what hospitals can do about it.', author: 'Dr. Sarah Chen', date: 'March 15, 2024', readTime: '8 min read' },
  { slug: 'imlc-certification-multi-state-licensure', title: 'IMLC Certification: Why Multi-State Licensure Matters More Than Ever', category: 'Compliance', excerpt: 'Understanding the Interstate Medical Licensure Compact and its impact on hospitalist deployment velocity.', author: 'Michael Roberts', date: 'March 10, 2024', readTime: '6 min read' },
  { slug: 'building-readiness-first-recruitment-model', title: 'Building a Readiness-First Recruitment Model', category: 'Recruitment', excerpt: 'How leading health systems are shifting from reactive to proactive physician recruitment using data.', author: 'Jennifer Martinez', date: 'March 5, 2024', readTime: '10 min read' },
  { slug: 'five-metrics-hospital-medicine-directors-should-track', title: '5 Metrics Every Hospital Medicine Director Should Track', category: 'Operations', excerpt: 'From shift continuity to CMI awareness, these are the KPIs that predict hospitalist program success.', author: 'Dr. James Wilson', date: 'February 28, 2024', readTime: '7 min read' },
  { slug: 'from-90-days-to-6-intelligence-driven-recruitment', title: 'From 90 Days to 6: How Intelligence-Driven Recruitment is Changing the Game', category: 'Industry News', excerpt: 'A case study on how pre-credentialing and readiness scoring can collapse time-to-fill by 93%.', author: 'Sarah Thompson', date: 'February 20, 2024', readTime: '9 min read' },
  { slug: 'cdi-training-impact-on-hospitalist-performance', title: 'CDI Training and Its Impact on Hospitalist Performance', category: 'Operations', excerpt: 'Clinical documentation improvement training is becoming a differentiator in physician quality.', author: 'Dr. Lisa Anderson', date: 'February 15, 2024', readTime: '6 min read' },
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Staffing Trends', 'Recruitment', 'Operations', 'Compliance', 'Industry News'];
  const filteredPosts = selectedCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & <span className="gradient-text-emerald">Intelligence</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Expert perspectives on hospitalist staffing, recruitment trends, and operational excellence.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 bg-card/50 sticky top-16 md:top-20 z-40 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary'}`}>{category}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <AnimatedSection key={post.slug} delay={idx * 0.1}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="glass-card rounded-xl overflow-hidden h-full hover:border-primary/50 transition-all">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                      <span className="text-4xl opacity-50">{"\ud83d\udcca"}</span>
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3">{post.category}</div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                            {post.author.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-xs font-semibold">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
