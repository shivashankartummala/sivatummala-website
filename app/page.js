'use client';

import { useEffect, useMemo, useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [availability, setAvailability] = useState(false);
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const targets = document.querySelectorAll('.parallax-target');
      targets.forEach((el) => {
        el.style.transform = `translateY(${y * -0.06}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic');
    const handlers = [];

    buttons.forEach((btn) => {
      const move = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.2}px)`;
      };
      const leave = () => {
        btn.style.transform = 'translate(0, 0)';
      };

      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      handlers.push({ btn, move, leave });
    });

    return () => {
      handlers.forEach(({ btn, move, leave }) => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  const emailValidity = useMemo(() => {
    if (!email) return { state: '', text: 'Enter a valid business email.' };
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return ok
      ? { state: 'valid', text: 'Email format looks valid.' }
      : { state: 'invalid', text: 'Invalid email format.' };
  }, [email]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.reportValidity()) return;
    if (emailValidity.state === 'invalid') return;

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.availability = availability ? 'Yes' : 'No';

    setFormState({ status: 'loading', message: 'Submitting inquiry...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry.');

      form.reset();
      setEmail('');
      setAvailability(false);
      setFormState({ status: 'success', message: 'Inquiry submitted successfully.' });
    } catch (err) {
      setFormState({ status: 'error', message: err.message || 'Submission failed.' });
    }
  }

  return (
    <main className="page">
      <section className="hero section-grid" id="top">
        <div className="hero-left">
          <p className="eyebrow mono">Principal AI Solutions Architect</p>
          <h1 className="hero-title parallax-target">SIVA SANKAR TUMMALA.</h1>
          <p className="hero-subtitle">
            AI Solutions Architect | Agentic Orchestration | Founding Architect of Oracle CX Unity.
          </p>
          <p className="hero-copy">
            Translating complex enterprise requirements into high-performance, governed AI systems. Specializing in
            "Zero-to-One" platform evolution.
          </p>
          <div className="cta-row">
            <a href="#" className="btn btn-primary magnetic">Download Portfolio PDF</a>
            <a href="#contact" className="btn btn-ghost magnetic">Request Contract Inquiry</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-metadata">
            <p className="mono">LOCATION</p>
            <p>United States</p>
          </div>
          <div className="hero-metadata">
            <p className="mono">FOCUS</p>
            <p>Agentic Platforms, Governance, Enterprise Scale</p>
          </div>
        </div>
      </section>

      <section className="impact section-grid" aria-labelledby="impact-heading">
        <h2 id="impact-heading" className="section-title">Impact</h2>
        <div className="bento-grid">
          <article className="bento-card"><p className="metric">80% Faster AI Delivery</p><p>Architecting DevSecOps "golden-path" pipelines with embedded policy-as-code.</p></article>
          <article className="bento-card"><p className="metric">200+ Enterprise Customers</p><p>Scaled Oracle CX Unity across 24 global regions.</p></article>
          <article className="bento-card"><p className="metric">$250K Annual Savings</p><p>Multi-cloud FinOps governance and automated right-sizing.</p></article>
          <article className="bento-card"><p className="metric">99.99% SLO Compliance</p><p>SRE-driven observability and ML-based anomaly detection.</p></article>
        </div>
      </section>

      <section className="ip section-grid" aria-labelledby="ip-heading">
        <h2 id="ip-heading" className="section-title">Intellectual Property</h2>
        <div className="card-stack">
          <article className="hover-card"><h3>The Elastic Brain</h3><p>A technical guide to Kubernetes-native MLOps.</p><p className="mono muted">User Summary</p></article>
          <article className="hover-card"><h3>The AI Governance North Star</h3><p>Architecting trust and security in the Agentic era.</p><p className="mono muted">User Summary</p></article>
          <article className="hover-card"><h3>The SCALE Framework</h3><p><strong>S</strong>et the stage | <strong>C</strong>ompose the blocks | <strong>A</strong>rchitect the PACT | <strong>L</strong>ead the walk | <strong>E</strong>valuate the core.</p><p className="mono muted">User Summary</p></article>
        </div>
        <div className="marquee-wrap" aria-label="LinkedIn insights marquee">
          <div className="marquee-track">
            <span className="mono">RAG PIPELINES</span><span className="mono">MULTI-AGENT SYSTEMS</span><span className="mono">POLICY-AS-CODE TOPOLOGIES</span><span className="mono">LLM GUARDRAIL FLOWCHARTS</span>
            <span className="mono">RAG PIPELINES</span><span className="mono">MULTI-AGENT SYSTEMS</span><span className="mono">POLICY-AS-CODE TOPOLOGIES</span><span className="mono">LLM GUARDRAIL FLOWCHARTS</span>
          </div>
        </div>
      </section>

      <section className="competencies section-grid" aria-labelledby="comp-heading">
        <h2 id="comp-heading" className="section-title">Technical Competencies</h2>
        <div className="badge-cloud">
          {['LangGraph','LangChain','MCP','OCI (Certified)','AWS (EKS)','Kubernetes (OKE)','Terraform','LLMOps','KServe','OPA/Rego','Python (FastAPI)','Java/Spring Boot','Kafka','Big Data'].map((b) => (
            <span key={b} className="badge">{b}</span>
          ))}
        </div>
      </section>

      <section className="timeline section-grid" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="section-title">Timeline</h2>
        <div className="timeline-list">
          <article className="timeline-item"><p className="timeline-title">2019 – Present | Senior Principal Architect, Oracle CX Unity</p><ul><li>Founding Architect leading "Zero-to-One" SaaS evolution.</li><li>Engineered production-grade RAG and Multi-Agent Systems using LangGraph.</li></ul></article>
          <article className="timeline-item"><p className="timeline-title">2016 – 2019 | Principal Software Engineer, Oracle Fusion Apps</p><ul><li>Modernized global provisioning frameworks and event-driven automation.</li></ul></article>
        </div>
      </section>

      <section className="contact section-grid" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="section-title">Inquire for Architectural Consulting.</h2>
        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <label>Name<input type="text" name="name" required /></label>
          <label>Company<input type="text" name="company" required /></label>
          <label>Email<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span className={`input-hint ${emailValidity.state}`}>{emailValidity.text}</span>
          </label>
          <label>Role Nature<select name="roleNature" required><option value="">Select...</option><option value="Contract">Contract</option><option value="Full-Time">Full-Time</option></select></label>
          <label>
            Contract Specific: Immediate Availability
            <div className="toggle-row"><input type="checkbox" name="availabilityToggle" checked={availability} onChange={(e) => setAvailability(e.target.checked)} /><span className="mono">{availability ? 'Yes' : 'No'}</span></div>
          </label>
          <label>Message<textarea name="message" rows={5} required /></label>
          <button type="submit" className="btn btn-primary magnetic" disabled={formState.status === 'loading'}>Submit Inquiry</button>
          {formState.message ? <p className={`form-msg ${formState.status}`}>{formState.message}</p> : null}
        </form>
        <footer className="portal-footer mono">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:shivashankar.tummala@gmail.com">Email: shivashankar.tummala@gmail.com</a>
        </footer>
      </section>
    </main>
  );
}
