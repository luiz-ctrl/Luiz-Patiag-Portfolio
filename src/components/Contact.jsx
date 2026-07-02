import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">File a Request</p>
          <h2 className="section-title" style={{ marginBottom: 40 }}>Let's work together</h2>
        </Reveal>

        <Reveal>
          <div className="contact-panel">
            <div>
              <h2>Have a project in mind?</h2>
              <p>
                I'm open to freelance web development work — from small
                fixes to full builds. Reach out and I'll get back to you.
              </p>
            </div>
            <div className="contact-links">
              {/* TODO: replace with your real email */}
              <a href="mailto:you@example.com" className="contact-link">
                <span className="arrow">→</span> you@example.com
              </a>
              {/* TODO: replace with your GitHub URL */}
              <a href="https://github.com/luiz-ctrl" target="_blank" rel="noreferrer" className="contact-link">
                <span className="arrow">→</span> github.com/luiz-ctrl
              </a>
              {/* TODO: replace with your LinkedIn URL */}
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="contact-link">
                <span className="arrow">→</span> linkedin.com/in/your-profile
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
