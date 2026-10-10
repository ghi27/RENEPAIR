import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

// ── Smooth scroll to a section on the Home page ─────────────────────────────
// Works from any page: on the Home page it scrolls, on other pages it goes Home first.
export function useGoToSection() {
  const navigate = useNavigate();
  const location = useLocation();
  return (id: string) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    const scroll = () => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior });
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
    };
    if (location.pathname === "/") {
      scroll();
    } else {
      navigate("/");
      setTimeout(scroll, 150);
    }
  };
}

// ── Checkered-flag divider ──────────────────────────────────────────────────
export function CheckeredDivider() {
  return (
    <div
      className="w-full h-5 flex-shrink-0"
      style={{
        background: `repeating-linear-gradient(
          -45deg,
          #1E1F22 0px,
          #1E1F22 10px,
          #FFC800 10px,
          #FFC800 20px
        )`,
      }}
      aria-hidden="true"
    />
  );
}

// ── Icons ───────────────────────────────────────────────────────────────────
export function IconWrench({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
export function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
export function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
export function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Logo ─────────────────────────────────────────────────────────────────────
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 select-none">
      <div className="relative flex-shrink-0">
        <div className="w-9 h-9 bg-[#FFC800] rounded flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#1E1F22" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E63328] rounded-full border-2 border-[#1E1F22]" />
      </div>
      <div>
        <div
          className="text-white leading-none tracking-wider"
          style={{ fontFamily: "'Oswald', sans-serif", fontSize: compact ? "18px" : "22px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          RENE PAIR
        </div>
        {!compact && (
          <div className="text-[#9CA3AF] uppercase mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", letterSpacing: "0.2em" }}>
            Auto Repair
          </div>
        )}
      </div>
    </Link>
  );
}

// ── Header ───────────────────────────────────────────────────────────────────
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const goTo = useGoToSection();
  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: "#1E1F22", borderBottom: "1px solid #2A2C30" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <Logo />

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={`#/${l.id}`}
              onClick={(e) => { e.preventDefault(); goTo(l.id); }}
              className="text-[#9CA3AF] uppercase tracking-wider transition-colors duration-150 hover:text-[#FFC800]"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em", fontSize: "13px", fontWeight: 600 }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Link
          to="/book"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-semibold uppercase tracking-wider rounded transition-colors duration-150"
          style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em", fontSize: "13px" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6B400")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC800")}
        >
          {location.pathname === "/book" ? "← Back to Home" : "Book a Repair"}
        </Link>

        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ backgroundColor: "#2A2C30" }}>
          <nav className="flex flex-col px-5 py-4 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={`#/${l.id}`}
                className="text-white font-semibold uppercase tracking-wider text-base border-b pb-3"
                style={{ fontFamily: "'Oswald', sans-serif", borderColor: "#1E1F22" }}
                onClick={(e) => { e.preventDefault(); setOpen(false); goTo(l.id); }}
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/book"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 font-semibold uppercase tracking-wider rounded"
              style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif" }}
              onClick={() => setOpen(false)}
            >
              Book a Repair
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "#1E1F22", borderTop: "1px solid #2A2C30", scrollMarginTop: "64px" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Logo compact />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif", maxWidth: "280px" }}>
              Rene Pair is Pampanga's neighborhood auto shop. Built on straight talk, fair prices, and work that actually lasts.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-widest" style={{ fontFamily: "'Oswald', sans-serif", color: "#FFC800", letterSpacing: "0.18em" }}>
              Visit Us
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-sm" style={{ color: "#F2F1ED", fontFamily: "'Inter', sans-serif" }}>Mendoza Str. Dau, Pampanga</p>
              <p className="text-sm" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>Monday – Saturday, 9:00 AM – 6:00 PM</p>
            </address>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-widest" style={{ fontFamily: "'Oswald', sans-serif", color: "#FFC800", letterSpacing: "0.18em" }}>
              Contact
            </h4>
            <div className="space-y-2">
              {["hello@renepair.ph", "+63 676 942 0000"].map((c) => (
                <a
                  key={c}
                  href={c.startsWith("+") ? `tel:${c.replace(/\s/g, "")}` : `mailto:${c}`}
                  className="block text-sm transition-colors duration-150"
                  style={{ color: "#F2F1ED", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFC800")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2F1ED")}
                >
                  {c}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors duration-150"
                style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6B400")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC800")}
              >
                Book a Repair
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid #2A2C30", color: "#6B7280", fontFamily: "'Inter', sans-serif" }}
        >
          <span>© 2026 Rene Pair Auto Repair. All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors duration-150"
                style={{ color: "#6B7280" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFC800")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
