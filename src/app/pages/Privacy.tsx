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

export function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 15, 2024</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl p-8 md:p-12 space-y-8">
              <Section title="1. Introduction">
                <p>Hospitalist Network, Inc. ("Hospitalist Network," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at hospitalistnetwork.com and related services (collectively, the "Service").</p>
                <p>By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. This policy complies with the Health Insurance Portability and Accountability Act (HIPAA) and applicable state privacy laws.</p>
              </Section>

              <Section title="2. Information We Collect">
                <p><strong className="text-foreground">For Hospital Systems:</strong> Organization name, contact information, facility details, staffing requirements, hiring preferences, and usage data.</p>
                <p><strong className="text-foreground">For Physicians:</strong> Professional credentials, medical licenses, board certifications, employment history, availability preferences, EMR proficiency, and professional references.</p>
                <p><strong className="text-foreground">Automatically Collected:</strong> IP address, browser type, device information, pages visited, time spent on pages, and referring URLs.</p>
              </Section>

              <Section title="3. How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain the Service</li>
                  <li>Match hospital systems with qualified physicians</li>
                  <li>Calculate and display Hospitalist Physician Stability Index™ (HPSI™) scores</li>
                  <li>Process credential verification and readiness assessments</li>
                  <li>Send transactional communications and service updates</li>
                  <li>Improve and personalize the Service</li>
                  <li>Comply with legal obligations, including HIPAA</li>
                </ul>
              </Section>

              <Section title="4. HIPAA Compliance">
                <p>The Hospitalist Network operates as a Business Associate under HIPAA. We maintain appropriate administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of protected health information (PHI).</p>
                <p>We do not sell, share, or disclose PHI to third parties except as required by law or as permitted under our Business Associate Agreements with covered entities.</p>
              </Section>

              <Section title="5. Data Security">
                <p>We implement industry-standard security measures including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SOC 2 Type II certified infrastructure</li>
                  <li>256-bit AES encryption for data at rest and TLS 1.3 in transit</li>
                  <li>Row-level security (RLS) for database access control</li>
                  <li>Multi-factor authentication requirements</li>
                  <li>Regular penetration testing and security audits</li>
                </ul>
              </Section>

              <Section title="6. Data Retention">
                <p>We retain your information for as long as your account is active or as needed to provide the Service. You may request deletion of your account and personal data at any time by contacting privacy@hospitalistnetwork.com. Some information may be retained for legal compliance purposes.</p>
              </Section>

              <Section title="7. Your Rights">
                <p>Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at privacy@hospitalistnetwork.com.</p>
              </Section>

              <Section title="8. Contact Us">
                <p>For privacy-related inquiries: privacy@hospitalistnetwork.com</p>
                <p>Hospitalist Network, Inc.<br />123 Healthcare Plaza, Suite 500<br />New York, NY 10001</p>
              </Section>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
