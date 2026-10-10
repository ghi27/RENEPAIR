import { useState } from "react";
import { CheckeredDivider, IconMapPin, IconClock, IconPhone, IconMail } from "../components/shared";

const serviceOptions = [
  "Oil & Filter Change",
  "Brake Service",
  "Tires & Alignment",
  "Diagnostics",
  "Transmission",
  "AC Repair",
  "Other",
];

const inputBase: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#2A2C30",
  border: "1.5px solid #3A3D42",
  borderRadius: "6px",
  color: "#F2F1ED",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  padding: "12px 14px",
  outline: "none",
  transition: "border-color 0.15s",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#9CA3AF", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0" style={{ color: "#FFC800" }}>{icon}</span>
      <span className="text-sm leading-snug" style={{ color: "#F2F1ED", fontFamily: "'Inter', sans-serif" }}>{children}</span>
    </div>
  );
}

export default function BookARepair() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    notes: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const focusStyle = (name: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === name ? "#FFC800" : "#3A3D42",
  });

  return (
    <div style={{ backgroundColor: "#1E1F22", minHeight: "100vh" }}>
      {/* Checkered flag right below header */}
      <CheckeredDivider />

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Page heading */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px" style={{ backgroundColor: "#FFC800" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#FFC800", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}
            >
              Schedule Your Visit
            </span>
          </div>
          <h1
            className="font-bold uppercase leading-none mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(44px, 6vw, 76px)",
              color: "#F2F1ED",
              letterSpacing: "-0.01em",
              lineHeight: 1.0,
            }}
          >
            Book a <span style={{ color: "#FFC800" }}>Repair</span>
          </h1>
          <p className="text-base" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>
            Tell us what's going on. We'll get back to you within the hour.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* ── Left: Booking form ─────────────────────────────────────────── */}
          <div
            className="rounded-xl p-8 md:p-10"
            style={{ backgroundColor: "#2A2C30", border: "1px solid #3A3D42" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FFC800" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1E1F22" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h2
                    className="font-bold uppercase mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif", fontSize: "28px", color: "#F2F1ED" }}
                  >
                    Booking Received!
                  </h2>
                  <p className="text-sm" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>
                    We'll give you a call or send you an email within the hour to confirm your appointment.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", notes: "" }); }}
                  className="mt-2 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded transition-colors duration-150"
                  style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6B400")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC800")}
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Full Name">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Ghieyan Tuma"
                      required
                      style={focusStyle("name")}
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      placeholder="+63 912 345 6789"
                      required
                      style={focusStyle("phone")}
                    />
                  </Field>
                </div>

                <Field label="Email Address">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="you@example.com"
                    required
                    style={focusStyle("email")}
                  />
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Service Needed">
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                        required
                        style={{
                          ...focusStyle("service"),
                          appearance: "none",
                          cursor: "pointer",
                          paddingRight: "40px",
                          color: form.service ? "#F2F1ED" : "#6B7280",
                        }}
                      >
                        <option value="" disabled hidden>Select a service…</option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o} style={{ backgroundColor: "#2A2C30", color: "#F2F1ED" }}>{o}</option>
                        ))}
                      </select>
                      {/* Chevron */}
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#9CA3AF" }}>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </Field>

                  <Field label="Preferred Date">
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      onFocus={() => setFocused("date")}
                      onBlur={() => setFocused(null)}
                      required
                      style={{
                        ...focusStyle("date"),
                        colorScheme: "dark",
                      }}
                    />
                  </Field>
                </div>

                <Field label="Additional Notes">
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    onFocus={() => setFocused("notes")}
                    onBlur={() => setFocused(null)}
                    placeholder="Describe the issue, symptoms, or anything helpful we should know before you arrive…"
                    rows={5}
                    style={{
                      ...focusStyle("notes"),
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                  />
                </Field>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 text-base font-bold uppercase tracking-wider rounded transition-colors duration-150"
                    style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6B400")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC800")}
                  >
                    Request Booking
                  </button>
                  <p className="mt-3 text-xs" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
                    We'll confirm your slot by phone or email within 60 minutes.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ── Right: Contact side panel ──────────────────────────────────── */}
          <div
            className="rounded-xl p-7 flex flex-col gap-7"
            style={{ backgroundColor: "#2A2C30", border: "1px solid #3A3D42" }}
          >
            <div>
              <h2
                className="font-bold uppercase mb-1"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", color: "#F2F1ED", letterSpacing: "0.06em" }}
              >
                Find Us
              </h2>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#FFC800", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.18em" }}>
                Drop by or give us a ring
              </p>
            </div>

            <div className="flex flex-col gap-5" style={{ borderTop: "1px solid #3A3D42", paddingTop: "24px" }}>
              <ContactRow icon={<IconMapPin />}>
                Mendoza Str. Dau, Pampanga
              </ContactRow>
              <ContactRow icon={<IconClock />}>
                Mon – Sat, 9:00 AM – 6:00 PM
              </ContactRow>
              <ContactRow icon={<IconPhone />}>
                <a
                  href="tel:+639123456789"
                  className="transition-colors duration-150"
                  style={{ color: "#F2F1ED" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFC800")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2F1ED")}
                >
                  +63 676 942 0000
                </a>
              </ContactRow>
              <ContactRow icon={<IconMail />}>
                <a
                  href="mailto:hello@renepair.ph"
                  className="transition-colors duration-150"
                  style={{ color: "#F2F1ED" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFC800")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2F1ED")}
                >
                  hello@renepair.ph
                </a>
              </ContactRow>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-lg overflow-hidden flex-shrink-0"
              style={{ height: "180px", backgroundColor: "#1E1F22", position: "relative", border: "1px solid #3A3D42" }}
            >
              {/* Stylized map stand-in */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, #FFC800 0, #FFC800 1px, transparent 0, transparent 32px),
                  repeating-linear-gradient(90deg, #FFC800 0, #FFC800 1px, transparent 0, transparent 32px)
                `,
              }} aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E63328" }}>
                  <IconMapPin />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9CA3AF", fontFamily: "'Oswald', sans-serif" }}>
                  Lampa Str. Lot 10
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #3A3D42" }} />

            {/* Reassurance note */}
            <div className="flex items-start gap-3">
              <span style={{ color: "#FFC800", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>
                No deposit required. We'll quote the job first — you only pay after you approve the work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
