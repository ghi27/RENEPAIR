import { Link } from "react-router";
import { CheckeredDivider } from "../components/shared";
import oilChangePhoto from "../imports/oil_change.jpg";

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconTag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}
function IconOil() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 22V8l9-6 9 6v14a1 1 0 01-1 1H4a1 1 0 01-1-1z" /><path d="M9 22v-8h6v8" />
    </svg>
  );
}
function IconBrake() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}
function IconTire() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  );
}
function IconDiag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function IconGear() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  );
}
function IconAC() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconCar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
      <rect x="5" y="13" width="14" height="8" rx="2" /><line x1="9" y1="21" x2="9" y2="13" /><line x1="15" y1="21" x2="15" y2="13" />
    </svg>
  );
}

const services = [
  { id: "oil", icon: <IconOil />, name: "Oil & Filter Change", desc: "Full synthetic or conventional oil swap with filter replacement to keep your engine running clean.", price: "PHP 800", badge: false },
  { id: "brake", icon: <IconBrake />, name: "Brake Service", desc: "Pad replacement, rotor inspection, and hydraulic check — stopping power you can trust.", price: "PHP 2,500", badge: true },
  { id: "tires", icon: <IconTire />, name: "Tires & Alignment", desc: "New tires fitted and four-wheel alignment dialed in for even wear and straight tracking.", price: "PHP 1,200", badge: false },
  { id: "diag", icon: <IconDiag />, name: "Diagnostics", desc: "OBD-II scan plus visual inspection to pinpoint the root cause before any work begins.", price: "PHP 600", badge: false },
  { id: "trans", icon: <IconGear />, name: "Transmission", desc: "Fluid flush, filter change, and full transmission health assessment for smooth shifting.", price: "PHP 3,000", badge: false },
  { id: "ac", icon: <IconAC />, name: "AC Repair", desc: "Refrigerant recharge, leak detection, and compressor check to restore full cooling capacity.", price: "PHP 1,500", badge: false },
];

const steps = [
  { n: "01", title: "Book Online", desc: "Pick a date and drop off your details in under 2 minutes.", icon: <IconCalendar /> },
  { n: "02", title: "We Diagnose", desc: "Our certified tech inspects the issue and tells you exactly what's wrong.", icon: <IconSearch /> },
  { n: "03", title: "You Approve", desc: "We quote the job — no hidden costs, no surprises. You say go.", icon: <IconCheck /> },
  { n: "04", title: "Drive Away", desc: "Your car's back on the road, usually the same day.", icon: <IconCar /> },
];

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1E1F22", minHeight: "88vh", display: "flex", alignItems: "center" }}
    >
      {/* Full-bleed background photo */}
      <img
        src={oilChangePhoto}
        alt="Mechanic pouring fresh engine oil into a car at Rene Pair Auto Repair"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />
      {/* Dark gradient overlay — preserves brand ground, keeps text AA-compliant */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(30,31,34,0.94) 0%, rgba(30,31,34,0.80) 55%, rgba(30,31,34,0.45) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle diagonal texture on top of overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px" style={{ backgroundColor: "#FFC800" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#FFC800", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
              Trusted Local Auto Repair
            </span>
          </div>
          <h1
            className="font-bold uppercase leading-none mb-6"
            style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(44px, 7vw, 88px)", color: "#F2F1ED", letterSpacing: "-0.01em", lineHeight: 1.0 }}
          >
            Every car deserves a{" "}
            <span style={{ color: "#FFC800" }}>fair repair.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>
            Pampanga's most trusted auto shop. Certified technicians, honest quotes, and most jobs done same-day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider rounded transition-colors duration-150"
              style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6B400")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC800")}
            >
              Book a Repair
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider rounded border-2 transition-colors duration-150"
              style={{ borderColor: "#F2F1ED", color: "#F2F1ED", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", backgroundColor: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F2F1ED"; e.currentTarget.style.color = "#1E1F22"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#F2F1ED"; }}
            >
              See Our Services
            </a>
          </div>
        </div>
        <div
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          style={{ fontFamily: "'Oswald', sans-serif", fontSize: "320px", fontWeight: 700, color: "#FFC800", opacity: 0.04, lineHeight: 1, letterSpacing: "-0.04em" }}
          aria-hidden="true"
        >
          
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const points = [
    { icon: <IconShield />, label: "Certified technicians" },
    { icon: <IconClock />, label: "Most repairs same-day" },
    { icon: <IconTag />, label: "Upfront, honest pricing" },
    { icon: <IconWrench />, label: "Genuine parts only" },
  ];
  return (
    <div style={{ backgroundColor: "#2A2C30" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {points.map((p) => (
            <div key={p.label} className="flex items-center gap-3">
              <span style={{ color: "#FFC800" }}>{p.icon}</span>
              <span className="text-sm font-medium leading-tight" style={{ color: "#F2F1ED", fontFamily: "'Inter', sans-serif" }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#F2F1ED" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#FFC800", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
            What We Do
          </span>
          <h2 className="font-bold uppercase leading-none" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", color: "#1E1F22", letterSpacing: "-0.01em" }}>
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="relative group rounded-lg overflow-hidden transition-all duration-200"
              style={{ backgroundColor: "#fff", border: "1.5px solid #E5E3DC" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#FFC800"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(255,200,0,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E3DC"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              {s.badge && (
                <div className="absolute top-0 right-0 overflow-hidden" style={{ width: "96px", height: "96px", pointerEvents: "none" }}>
                  <div className="absolute top-5 right-[-22px] w-28 text-center font-bold uppercase py-1 rotate-45" style={{ backgroundColor: "#E63328", color: "#fff", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em", fontSize: "10px" }}>
                    Most Booked
                  </div>
                </div>
              )}
              <div className="p-6 md:p-7 flex flex-col gap-4 h-full">
                <div className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#1E1F22", color: "#FFC800" }}>{s.icon}</div>
                <div>
                  <h3 className="font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px", color: "#1E1F22", letterSpacing: "0.04em" }}>{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>{s.desc}</p>
                </div>
                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase" style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}>
                    From {s.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section style={{ backgroundColor: "#1E1F22" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#FFC800", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
            Simple Process
          </span>
          <h2 className="font-bold uppercase leading-none" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", color: "#F2F1ED" }}>
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", fontSize: "22px" }}>
                {s.n}
              </div>
              <div>
                <h3 className="font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "18px", color: "#F2F1ED" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider rounded transition-colors duration-150"
            style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6B400")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC800")}
          >
            Book a Repair Now
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section style={{ backgroundColor: "#F2F1ED" }}>
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <div className="font-bold mb-6 leading-none select-none" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "80px", color: "#FFC800", lineHeight: 0.7, opacity: 0.6 }} aria-hidden="true">"</div>
        <blockquote>
          <p className="font-bold uppercase leading-tight mb-8" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(22px, 3.5vw, 36px)", color: "#1E1F22" }}>
            Brought my Civic in on a Monday morning with a grinding brake. By noon, it was fixed, explained in plain language, and cost exactly what they quoted. First shop that's never made me feel like I was being played.
          </p>
          <footer>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#9CA3AF", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}>
              — Grabriel P., Angeles City
            </span>
          </footer>
        </blockquote>
        <div className="flex items-center justify-center gap-1 mt-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} viewBox="0 0 20 20" fill="#FFC800" className="w-5 h-5" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.367 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.874c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.065 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <CheckeredDivider />
      <Services />
      <CheckeredDivider />
      <HowItWorks />
      <Testimonial />
      <CheckeredDivider />
    </main>
  );
}
