export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <img src="/images/profile.jpg" alt="Luiz Kieth Patiag" />
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#about"><span className="n"></span>About</a></li>
          <li><a href="#case-file"><span className="n"></span>Case File</a></li>
          <li><a href="#projects"><span className="n"></span>Projects</a></li>
          <li><a href="#skills"><span className="n"></span>Skills</a></li>
          <li><a href="#contact"><span className="n"></span>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
