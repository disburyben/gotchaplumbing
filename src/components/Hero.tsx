import Image from "next/image";

/* Phone SVG icon — inline to avoid external dependency */
function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="hero">
      {/* Ambient background shapes — matching original */}
      <div className="hero__bg-orb hero__bg-orb--blue" aria-hidden="true" />
      <div className="hero__bg-orb hero__bg-orb--orange" aria-hidden="true" />

      <div className="hero__container">
        {/* Text Content */}
        <div className="hero__content">
          <div className="hero__title-image-wrapper fade-in-up">
            <Image
              src="/coming-soon-text.png"
              alt="Coming Soon!"
              width={650}
              height={325}
              className="hero__title-image"
              priority
            />
          </div>

          <p className="hero__subtitle fade-in-up fade-in-up--delay-2">
            Our new website is currently under construction. In the meantime,
            the Gotcha team is fully operational and ready to solve your plumbing
            problems 24/7 across the Greater Adelaide region.
          </p>

          <div className="hero__actions fade-in-up fade-in-up--delay-3">
            <a
              href="tel:0428592610"
              className="btn btn--primary"
              id="hero-call-btn"
            >
              <PhoneIcon className="btn__icon" />
              0428592610
            </a>
            <a
              href="mailto:info@gotchaplumbing.com.au"
              className="btn btn--glass"
              id="hero-email-btn"
            >
              <EnvelopeIcon className="btn__icon" />
              EMAIL US
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="hero__visual fade-in-up fade-in-up--delay-4">
          <Image
            src="/gotcha-circle-badge.png"
            alt="Gotcha Plumbing & Gas Badge"
            width={700}
            height={700}
            className="logo-centered__image"
            priority
          />
        </div>
      </div>
    </header>
  );
}
