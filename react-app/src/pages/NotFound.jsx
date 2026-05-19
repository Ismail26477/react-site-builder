import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="hero" style={{ textAlign: "center" }}>
      <div className="container">
        <h1 style={{ fontSize: 96, margin: 0 }}>404</h1>
        <p className="muted">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary" style={{ marginTop: 24 }}>Go home</Link>
      </div>
    </section>
  );
}
