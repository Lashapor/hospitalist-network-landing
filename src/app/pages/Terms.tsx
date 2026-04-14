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

export function Terms() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 15, 2024</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl p-8 md:p-12 space-y-8">
              <Section title="1. Acceptance of Terms">
                <p>By accessing or using Hospitalist Network ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not use the Service.</p>
                <p>These Terms apply to all users of the Service, including hospital systems, health networks, physicians, and any other users (collectively, "Users").</p>
              </Section>

              <Section title="2. Description of Service">
                <p>Hospitalist Network is a SaaS platform that connects hospital systems with hospitalist physicians through AI-powered matching, readiness scoring, and deployment management tools. The Service includes the Hospitalist Physician Stability Index\u2122 (HPSI\u2122) scoring system, intelligence maps, readiness profiles, and related features.</p>
              </Section>

              <Section title="3. User Accounts">
                <p><strong className="text-foreground">Hospital Accounts:</strong> Hospital systems must provide accurate facility information and may only submit legitimate staffing requests. Account credentials must not be shared.</p>
                <p><strong className="text-foreground">Physician Accounts:</strong> Physicians must provide accurate credential information and attest to the accuracy of licensure, board certifications, and experience claims. Misrepresentation is grounds for immediate account termination and may result in legal action.</p>
              </Section>

              <Section title="4. Acceptable Use">
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Misrepresent credentials, qualifications, or organizational affiliations</li>
                  <li>Access the Service through automated means without prior written consent</li>
                  <li>Circumvent any security or access controls</li>
                  <li>Use physician data for purposes other than staffing decisions</li>
                  <li>Solicit physicians outside the platform to bypass network fees</li>
                  <li>Share, sell, or license platform data to third parties</li>
                </ul>
              </Section>

              <Section title="5. HIPAA Compliance">
                <p>Hospital systems using the Service must execute a Business Associate Agreement (BAA) before accessing any protected health information. The BAA governs the handling of PHI in accordance with HIPAA and HITECH Act requirements.</p>
              </Section>

              <Section title="6. Intellectual Property">
                <p>The Service, including the HPSI\u2122 scoring methodology, readiness tier framework, and all related technology, are proprietary to Hospitalist Network, Inc. You may not copy, modify, reverse engineer, or create derivative works based on our proprietary systems.</p>
              </Section>

              <Section title="7. Limitation of Liability">
                <p>Hospitalist Network is a matching and intelligence platform, not a staffing agency. We do not guarantee physician placement or employment outcomes. To the maximum extent permitted by law, Hospitalist Network shall not be liable for indirect, incidental, or consequential damages arising from use of the Service.</p>
              </Section>

              <Section title="8. Termination">
                <p>We may terminate or suspend your account for violation of these Terms, at our sole discretion, with or without notice. Upon termination, your right to access the Service ceases immediately.</p>
              </Section>

              <Section title="9. Governing Law">
                <p>These Terms shall be governed by the laws of the State of New York, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in New York, NY.</p>
              </Section>

              <Section title="10. Contact">
                <p>For questions about these Terms: legal@hospitalistnetwork.com</p>
                <p>Hospitalist Network, Inc.<br />123 Healthcare Plaza, Suite 500<br />New York, NY 10001</p>
              </Section>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
