"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-page">
      <h2 className="error-page__title">Something went wrong</h2>
      <p className="error-page__message">
        We&apos;re sorry — an unexpected error occurred. Please try again.
      </p>
      <button
        className="btn btn--primary error-page__btn"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
