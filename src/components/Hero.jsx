export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div>
          <p className="eyebrow">Web Developer · Philippines</p>
          <h1 className="hero-name">
            Luiz Kieth Patiag
          </h1>
          <p className="hero-role">
            Full-stack developer — <em style={{ fontStyle: "italic", color: "var(--brass)" }}>
              building and hardening apps people rely on
            </em>
          </p>
          <p className="hero-pitch">
            BS Information Technology, 2026. I design, build, and secure
            production web applications — most recently a live government
            civil registrar system now serving a municipality of over
            25,000 residents.
            {/* TODO: swap in your municipality's population if you'd like a real number here, or remove */}
          </p>
          <div className="hero-actions">
            <a href="#case-file" className="btn btn-primary">View the case file →</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="certificate">
          <div className="certificate-head">
            <span>Republic of the Developer</span>
            <span>No. 2026-0001</span>
          </div>
          <div className="certificate-title">Certificate of Registration</div>
          <div className="certificate-sub">This certifies that the bearer is registered as:</div>
          <div className="certificate-rows">
            <div className="certificate-row">
              <span>Name</span>
              <span>Luiz {/* TODO: last name */}</span>
            </div>
            <div className="certificate-row">
              <span>Occupation</span>
              <span>Web Developer</span>
            </div>
            <div className="certificate-row">
              <span>Specialization</span>
              <span>Full-Stack / Security</span>
            </div>
            <div className="certificate-row">
              <span>Status</span>
              <span>Available for work</span>
            </div>
            <div className="certificate-row">
              <span>Based in</span>
              <span>Philippines</span>
            </div>
          </div>
          <div className="stamp">
            <div className="stamp-text">VERIFIED<br />BUILDER</div>
          </div>
        </div>
      </div>
    </section>
  );
}
