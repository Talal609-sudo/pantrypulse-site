export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-24">
      <div className="container">
        <div className="card px-5 py-5 text-sm text-white/70">
          © {new Date().getFullYear()} PantryPulse — Contact: info@pantrypulse.com
        </div>
      </div>
    </footer>
  );
}
