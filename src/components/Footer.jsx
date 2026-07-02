export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {year} Luiz. Built with React &amp; Vite.</span>
        <span>Entry No. 2026-0001 · Status: Active</span>
      </div>
    </footer>
  );
}
