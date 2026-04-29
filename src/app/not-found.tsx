import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h2 className="not-found__title">Page Not Found</h2>
      <p className="not-found__message">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn--primary" style={{ marginTop: 24 }}>
        Go Home
      </Link>
    </div>
  );
}
