import Reveal from "./Reveal.jsx";

const stack = [
  "React 18", "Vite", "Node.js", "Express", "PostgreSQL (Neon)",
  "Vercel Serverless", "Upstash Redis",
];

const overview = [
  "Designed and developed a public-facing site plus an internal admin CRMS for a Municipal Civil Registrar's Office — replacing manual, paper-based recordkeeping.",
  "Built the full request-a-service flow: an interactive service catalog, office info, org chart, and an admin dashboard for staff.",
  "Digitized handwritten civil registry logbook entries into a structured PostgreSQL database.",
  "Configured production DNS, connecting a custom domain through Hostinger to Vercel.",
];

const engineering = [
  "Ran a full security audit and fixed a hardcoded JWT secret fallback, an open CORS policy, disabled SSL verification, and a client-exposed API key.",
  "Replaced a broken in-memory rate limiter with Upstash Redis — the correct approach for stateless Vercel serverless functions.",
  "Migrated admin authentication from email-based to username-based login across the full stack.",
  "Improved the securityheaders.com grade from D to A by implementing proper HTTP security headers.",
  "Converted images to WebP and added lazy loading; built sitemap generation, Google Search Console integration, and JSON-LD GovernmentOffice structured data for SEO.",
  "Added a focus trap and Escape-key handling to modals, and corrected color-contrast issues for accessibility.",
];

export default function CaseFile() {
  return (
    <section id="case-file">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Entry No. 02 — Featured Case File</p>
          <h2 className="section-title">MCRO Civil Registrar System</h2>
          <p className="section-lede">
            A production web system built for a real municipal government
            office — from first commit to a hardened, publicly live deployment.
          </p>
        </Reveal>

        <Reveal>
          <div className="case-file">
            <div className="case-file-header">
              <div>
                <div className="case-title">Municipal Civil Registrar's Office — General Luna, Quezon</div>
                <div className="case-desc">
                  Public information site + internal admin system, designed,
                  built, secured, and deployed for daily use by office staff
                  and residents.
                </div>
              </div>
              <span className="status-pill">Live — Deployed</span>
            </div>

            <div className="case-meta">
              {stack.map((s) => (
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>

            {/* TODO: replace with an actual screenshot of the live site.
                Drop an image into /public/images/mcro-screenshot.png
                and swap the placeholder div below for:
                <img src="/images/mcro-screenshot.png" alt="MCRO site screenshot" /> */}
            <div className="screenshot-frame">
              [ Screenshot of mcrogenluna.online goes here ]
            </div>

            <div className="case-body">
              <div className="case-col">
                <h4>Overview</h4>
                <ul className="check-list">
                  {overview.map((item, i) => (
                    <li key={i}>
                      <span className="mark">§</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="case-col">
                <h4>Engineering &amp; Security Highlights</h4>
                <ul className="check-list">
                  {engineering.map((item, i) => (
                    <li key={i}>
                      <span className="mark">§</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="case-links">
              {/* TODO: confirm this is the link you want public */}
              <a href="https://mcrogenluna.online" target="_blank" rel="noreferrer" className="btn btn-primary">
                Visit live site →
              </a>
              {/* TODO: if the repo is private, remove this link or link to a portfolio write-up instead */}
              <a href="https://github.com/luiz-ctrl/mcro-crms" target="_blank" rel="noreferrer" className="btn btn-ghost">
                View repository
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
