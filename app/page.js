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
        <p className="mono identity">SIVA SANKAR TUMMALA</p>
        <nav className="header-links" aria-label="Primary">
          <a href="mailto:shivashankar.tummala@gmail.com">Email: shivashankar.tummala@gmail.com</a>
          <a href="https://www.linkedin.com/in/shivashankartummala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shivashankartummala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <span className="availability">Available for Q3/Q4 AI Architectural Contracts.</span>
      </header>

      <section className="hero section-grid" id="top">
        <div>
          <h1 className="hero-title">SIVA SANKAR TUMMALA.</h1>
          <p className="hero-subtitle">Fractional AI Solutions Architect | Agentic Orchestration Expert</p>
          <p className="hero-copy">
            Founding Architect of Oracle CX Unity. Leading the transition from green-field prototypes to global
            enterprise ecosystems.
          </p>
          <p className="hero-copy">Based in Tracy, CA | Global Remote Availability</p>
          <div className="cta-row">
            <a href="mailto:shivashankar.tummala@gmail.com" className="cta-link">Request Contract Proposal via Email</a>
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
              agent-to-API communication across diverse enterprise data silos.
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
            <h3>Inference Observability</h3>
            <p>
              Engineering robust distributed tracing for non-deterministic Agentic workflows to ensure
              enterprise-grade auditability and reliability.
            </p>
          </article>
          <article className="feature-item">
            <h3>Industry Leadership</h3>
            <p>
              Featured Panelist at the <strong>AI Infra Summit 2026</strong> (Santa Clara) |{' '}
              <strong>Compute Track</strong> panel alongside Kentik, presenting on{' '}
              <strong>Securing End-to-End Tracing in the AI Inference Era</strong>.
            </p>
          </article>
        </div>
      </section>

      <section className="impact section-grid" aria-labelledby="impact-heading">
        <h2 id="impact-heading" className="section-title">Agentic Impact Metrics</h2>
        <div className="bento-grid">
          <article className="bento-card reveal">
            <p className="metric">50% Operational Efficiency</p>
            <p>
              Reduced manual document-servicing effort by 50% for a global customer base by architecting autonomous
              Multi-Agent Systems (MAS) using LangGraph for stateful, multi-step reasoning.
            </p>
          </article>
          <article className="bento-card reveal">
            <p className="metric">60% Insight Retrieval Gain</p>
            <p>
              Engineered production-grade RAG platforms utilizing semantic chunking and metadata filtering, reducing
              complex insight retrieval latency from minutes to sub-second responses.
            </p>
          </article>
          <article className="bento-card reveal">
            <p className="metric">80% AI Delivery Acceleration</p>
            <p>
              Accelerated the lifecycle of Agentic workflows by architecting AI-augmented golden-path pipelines,
              reducing regional onboarding and release velocity from weeks to days.
            </p>
          </article>
          <article className="bento-card reveal">
            <p className="metric">100% Deterministic AI Governance</p>
            <p>
              Achieved 100% auditable ML delivery and drift detection for non-deterministic workloads by integrating
              GitOps (ArgoCD) with embedded Policy-as-Code (OPA/Rego) guardrails.
            </p>
          </article>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="kb-heading">
        <h2 id="kb-heading" className="section-title">Knowledge Base</h2>
        <div className="feature-list">
          <article className="feature-item">
            <p className="mono">BOOK</p>
            <h3>AI Governance NorthStar</h3>
            <p>A book on AI Governance.</p>
            <p><a href="https://lnkd.in/gKUheZer" target="_blank" rel="noopener noreferrer">Read on LinkedIn</a></p>
          </article>
          <article className="feature-item">
            <p className="mono">BOOK</p>
            <h3>The Elastic Brain.</h3>
            <p>A book on Kubernates autoscaling for ML based applications.</p>
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
              <li><a href="https://lnkd.in/gEqdEdZP" target="_blank" rel="noopener noreferrer">Advanced Context Engineering for Agentic RAG</a></li>
              <li><a href="https://lnkd.in/gDhB4tiQ" target="_blank" rel="noopener noreferrer">Agentic Orchestration Patterns</a></li>
              <li><a href="https://lnkd.in/gRkpdVJG" target="_blank" rel="noopener noreferrer">Multi-Agent Architecture Design Patterns</a></li>
              <li><a href="https://lnkd.in/gXwrqDxw" target="_blank" rel="noopener noreferrer">Building Resilient Agentic Workflows with AWS Bedrock</a></li>
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
        <h2 id="contact-heading" className="section-title">SIVA SANKAR TUMMALA</h2>
        <p className="footer-line mono">shivashankar.tummala@gmail.com</p>
        <p className="footer-line">
          <a href="https://www.linkedin.com/in/shivashankartummala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' | '}
          <a href="https://github.com/shivashankartummala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <p className="footer-line">Credentials: OCI Certified Cloud Architect & Generative AI Professional (2025)</p>
        <p className="footer-line">Academic: MS in Computer Science (4.0 GPA) | MCA | BCA</p>
      </footer>
    </main>
  );
}
