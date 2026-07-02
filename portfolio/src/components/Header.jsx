export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a href="#top" className="brand">
          <span className="brand-mark">L</span>
          {/* TODO: replace with your full name */}
          Luiz
        </a>
        <ul className="nav-links">
          <li><a href="#about"><span className="n">01 · </span>About</a></li>
          <li><a href="#case-file"><span className="n">02 · </span>Case File</a></li>
          <li><a href="#projects"><span className="n">03 · </span>Projects</a></li>
          <li><a href="#skills"><span className="n">04 · </span>Skills</a></li>
          <li><a href="#contact"><span className="n">05 · </span>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
