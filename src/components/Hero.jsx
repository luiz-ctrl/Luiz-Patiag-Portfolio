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
            production web applications — most recently a live local
            civil registrar system now serving a municipality of over of General Luna, Quezon.
          </p>
          <div className="hero-actions">
            <a href="#case-file" className="btn btn-primary">View the case file →</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="photo-card">
          {/* Photo goes here — drop your image at public/images/profile.jpg */}
          <img src="/images/profile.jpg" alt="Luiz Kieth Patiag" />
        </div>
      </div>
    </section>
  );
}
