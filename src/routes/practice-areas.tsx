import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PRACTICE_AREAS } from "@/lib/site-data";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Thorne & Associates" },
      {
        name: "description",
        content:
          "Eight disciplines led personally by the founding partner: corporate, litigation, criminal defense, family, real estate, employment, immigration, and tax law.",
      },
      { property: "og:title", content: "Practice Areas — Thorne & Associates" },
      { property: "og:description", content: "Eight disciplines led personally by the founding partner." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <>
      <section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Practice Areas"
            title={"A focused firm with | broad jurisdictional | reach."}
            description="Eight disciplines, one principal. Every engagement is shaped by the founding partner and supported by senior-weighted teams."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <ul className="grid gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2">
            {PRACTICE_AREAS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.slug}
                  delay={i % 3}
                  as="li"
                  className="group bg-card p-10 transition-colors duration-500 hover:bg-secondary/50"
                >
                  <div id={p.slug} className="-mt-32 pt-32" aria-hidden />
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-full border border-foreground/15 text-gold">
                        <Icon className="size-5" strokeWidth={1.4} />
                      </span>
                      <h2 className="font-serif text-2xl text-navy md:text-3xl">{p.title}</h2>
                    </div>
                    <span className="font-mono text-xs text-foreground/40">0{i + 1}</span>
                  </div>
                  <p className="mt-6 max-w-[55ch] text-pretty text-base leading-relaxed text-foreground/70">
                    {p.description}
                  </p>
                  <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-center gap-3 text-sm text-foreground/70">
                        <Check className="size-3.5 text-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-navy"
                  >
                    Discuss this matter <ArrowUpRight className="size-3.5" />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-navy py-24 text-center text-ivory">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl">
            Don't see your matter listed?
          </h2>
          <p className="mt-4 text-ivory/65">
            We routinely advise on bespoke matters that fall between traditional
            practice lines. The first conversation will tell us both whether
            we're the right firm.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-charcoal transition-colors hover:bg-ivory"
          >
            Inquire about your matter
          </Link>
        </div>
      </section>
    </>
  );
}