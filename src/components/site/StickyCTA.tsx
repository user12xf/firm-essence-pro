import { useRouterState, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import { AnimatePresence, motion } from "motion/react";

export function StickyCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="sticky-cta"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4"
      >
        <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-navy py-2 pl-2 pr-4 text-ivory shadow-2xl ring-1 ring-ivory/10">
          <a
            href={`tel:${FIRM.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 rounded-full bg-ivory/10 px-3 py-2 text-xs font-medium transition-colors hover:bg-ivory/15"
          >
            <Phone className="size-3.5 text-gold" />
            <span className="hidden sm:inline">{FIRM.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <span className="hidden h-5 w-px bg-ivory/15 sm:block" aria-hidden />
          <Link
            to="/contact"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:text-gold"
          >
            Book consultation
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}