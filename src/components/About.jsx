import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="section-title">From the front desk to the back end</h2>
        </Reveal>

        <Reveal className="about-grid" as="div">
          <div className="about-text">
            <p>
              I graduated with a <strong>BS in Information Technology in 2026</strong> and
              now work as a freelance web developer based in the Philippines. My
              first real-world project wasn't a toy app — it was a{" "}
              <strong>local web system</strong> for a Municipal Civil
              Registrar's Office, built and shipped to production, end to end.
            </p>
            <p>
              That project forced me to think past "does it work" into{" "}
              <strong>does it hold up</strong>: locking down auth, closing
              security gaps, keeping the site fast and indexable, and making
              sure it behaves under real traffic on serverless infrastructure.
            </p>
            <p>
              I work in short, frequent iterations — ship, test, fix, push —
              and I document what I build so the next person (or client)
              isn't left guessing.
            </p>
          </div>

          <ul className="fact-list">
            <li>
              <span className="k">Education</span>
              <span className="v">BS Information Technology, 2026</span>
            </li>
            <li>
              <span className="k">Based in</span>
              <span className="v">Philippines</span>
            </li>
            <li>
              <span className="k">Currently</span>
              <span className="v">Freelance web developer</span>
            </li>
            <li>
              <span className="k">Core stack</span>
              <span className="v">React, Node.js/Express, PostgreSQL</span>
            </li>
            <li>
              <span className="k">Focus</span>
              <span className="v">Security, performance, real deployments</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
