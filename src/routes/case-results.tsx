import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatCounter } from "@/components/site/StatCounter";
import { CASES, METRICS } from "@/lib/site-data";

export const Route = createFileRoute("/case-results")({
  head: () => ({
    meta: [
      { title: "Case Results — Thorne & Associates" },
      {
        name: "description",
        content:
          "Selected case studies, outcomes, and statistics from Thorne & Associates' trial and arbitration practice.",
      },
      { property: "og:title", content: "Case Results — Thorne & Associates" },
      { property: "og:description", content: "Selected case studies and outcomes." },
      { property: "og:url", content: "/case-results" },
    ],
    links: [{ rel: "canonical", href: "/case-results" }],
  }),
  component: CaseResultsPage,
});

const PRACTICE_VOLUME = [
  { area: "Litigation", matters: 142 },
  { area: "Corporate", matters: 96 },
  { area: "White Collar", matters: 78 },
  { area: "Arbitration", matters: 64 },
  { area: "Family", matters: 52 },
  { area: "Tax", matters: 48 },
];

function CaseResultsPage() {
  return (
    <>
      <section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Case Results"
            title={"Outcomes, by | the record."}
            description="A representative sample of matters that may be publicly described. The majority of our engagements remain confidential by client direction."
          />
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i} className="text-center md:text-left">
              <p className="font-serif text-5xl text-navy md:text-6xl">
                <StatCounter value={m.value} prefix={m.prefix ?? ""} suffix={m.suffix ?? ""} decimals={m.decimals ?? 0} />
              </p>
              <p className="eyebrow mt-4">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Matters by Discipline" title={"A litigation-led | practice."} />
            <p className="mt-6 max-w-md text-foreground/65">
              A breakdown of resolved matters by primary discipline since 2019.
              Trial and arbitration work account for more than half of our docket.
            </p>
          </div>
          <Reveal className="lg:col-span-7">
            <div className="rounded-sm border border-foreground/10 bg-card p-6 md:p-8">
              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PRACTICE_VOLUME} margin={{ top: 16, right: 16, bottom: 8, left: -16 }}>
                    <CartesianGrid stroke="oklch(0.20 0.006 270 / 0.08)" vertical={false} />
                    <XAxis dataKey="area" tickLine={false} axisLine={false} tick={{ fill: "currentColor", fontSize: 11 }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fill: "currentColor", fontSize: 11 }} />
                    <Tooltip
                      cursor={{ fill: "oklch(0.66 0.07 80 / 0.08)" }}
                      contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 4, fontSize: 12 }}
                    />
                    <Bar dataKey="matters" fill="var(--navy)" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Selected Matters" title={"Case studies | in summary."} />
          <ol className="mt-16 space-y-px">
            {CASES.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i % 2}
                as="li"
                className="grid gap-8 border border-foreground/10 bg-card p-8 md:grid-cols-12 md:p-12"
              >
                <div className="md:col-span-3">
                  <p className="eyebrow !text-[10px]">{c.category}</p>
                  <p className="mt-3 font-mono text-xs text-foreground/50">
                    {c.year} · {c.forum}
                  </p>
                  <p className="mt-6 font-serif text-2xl italic text-gold">{c.valueLabel}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl text-navy md:text-3xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-foreground/65">{c.outcome}</p>
                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {[
                      ["Challenge", c.challenge],
                      ["Approach", c.solution],
                      ["Outcome", c.result],
                    ].map(([label, body]) => (
                      <div key={label}>
                        <p className="eyebrow !text-[10px]">{label}</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/70">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}