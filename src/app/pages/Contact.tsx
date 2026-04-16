import { useRef, useState } from 'react';
import { openCalendlyPopup } from '../components/BookDemo';
import { motion, useInView } from 'motion/react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text-emerald">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your hospitalist staffing? Let's talk.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold mb-2">Hospital/Organization *</label>
                    <input type="text" id="organization" name="organization" required value={formData.organization} onChange={handleChange} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold mb-2">Role *</label>
                    <select id="role" name="role" required value={formData.role} onChange={handleChange} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                      <option value="">Select a role</option>
                      <option value="hr-manager">HR Manager</option>
                      <option value="medical-director">Medical Director</option>
                      <option value="administrator">Administrator</option>
                      <option value="physician">Physician</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold emerald-glow-hover hover:scale-105 transition-all">Send Message</button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg"><Mail size={24} className="text-primary" /></div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@hospitalistnetwork.com</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg"><Phone size={24} className="text-primary" /></div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                      <p className="text-xs text-muted-foreground mt-2">For urgent staffing needs, call our deployment hotline: (555) 999-8888</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg"><Clock size={24} className="text-primary" /></div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday \u2013 Friday</p>
                      <p className="text-sm text-muted-foreground">8:00 AM \u2013 6:00 PM ET</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg"><MapPin size={24} className="text-primary" /></div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">123 Healthcare Plaza</p>
                      <p className="text-sm text-muted-foreground">Suite 500</p>
                      <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6 bg-primary/10 border-primary/30">
                  <p className="text-sm text-center">
                    Prefer a live walkthrough?{' '}
                    <button onClick={openCalendlyPopup} className="text-primary font-semibold hover:underline">Book a Demo →</button>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
