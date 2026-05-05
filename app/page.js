'use client';

import { useEffect } from 'react';

export default function HomePage() {
  // Trigger commit for Cloudflare redeploy verification.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      <header className="site-header">
        <p className="mono identity">SIVA SANKAR TUMMALA</p>
        <nav className="header-links mono" aria-label="Primary">
          <a href="mailto:shivashankar.tummala@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/shivashankartummala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shivashankartummala" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#">Download Resume PDF</a>
        </nav>
        <p className="availability">Available for Q3/Q4 AI Architectural Contracts.</p>
      </header>

      <section className="hero section-grid" id="top">
        <div>
          <p className="eyebrow mono">Founding Architect Profile</p>
          <h1 className="hero-title">Fractional AI Solutions Architect.</h1>
          <p className="hero-subtitle">Agentic Orchestration | ProdOps MLOps | LLM Governance.</p>
          <p className="hero-copy">
            Founding Architect of Oracle CX Unity. From green-field prototype to 200+ global enterprise customers.
          </p>
        </div>
        <div className="hero-right">
          <div className="hero-metadata">
            <p className="mono">LOCATION</p>
            <p>Based in SFO Bay Area, CA | US Timezones Remote Availability.</p>
          </div>
        </div>
      </section>

      <section className="impact section-grid" aria-labelledby="impact-heading">
        <h2 id="impact-heading" className="section-title">Performance Metrics</h2>
        <div className="bento-grid">
          <article className="bento-card reveal"><p className="metric">80% Velocity Increase</p><p>Architecting AI-augmented DevSecOps "golden-path" pipelines.</p></article>
          <article className="bento-card reveal"><p className="metric">24 Global Regions</p><p>End-to-end strategy for Oracle's OCI-native SaaS ecosystem.</p></article>
          <article className="bento-card reveal"><p className="metric">$250K Annual Savings</p><p>Multi-cloud FinOps and automated right-sizing.</p></article>
          <article className="bento-card reveal"><p className="metric">99.99% SLO Compliance</p><p>SRE-driven observability with ML-based anomaly detection.</p></article>
        </div>
      </section>

      <section className="ip section-grid" aria-labelledby="kb-heading">
        <h2 id="kb-heading" className="section-title">Knowledge Base: Books & Articles</h2>
        <div className="feature-list">
          <article className="feature-item">
            <p className="mono">BOOK</p>
            <h3>The AI Governance North Star</h3>
            <p>Blueprint for secure, governed Agentic AI in the enterprise.</p>
            <p><a href="https://lnkd.in/gKUheZer" target="_blank" rel="noopener noreferrer">Read on LinkedIn</a></p>
          </article>
          <article className="feature-item">
            <p className="mono">BOOK</p>
            <h3>The Elastic Brain</h3>
            <p>Mastering Kubernetes-native MLOps and architectural scaling.</p>
            <p><a href="https://lnkd.in/gdUKzrP9" target="_blank" rel="noopener noreferrer">Read on LinkedIn</a></p>
          </article>
          <article className="feature-item">
            <p className="mono">LINKEDIN ARTICLE SERIES</p>
            <ul className="article-list">
              <li><a href="https://lnkd.in/gEqdEdZP" target="_blank" rel="noopener noreferrer">Advanced Context Engineering for Agentic RAG.</a></li>
              <li><a href="https://lnkd.in/gDhB4tiQ" target="_blank" rel="noopener noreferrer">Agentic Orchestration Patterns.</a></li>
              <li><a href="https://lnkd.in/gRkpdVJG" target="_blank" rel="noopener noreferrer">Multi-Agent Architecture Design Patterns.</a></li>
              <li><a href="https://lnkd.in/gXwrqDxw" target="_blank" rel="noopener noreferrer">Building Resilient Agentic Workflows with AWS Bedrock.</a></li>
            </ul>
          </article>
        </div>
      </section>

      <section className="timeline section-grid" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="section-title">Professional Chronology</h2>
        <div className="timeline-list">
          <article className="timeline-item"><p className="timeline-title">2019 – Present | Senior Principal Architect, Oracle CX Unity</p><ul><li>Founding Architect leading "Zero-to-One" SaaS evolution.</li><li>Engineered Multi-Agent Systems reducing manual effort by 50%.</li></ul></article>
          <article className="timeline-item"><p className="timeline-title">2016 – 2019 | Principal Software Engineer, Oracle Fusion Apps</p><ul><li>Modernized global provisioning and patching cycles for Fusion Apps suite.</li><li>Eliminated operational risks through automated drift detection and rollback safeguards.</li></ul></article>
          <article className="timeline-item"><p className="timeline-title">2013 – 2016 | Big Data Architect</p><ul><li>Migrated legacy RDBMS to distributed Hadoop and Spark clusters for global data feeds.</li><li>Specialized in high-velocity streaming pipelines using Kafka and Spark Streaming.</li></ul></article>
          <article className="timeline-item"><p className="timeline-title">Prior – 2013 | Lead Software Engineer (8 Years Java/J2EE)</p><ul><li>Designed resilient backend services and REST APIs for global application suites.</li></ul></article>
        </div>
      </section>

      <footer className="contact section-grid" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="section-title">Direct Access</h2>
        <p className="footer-line mono">shivashankar.tummala@gmail.com | 262-271-7486</p>
        <p className="footer-line">Credentials: OCI Certified Cloud Architect & Generative AI Professional (2025).</p>
        <p className="footer-line">Education: MS in Computer Science (4.0 GPA) | MCA | BCA.</p>
      </footer>
    </main>
  );
}
