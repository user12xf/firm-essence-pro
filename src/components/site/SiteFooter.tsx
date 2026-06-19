import { Link } from "@tanstack/react-router";
import { FIRM } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-3">
              <span className="rule-gold" aria-hidden /> Counsel
            </p>
            <h3 className="mt-6 font-serif text-3xl text-navy md:text-4xl">
              Securing your position begins with a single conversation.
            </h3>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal"
            >
              Request a private briefing
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="eyebrow">Offices</p>
              <ul className="mt-4 space-y-4 text-sm text-foreground/70">
                {FIRM.offices.map((o) => (
                  <li key={o.city}>
                    <p className="font-medium text-navy">{o.city}</p>
                    <p>{o.line1}</p>
                    <p>{o.line2}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li>
                  <a href={`tel:${FIRM.phone.replace(/[^\d+]/g, "")}`} className="hover:text-navy">
                    {FIRM.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${FIRM.email}`} className="hover:text-navy">
                    {FIRM.email}
                  </a>
                </li>
              </ul>
              <p className="eyebrow mt-8">Hours</p>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/70">
                {FIRM.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-foreground/50">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Navigate</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                {[
                  ["About", "/about"],
                  ["Practice Areas", "/practice-areas"],
                  ["Case Results", "/case-results"],
                  ["Testimonials", "/testimonials"],
                  ["Insights", "/insights"],
                  ["FAQ", "/faq"],
                  ["Contact", "/contact"],
                ].map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-navy">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-[11px] uppercase tracking-[0.18em] text-foreground/45 md:flex-row">
          <p>© {new Date().getFullYear()} {FIRM.name}. Attorney advertising.</p>
          <p>Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}