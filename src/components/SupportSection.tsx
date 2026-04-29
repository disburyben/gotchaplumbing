import Image from "next/image";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function SupportSection() {
  return (
    <section className="support-section fade-in-up fade-in-up--delay-5">
      <div className="support-card">
        <div className="support-card__content">
          <p className="support-card__label">Proudly Supporting</p>
          <h3 className="support-card__title">The Mito Foundation</h3>
          <p className="support-card__description">
            Gotcha Plumbing &amp; Gas is committed to giving back to our
            community. We proudly support{" "}
            <strong>The Bloody Long Walk</strong> to raise vital funds and help
            find a cure for mitochondrial disease.
          </p>
          <a
            href="https://www.mito.org.au/bloodylongwalk/"
            target="_blank"
            rel="noopener noreferrer"
            className="support-card__link"
            id="mito-learn-more"
          >
            Learn More
            <ArrowRightIcon />
          </a>
        </div>

        <div className="support-card__logos">
          <a
            href="https://www.mito.org.au/bloodylongwalk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/mito-foundation.png"
              alt="Mito Foundation"
              width={160}
              height={64}
              className="support-logo"
            />
          </a>
          <a
            href="https://www.mito.org.au/bloodylongwalk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/blw-logo.jpg"
              alt="The Bloody Long Walk"
              width={80}
              height={80}
              className="support-logo"
              style={{ borderRadius: "var(--radius-sm)" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
