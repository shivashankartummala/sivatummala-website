'use client';

import { useEffect } from 'react';

export default function HomePage() {
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
        <p className="mono identity">SST</p>
        <nav className="header-links" aria-label="Primary">
          <a href="mailto:shivashankar.tummala@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/shivashankartummala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shivashankartummala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>

      <section className="hero section-grid" id="top">
        <div>
          <h1 className="hero-title">SIVA SANKAR TUMMALA.</h1>
          <p className="hero-subtitle">Fractional AI Solutions Architect | Agentic Orchestration | ProdOps MLOps.</p>
          <p className="hero-copy">
            Founding Architect of Oracle CX Unity. Architecting autonomous multi-agent systems and secure AI governance
            for the global enterprise.
          </p>
          <div className="cta-row">
            <a href="#" className="cta-link">Download Resume PDF</a>
            <span className="availability">Available for Q3/Q4 Contract Engagement.</span>
          </div>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="deep-dive-heading">
        <h2 id="deep-dive-heading" className="section-title">The Agentic Deep Dive</h2>
        <div className="feature-list">
          <article className="feature-item">
            <h3>Autonomous Orchestration</h3>
            <p>
              Architecting stateful, multi-step reasoning using <strong>LangGraph</strong> to automate complex
              operational servicing, achieving a 50% reduction in manual effort.
            </p>
          </article>
          <article className="feature-item">
            <h3>Enterprise Connectivity</h3>
            <p>
              Early adopter of <strong>Model Context Protocol (MCP)</strong> for secure, standardized
              agent-to-API communication.
            </p>
          </article>
          <article className="feature-item">
            <h3>Production RAG</h3>
            <p>
              High-scale implementation of <strong>Semantic Chunking</strong> and <strong>Metadata Filtering</strong>{' '}
              using OCI Vector Search, improving retrieval efficiency by 60%.
            </p>
          </article>
          <article className="feature-item">
            <h3>Local AI Privacy</h3>
            <p>
              Proven expertise in air-gapped AI deployments, including a personal LLM Wiki built on an{' '}
              <strong>M5 MacBook Pro</strong> for secure document management.
            </p>
          </article>
        </div>
      </section>

      <section className="impact section-grid" aria-labelledby="impact-heading">
        <h2 id="impact-heading" className="section-title">Impact</h2>
        <div className="bento-grid">
          <article className="bento-card reveal">
            <p className="metric">80% Delivery Acceleration</p>
            <p>AI-augmented DevSecOps golden-path pipelines.</p>
          </article>
          <article className="bento-card reveal">
            <p className="metric">200+ Enterprise Customers</p>
            <p>Across 24 global regions in OCI-native SaaS ecosystem.</p>
          </article>
          <article className="bento-card reveal">
            <p className="metric">$250K Annual Savings</p>
            <p>Automated right-sizing and multi-cloud governance.</p>
          </article>
          <article className="bento-card reveal">
            <p className="metric">99.99% SLO Compliance</p>
            <p>Mission-critical AI workloads with ML-based anomaly detection.</p>
          </article>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="kb-heading">
        <h2 id="kb-heading" className="section-title">Knowledge Base</h2>
        <div className="feature-list">
          <article className="feature-item">
            <p className="mono">BOOK</p>
            <h3>The AI Governance North Star</h3>
            <p>A blueprint for secure, governed enterprise AI.</p>
            <p><a href="https://lnkd.in/gKUheZer" target="_blank" rel="noopener noreferrer">Read on LinkedIn</a></p>
          </article>
          <article className="feature-item">
            <p className="mono">BOOK</p>
            <h3>The Elastic Brain</h3>
            <p>A technical guide to Kubernetes-Native MLOps.</p>
            <p><a href="https://lnkd.in/gdUKzrP9" target="_blank" rel="noopener noreferrer">Read on LinkedIn</a></p>
          </article>
          <article className="feature-item">
            <p className="mono">TALK</p>
            <h3>Securing End-to-End Tracing in the AI Inference Era</h3>
            <p>Upcoming: AI Infra Summit 2026.</p>
          </article>
          <article className="feature-item">
            <p className="mono">ARTICLES</p>
            <ul className="article-list">
              <li><a href="https://lnkd.in/gRkpdVJG" target="_blank" rel="noopener noreferrer">Stateful Multi-Agent Reasoning with LangGraph</a></li>
              <li><a href="https://lnkd.in/gEqdEdZP" target="_blank" rel="noopener noreferrer">Shift-Left Security: OPA/Rego in AI Pipelines</a></li>
              <li><a href="https://lnkd.in/gDhB4tiQ" target="_blank" rel="noopener noreferrer">Zero-Downtime AI Delivery with ArgoCD</a></li>
            </ul>
          </article>
        </div>
      </section>

      <section className="timeline section-grid" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="section-title">Professional Chronology</h2>
        <div className="timeline-list">
          <article className="timeline-item">
            <p className="timeline-title">2019 – Present | Senior Principal Architect (AI & Platform), Oracle CX Unity</p>
            <ul>
              <li>Leading Zero-to-One SaaS strategy and Multi-Agent Orchestration.</li>
            </ul>
          </article>
          <article className="timeline-item">
            <p className="timeline-title">2016 – 2019 | Principal Software Engineer, Oracle Fusion Apps</p>
            <ul>
              <li>Modernized global provisioning frameworks and event-driven automation.</li>
            </ul>
          </article>
          <article className="timeline-item">
            <p className="timeline-title">2013 – 2016 | Big Data Architect</p>
            <ul>
              <li>Migrated RDBMS to distributed Hadoop/Spark clusters; engineered real-time Kafka pipelines.</li>
            </ul>
          </article>
          <article className="timeline-item">
            <p className="timeline-title">Prior – 2013 | Lead Software Engineer (8 Years Java/J2EE)</p>
            <ul>
              <li>Designed resilient backend services and high-concurrency REST APIs.</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="contact section-grid" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="section-title">Direct Access</h2>
        <p className="footer-line mono">shivashankar.tummala@gmail.com | 262-271-7486</p>
        <p className="footer-line">Certifications: OCI Generative AI Professional & OCI Cloud Architect (2025).</p>
        <p className="footer-line">Academic: MS in Computer Science (4.0 GPA) | MCA | BCA.</p>
      </footer>
    </main>
  );
}
