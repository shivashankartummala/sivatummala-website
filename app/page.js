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
        <span className="availability">SFO Bay Area | US Time Zone | Remote</span>
      </header>

      <section className="hero section-grid" id="top">
        <div>
          
          <p className="hero-subtitle">Fractional AI Solutions Architect | Agentic Orchestration Expert</p>
          <p className="hero-copy">
            Founding Architect of Oracle CX Unity. Leading the transition from green-field prototypes to global
            enterprise ecosystems.
          </p>
          <p className="hero-copy">SFO Bay Area | US Time Zone | Remote</p>
          <div className="cta-row">
            <a href="mailto:shivashankar.tummala@gmail.com" className="cta-link">Request Contract Proposal via Email</a>
          </div>
        </div>
      </section>

      <section className="about section-grid" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-title">About</h2>
        <div className="about-content">
          <p className="about-lead">
            Most enterprise AI initiatives are stuck in the &ldquo;Chatbot&rdquo; phase. I help companies move beyond
            simple RAG to build autonomous Agentic solutions that actually execute work.
          </p>
          <p className="about-body">
            As the Founding Architect of Oracle CX Unity, I designed and scaled a global platform for 200+ enterprise
            customers across 24 regions. Today, I offer my 15+ years of systems architecture experience as a Remote
            Design &amp; Build Contractor for organizations ready to deploy production-grade AI.
          </p>

          <h3 className="about-subheading">What I Deliver for Clients</h3>
          <div className="feature-list">
            <article className="feature-item">
              <h3>Agentic Orchestration</h3>
              <p>
                I design and build stateful, multi-step reasoning workflows and Multi-Agent Systems (MAS) using{' '}
                <strong>LangGraph</strong> and <strong>LangChain</strong>.
              </p>
            </article>
            <article className="feature-item">
              <h3>Enterprise-Grade RAG</h3>
              <p>
                I implement advanced retrieval patterns, including <strong>semantic chunking</strong> and{' '}
                <strong>metadata filtering</strong>, to achieve 60% higher servicing efficiency.
              </p>
            </article>
            <article className="feature-item">
              <h3>High-Velocity Implementation</h3>
              <p>
                I accelerate AI solution delivery from weeks to days (up to 80% improvement in release velocity) by
                engineering cloud-agnostic, automated delivery pipelines.
              </p>
            </article>
            <article className="feature-item">
              <h3>Governed LLMOps</h3>
              <p>
                I architect secure, observable, and cost-efficient AI platforms using <strong>KServe</strong>,{' '}
                <strong>ArgoCD</strong>, and <strong>OpenTelemetry</strong> to ensure models are production-ready.
              </p>
            </article>
          </div>

          <h3 className="about-subheading">The Engagement Model</h3>
          <p className="about-body">I specialize in high-impact, remote contracts focused on:</p>
          <div className="feature-list">
            <article className="feature-item">
              <h3>Architectural Blueprints</h3>
              <p>Designing the foundation for scalable Agentic workflows.</p>
            </article>
            <article className="feature-item">
              <h3>Prototype-to-Production Builds</h3>
              <p>
                &ldquo;Wiring together&rdquo; enterprise APIs and multi-agent systems for rapid deployment.
              </p>
            </article>
            <article className="feature-item">
              <h3>AI Governance Audits</h3>
              <p>
                Leveraging insights from my upcoming book,{' '}
                <em>The AI Governance North Star</em>, to architect trust and compliance into Agentic systems.
              </p>
            </article>
          </div>

          <p className="about-bridge">
            I bridge the gap between &ldquo;bleeding-edge&rdquo; AI experimentation and the stable, secure
            infrastructure required by the modern enterprise.
          </p>
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
