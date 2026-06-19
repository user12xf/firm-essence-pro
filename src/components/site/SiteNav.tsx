import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FIRM } from "@/lib/site-data";

const NAV = [
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Case Results", to: "/case-results" },
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Insights", to: "/insights" },
  { label: "FAQ", to: "/faq" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-50 w-full border-b transition-colors duration-500 " +
        (scrolled
          ? "border-foreground/10 bg-ivory/85 backdrop-blur-md"
          : "border-transparent bg-ivory/50 backdrop-blur-sm")
      }
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="group flex items-baseline gap-2 text-navy">
          <span className="font-serif text-xl font-semibold tracking-tight">
            {FIRM.name.split(" & ")[0]}
          </span>
          <span className="font-serif text-xl italic text-gold transition-colors group-hover:text-navy">
            & Associates
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-navy py-2.5 pl-5 pr-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal sm:inline-flex"
          >
            Book Consultation
            <span className="grid size-6 place-items-center rounded-full bg-ivory/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight className="size-3.5" />
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-foreground/10 text-navy lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-foreground/10 bg-ivory lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-medium text-ivory"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}