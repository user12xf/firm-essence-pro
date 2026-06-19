import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Thorne & Associates" },
      {
        name: "description",
        content:
          "Legal commentary, litigation strategy, and regulatory updates from Thorne & Associates.",
      },
      { property: "og:title", content: "Insights — Thorne & Associates" },
      { property: "og:description", content: "Legal commentary and regulatory updates." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = POSTS.filter((p) => {
    const inCat = active === "All" || p.category === active;
    const q = query.trim().toLowerCase();
    const inQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return inCat && inQuery;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <section className="pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Insights"
            title={"Commentary on | the matters | shaping our work."}
            description="Litigation strategy, regulatory shifts, and the practical questions our clients ask most often."
          />
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={
                    "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors " +
                    (active === c
                      ? "border-navy bg-navy text-ivory"
                      : "border-foreground/15 text-foreground/65 hover:border-navy hover:text-navy")
                  }
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative w-full md:max-w-xs">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles"
                className="w-full rounded-full border border-foreground/15 bg-transparent py-2 pl-10 pr-4 text-sm focus:border-gold focus:outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="group block border-y border-foreground/10 py-12">
              <div className="grid gap-8 md:grid-cols-12 md:items-end">
                <div className="md:col-span-3">
                  <p className="eyebrow !text-[10px]">{featured.category}</p>
                  <p className="mt-3 font-mono text-xs text-foreground/45">{featured.date} · {featured.minutes} min read</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-3xl text-navy transition-colors group-hover:text-gold md:text-5xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-pretty text-foreground/65">{featured.excerpt}</p>
                  <Link to="/insights" className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Read article →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">
          {rest.length === 0 ? (
            <p className="text-center text-foreground/55">No articles match your filters.</p>
          ) : (
            <ul className="grid gap-px bg-foreground/10 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal
                  key={p.slug}
                  delay={i % 3}
                  as="li"
                  className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-secondary/50"
                >
                  <p className="eyebrow !text-[10px]">{p.category}</p>
                  <h3 className="mt-6 font-serif text-xl text-navy transition-colors group-hover:text-gold md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/65">{p.excerpt}</p>
                  <p className="mt-auto pt-8 font-mono text-[11px] text-foreground/45">
                    {p.date} · {p.minutes} min read
                  </p>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}