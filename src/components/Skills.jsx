import Reveal from "./Reveal.jsx";

const groups = [
  {
    cat: "Frontend",
    items: ["React", "Vite", "JavaScript", "HTML/CSS", "Responsive UI"],
  },
  {
    cat: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    cat: "Database",
    items: ["PostgreSQL", "Neon", "SQL"],
  },
  {
    cat: "Security & Ops",
    items: ["Rate limiting (Redis)", "CORS/Auth hardening", "HTTP security headers", "Vercel deployment"],
  },
  {
    cat: "SEO & Growth",
    items: ["Sitemaps", "Google Search Console", "JSON-LD / structured data", "Open Graph"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Skills on Record</p>
          <h2 className="section-title">What I bring to a project</h2>
        </Reveal>

        <Reveal>
          <div className="ledger">
            {groups.map((g) => (
              <div className="ledger-row" key={g.cat}>
                <div className="ledger-cat">{g.cat}</div>
                <div className="ledger-items">
                  {g.items.map((item) => (
                    <span className="pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
