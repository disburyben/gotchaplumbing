import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar--solid-orange" id="main-nav">
      <div className="navbar__brand navbar__brand--centered">
        <Image
          src="/gotcha-header-text.png"
          alt="Gotcha Plumbing & Gas Services"
          width={280}
          height={64}
          className="navbar__logo"
          priority
        />
      </div>
    </nav>
  );
}
