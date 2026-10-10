import { useEffect, useState } from "react";
import { Link } from "react-router";
import { CheckeredDivider } from "../components/shared";

// Photos are hosted on Unsplash (free to use). To swap a photo, change its "src" below.
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;
const full = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`;

const photos = [
  { id: "photo-1487754180451-c456f719a1fc", alt: "Mechanic refilling motor oil in a car engine bay" },
  { id: "photo-1625047509248-ec889cbff17f", alt: "Mechanic in a grey uniform inspecting a car engine" },
  { id: "photo-1727893119356-1702fe921cf9", alt: "Mechanics working on cars in a bright repair workshop" },
  { id: "photo-1645445522156-9ac06bc7a767", alt: "Man working on a tire in a garage" },
  { id: "photo-1632733711679-529326f6db12", alt: "Man working on a car engine" },
  { id: "photo-1764015805414-df7de89d405b", alt: "Mechanic using an impact wrench on a car wheel" },
  { id: "photo-1727893304219-063d142ce6f3", alt: "A car being worked on in a repair shop" },
  { id: "photo-1517026575980-3e1e2dedeab4", alt: "Analog tachometer gauge on a car dashboard" },
  { id: "photo-1615906655593-ad0386982a0f", alt: "Mechanic working on a car engine" },
  { id: "photo-1760836395760-9831facb4754", alt: "Stack of car tires with an alloy wheel on top" },
  { id: "photo-1619642751034-765dfdf7c58e", alt: "Greasy hands using a metal wrench on a car engine" },
  { id: "photo-1702146713922-613313be011d", alt: "A tire with a wrench next to it" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  // Close the big photo with the Escape key, arrows to move between photos
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % photos.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const visible = photos.map((p, i) => ({ ...p, i })).filter((p) => !failed[p.id]);

  return (
    <main style={{ backgroundColor: "#1E1F22" }}>
      <section>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-10 md:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-0.5" style={{ backgroundColor: "#FFC800" }} />
            <span className="text-xs font-semibold uppercase" style={{ color: "#FFC800", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
              See Our Work
            </span>
          </div>
          <h1 className="font-bold uppercase leading-none" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(44px, 7vw, 84px)", color: "#F2F1ED" }}>
            Our <span style={{ color: "#FFC800" }}>Gallery</span>
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>
            A look at the kind of work we do every day, from quick oil changes to full engine jobs. Tap any photo to see it bigger.
          </p>
        </div>
      </section>

      <CheckeredDivider />

      <section style={{ backgroundColor: "#F2F1ED" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {visible.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.i)}
                className="group relative block w-full overflow-hidden rounded-lg text-left cursor-pointer"
                style={{ aspectRatio: "4 / 3", backgroundColor: "#2A2C30", boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }}
                aria-label={`Open photo: ${p.alt}`}
              >
                <img
                  src={u(p.id)}
                  alt={p.alt}
                  loading="lazy"
                  onError={() => setFailed((f) => ({ ...f, [p.id]: true }))}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <p className="mt-8 text-xs" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
            Sample photos from Unsplash.
          </p>

          <div className="text-center mt-12">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider rounded transition-colors duration-150"
              style={{ backgroundColor: "#FFC800", color: "#1E1F22", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6B400")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC800")}
            >
              Book a Repair
            </Link>
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: "rgba(15,16,18,0.94)" }}
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl leading-none px-3 py-1 rounded hover:text-[#FFC800]"
            aria-label="Close photo"
            onClick={() => setActive(null)}
          >
            &times;
          </button>
          <button
            type="button"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-4xl px-3 py-2 rounded hover:text-[#FFC800]"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}
          >
            &#8249;
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={full(photos[active].id)} alt={photos[active].alt} className="w-full max-h-[78vh] object-contain rounded" />
          </figure>
          <button
            type="button"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-4xl px-3 py-2 rounded hover:text-[#FFC800]"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % photos.length); }}
          >
            &#8250;
          </button>
        </div>
      )}
    </main>
  );
}
