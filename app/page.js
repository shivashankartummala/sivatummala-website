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
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      <header className="site-header">
        <p className="mono identity">SIVA SANKAR TUMMALA</p>
        <nav className="header-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#deep-dive">Work</a>
          <a href="#impact">Impact</a>
          <a href="#kb">Writing</a>
          <a href="mailto:shivashankar.tummala@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/shivashankartummala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shivashankartummala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <span className="availability">Available · Remote</span>
      </header>

      <div className="hero-impact-wrapper">
        <section className="hero section-grid" id="top">
          <div className="hero-inner">
            <div className="hero-name-section">
              <img src="/images/sivatummala_monochrome.jpg" alt="Siva Sankar Tummala" className="hero-photo" />
              <h2 className="hero-name">Siva Sankar<br />Tummala</h2>
            </div>
            <p className="hero-subtitle">Fractional AI Solutions Architect · Agentic Orchestration Expert</p>
            <p className="hero-copy">
              Architecting autonomous multi-agent systems and secure inference pipelines that bridge the gap between AI experimentation and enterprise-grade production.
            </p>
            <div className="cta-row">
              <a href="mailto:shivashankar.tummala@gmail.com" className="cta-link">Request Contract Proposal</a>
              <span className="hero-location mono">SFO Bay Area · US Time Zone · Remote</span>
            </div>
          </div>
        </section>

        <section className="impact" aria-labelledby="impact-heading" id="impact">
          <div className="impact-content">
            <h2 id="impact-heading" className="section-title">Agentic Impact Metrics</h2>
            <div className="bento-grid">
              <article className="bento-card reveal">
                <p className="metric">50%</p>
                <p className="metric-label">Operational Efficiency</p>
                <p>
                  Reduced manual document-servicing effort by architecting autonomous Multi-Agent Systems (MAS)
                  using LangGraph for stateful, multi-step reasoning.
                </p>
              </article>
              <article className="bento-card reveal">
                <p className="metric">60%</p>
                <p className="metric-label">Insight Retrieval Gain</p>
                <p>
                  Production-grade RAG with semantic chunking and metadata filtering — retrieval latency from
                  minutes to sub-second responses.
                </p>
              </article>
              <article className="bento-card reveal">
                <p className="metric">80%</p>
                <p className="metric-label">AI Delivery Acceleration</p>
                <p>
                  AI-augmented golden-path pipelines compressing regional onboarding and release velocity
                  from weeks to days.
                </p>
              </article>
              <article className="bento-card reveal">
                <p className="metric">100%</p>
                <p className="metric-label">Deterministic AI Governance</p>
                <p>
                  Auditable ML delivery and drift detection via GitOps (ArgoCD) with embedded
                  Policy-as-Code (OPA/Rego) guardrails.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>

      <section className="about section-grid" aria-labelledby="about-heading" id="about">
        <div className="section-header">
          <h2 id="about-heading" className="section-title">About</h2>
        </div>
        <div className="about-layout">
          <div className="about-intro">
            <p className="about-lead">
              Most enterprise AI initiatives are stuck in the &ldquo;Chatbot&rdquo; phase. I help companies move beyond
              simple RAG to build autonomous Agentic solutions that actually execute work.
            </p>
            <p className="about-body">
              As the Founding Architect of Oracle CX Unity, I designed and scaled a global platform for 200+ enterprise
              customers across 24 regions. Today, I offer my 15+ years of systems architecture experience as a Remote
              Design &amp; Build Contractor for organizations ready to deploy production-grade AI.
            </p>
            <p className="about-bridge">
              I bridge the gap between &ldquo;bleeding-edge&rdquo; AI experimentation and the stable, secure
              infrastructure required by the modern enterprise.
            </p>
          </div>

          <div className="about-services">
            <h3 className="about-subheading">What I Deliver</h3>
            <div className="card-grid-2">
              <article className="feature-item reveal">
                <h4>Agentic Orchestration</h4>
                <p>
                  Stateful, multi-step reasoning workflows and Multi-Agent Systems (MAS) using{' '}
                  <strong>LangGraph</strong> and <strong>LangChain</strong>.
                </p>
              </article>
              <article className="feature-item reveal">
                <h4>Enterprise-Grade RAG</h4>
                <p>
                  Advanced retrieval with <strong>semantic chunking</strong> and <strong>metadata filtering</strong>{' '}
                  — 60% higher servicing efficiency.
                </p>
              </article>
              <article className="feature-item reveal">
                <h4>High-Velocity Delivery</h4>
                <p>
                  Cloud-agnostic, automated pipelines that compress delivery from weeks to days —{' '}
                  up to 80% improvement in release velocity.
                </p>
              </article>
              <article className="feature-item reveal">
                <h4>Governed LLMOps</h4>
                <p>
                  Secure, observable, cost-efficient AI platforms using <strong>KServe</strong>,{' '}
                  <strong>ArgoCD</strong>, and <strong>OpenTelemetry</strong>.
                </p>
              </article>
            </div>

            <h3 className="about-subheading">Engagement Model</h3>
            <div className="card-grid-3">
              <article className="feature-item reveal">
                <h4>Fractional Leadership (Retainer)</h4>
                <p>Long-term, part-time architectural oversight and AI strategy for organizations scaling their Agentic ecosystem.</p>
              </article>
              <article className="feature-item reveal">
                <h4>Project-Based Execution (SOW)</h4>
                <p>End-to-end "Zero-to-One" delivery—taking a prototype to a production-grade Agentic system in a defined timeline.</p>
              </article>
              <article className="feature-item reveal">
                <h4>Strategic Advisory & Audits</h4>
                <p>Short-term, high-impact engagements focused on AI Governance, Inference Tracing, and Infrastructure right-sizing.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="deep-dive-heading" id="deep-dive">
        <h2 id="deep-dive-heading" className="section-title">The Agentic Deep Dive</h2>
        <div className="card-grid-2">
          <article className="feature-item">
            <h3>Autonomous Orchestration</h3>
            <p>
              Architecting stateful, multi-step reasoning using <strong>LangGraph</strong> to automate complex
              operational servicing — 50% reduction in manual effort.
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
              High-scale <strong>Semantic Chunking</strong> and <strong>Metadata Filtering</strong>{' '}
              via OCI Vector Search — 60% retrieval efficiency improvement.
            </p>
          </article>
          <article className="feature-item">
            <h3>Inference Observability</h3>
            <p>
              Distributed tracing for non-deterministic Agentic workflows — enterprise-grade auditability
              and reliability at scale.
            </p>
          </article>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="devsecops-heading" id="devsecops">
        <h2 id="devsecops-heading" className="section-title">DevSecOps Architectural Foundation</h2>
        <div className="card-grid-2">
          <article className="feature-item">
            <h3>Scalable AI Orchestration (Kubernetes)</h3>
            <p>
              Architected mission-critical AI workloads on Oracle Kubernetes Engine (OKE) and AWS EKS, utilizing <strong>GitOps-driven delivery via ArgoCD</strong> to ensure zero-downtime deployments and <strong>99.99% SLO compliance</strong> for global clusters.
            </p>
          </article>
          <article className="feature-item">
            <h3>Immutable Infrastructure (Terraform)</h3>
            <p>
              Engineered reusable, cloud-agnostic <strong>Terraform modules</strong> to standardize environment provisioning across OCI, AWS, and Azure—reducing regional AI infrastructure onboarding from weeks to <strong>under 60 minutes</strong>.
            </p>
          </article>
          <article className="feature-item">
            <h3>Multi-Cloud AWS Integration</h3>
            <p>
              Designed resilient hybrid-cloud architectures leveraging <strong>AWS EKS</strong> for distributed inference and high-performance storage, ensuring cost-optimized compute and <strong>secure data residency</strong> for global Agentic systems.
            </p>
          </article>
          <article className="feature-item">
            <h3>Policy-as-Code & Automated Governance</h3>
            <p>
              Orchestrated "shift-left" security gates by embedding <strong>OPA</strong> and automated scanning directly into AI delivery pipelines. This approach ensures <strong>100% auditable governance</strong> for non-deterministic Agentic workflows and prevents configuration drift across global, multi-region environments.
            </p>
          </article>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="kb-heading" id="kb">
        <h2 id="kb-heading" className="section-title">Knowledge Base</h2>
        <div className="card-grid-3 kb-top">
          <article className="feature-item">
            <p className="mono kb-type">BOOK</p>
            <h3>AI Governance NorthStar</h3>
            <p>A practitioner&rsquo;s guide to governance in enterprise AI systems.</p>
            <p><a href="https://lnkd.in/gKUheZer" target="_blank" rel="noopener noreferrer">Read on LinkedIn →</a></p>
          </article>
          <article className="feature-item">
            <p className="mono kb-type">BOOK</p>
            <h3>The Elastic Brain</h3>
            <p>Kubernetes autoscaling strategies for ML-based applications.</p>
            <p><a href="https://lnkd.in/gdUKzrP9" target="_blank" rel="noopener noreferrer">Read on LinkedIn →</a></p>
          </article>
        </div>
        <div className="feature-item kb-articles">
          <p className="mono kb-type">ARTICLES</p>
          <ul className="article-list">
            <li><a href="https://lnkd.in/gEqdEdZP" target="_blank" rel="noopener noreferrer">Advanced Context Engineering for Agentic RAG</a></li>
            <li><a href="https://lnkd.in/gDhB4tiQ" target="_blank" rel="noopener noreferrer">Agentic Orchestration Patterns</a></li>
            <li><a href="https://lnkd.in/gRkpdVJG" target="_blank" rel="noopener noreferrer">Multi-Agent Architecture Design Patterns</a></li>
            <li><a href="https://lnkd.in/gXwrqDxw" target="_blank" rel="noopener noreferrer">Building Resilient Agentic Workflows with AWS Bedrock</a></li>
          </ul>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="certs-heading" id="certs">
        <h2 id="certs-heading" className="section-title">Certifications & Credentials</h2>
        <div className="certs-grid">
          <article className="cert-card">
            <a href="https://www.credly.com/badges/a895575f-49ed-4f1d-a031-893165637768/linked_in_profile" target="_blank" rel="noopener noreferrer" className="cert-link">
              <img src="/images/aws-certified-solutions-architect-professional.png" alt="AWS Certified Solutions Architect – Professional" className="cert-badge" />
              <h3>AWS Certified Solutions Architect – Professional</h3>
            </a>
          </article>
          <article className="cert-card">
            <a href="https://www.credly.com/badges/0cefb1ad-b22d-4e89-8bc6-9b55055ba1c3" target="_blank" rel="noopener noreferrer" className="cert-link">
              <img src="/images/OCI-Certified-GenAI-Professional.png" alt="OCI Certified Generative AI Professional" className="cert-badge" />
              <h3>OCI Certified Generative AI Professional</h3>
            </a>
          </article>
        </div>
      </section>

      <section className="timeline section-grid" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="section-title">Professional Chronology</h2>
        <div className="timeline-list">
          <article className="timeline-item">
            <p className="timeline-period mono">2019 – Present</p>
            <p className="timeline-title">Senior Principal Architect (AI &amp; Platform) · Oracle CX Unity</p>
            <p>Leading Zero-to-One SaaS strategy and Multi-Agent Orchestration at global scale.</p>
          </article>
          <article className="timeline-item">
            <p className="timeline-period mono">2016 – 2019</p>
            <p className="timeline-title">Principal Software Engineer · Oracle Fusion Apps</p>
            <p>Modernized global provisioning frameworks and event-driven automation.</p>
          </article>
          <article className="timeline-item">
            <p className="timeline-period mono">2013 – 2016</p>
            <p className="timeline-title">Big Data Architect</p>
            <p>Migrated RDBMS to distributed Hadoop/Spark clusters; engineered real-time Kafka pipelines.</p>
          </article>
          <article className="timeline-item">
            <p className="timeline-period mono">Prior – 2013</p>
            <p className="timeline-title">Lead Software Engineer · 8 Years Java/J2EE</p>
            <p>Designed resilient backend services and high-concurrency REST APIs.</p>
          </article>
        </div>
      </section>

      <footer className="contact section-grid" aria-labelledby="contact-heading">
        <div className="footer-layout">
          <div className="footer-links">
            <a href="mailto:shivashankar.tummala@gmail.com" className="cta-link">Request Contract Proposal</a>
            <p className="footer-line mono">shivashankar.tummala@gmail.com</p>
            <p className="footer-line">
              <a href="https://www.linkedin.com/in/shivashankartummala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {' · '}
              <a href="https://github.com/shivashankartummala" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
