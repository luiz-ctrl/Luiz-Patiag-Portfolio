import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Other Work</p>
          <h2 className="section-title">More builds</h2>
        </Reveal>

        <Reveal className="project-grid" as="div">
          <div className="project-card">
            <h3>Multi-Page Auth Demo</h3>
            <p>
              A beginner-friendly authentication flow built from scratch —
              signup, login, and session handling — using plain HTML, CSS,
              and vanilla JavaScript with localStorage. No frameworks, no
              shortcuts, just the fundamentals done clearly.
            </p>
            <div className="project-tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">Vanilla JS</span>
            </div>
            {/* TODO: add a real link once this is pushed to a repo / deployed */}
            <a href="#" className="btn btn-ghost">View project →</a>
          </div>

          <div className="project-card">
            <h3>Admin Auth Migration</h3>
            <p>
              Migrated the MCRO admin login system from email-based to
              username-based authentication across the frontend and backend
              — including a hidden admin entry point for staff access.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Express</span>
              <span className="tag">JWT</span>
            </div>
            <a href="#case-file" className="btn btn-ghost">Part of the case file →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
