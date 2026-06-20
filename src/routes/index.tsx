import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, ShieldCheck, Sparkles } from "lucide-react";
import portrait from "@/assets/attorney-portrait.jpeg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatCounter } from "@/components/site/StatCounter";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { AWARDS, CASES, FIRM, METRICS, PRACTICE_AREAS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${FIRM.name} — Strategic Legal Counsel` },
      {
        name: "description",
        content:
          "Personal-brand law practice for complex litigation, regulatory defense, and high-stakes advisory. Confidential consultations by appointment.",
      },
      { property: "og:title", content: `${FIRM.name} — Strategic Legal Counsel` },
      { property: "og:description", content: "Confidential counsel for bet-the-company matters." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <PracticeAreasSection />
      <WhyChooseSection />
      <FeaturedCasesSection />
      <TestimonialsSection />
      <AwardsSection />
      <ConsultationCTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 md:pt-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-3">
            <span className="rule-gold" aria-hidden /> White-Collar Defense & Strategic Advisory
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-balance text-navy md:text-7xl lg:text-[88px]">
            Rigorous advocacy
            <br />
            <span className="italic font-normal">for extraordinary cases.</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-pretty text-lg leading-relaxed text-foreground/70">
            {FIRM.name} is the personal-brand practice of {FIRM.partner} — a trial
            lawyer trusted by boards, founders, and families when the matter is
            consequential and the margin for error is zero.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-navy py-4 pl-7 pr-3 text-sm font-medium text-ivory transition-colors hover:bg-charcoal"
            >
              Book a confidential consultation
              <span className="grid size-8 place-items-center rounded-full bg-ivory/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium text-navy transition-colors hover:border-navy"
            >
              View practice areas
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["AB", "CK", "TM"].map((m, i) => (
                <span
                  key={m}
                  className={
                    "grid size-10 place-items-center rounded-full border-2 border-ivory font-serif text-xs text-ivory shadow " +
                    (i === 0 ? "bg-navy" : i === 1 ? "bg-foreground/70" : "bg-gold/90")
                  }
                >
                  {m}
                </span>
              ))}
            </div>
            <p className="text-sm text-foreground/55">
              Trusted by Fortune 500 general counsel and family offices in three jurisdictions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={2} className="lg:col-span-5">
          <div className="relative">
            <div className="overflow-hidden rounded-sm bg-secondary shadow-elegant">
              <img
                src={portrait}
                alt={`${FIRM.partner}, founding partner of ${FIRM.name}`}
                width={896}
                height={1120}
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden bg-ivory p-7 shadow-xl ring-1 ring-foreground/10 sm:block">
              <div className="grid grid-cols-2 divide-x divide-foreground/10">
                <div className="pr-7 text-center">
                  <p className="font-serif text-3xl text-navy">24+</p>
                  <p className="eyebrow mt-2 !text-[10px]">Years experience</p>
                </div>
                <div className="pl-7 text-center">
                  <p className="font-serif text-3xl text-navy">$2.4B</p>
                  <p className="eyebrow mt-2 !text-[10px]">Recovered or defended</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-foreground/10 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 md:py-20">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i} className="text-center md:text-left">
            <p className="font-serif text-5xl text-navy md:text-6xl">
              <StatCounter
                value={m.value}
                prefix={m.prefix ?? ""}
                suffix={m.suffix ?? ""}
                decimals={m.decimals ?? 0}
              />
            </p>
            <p className="eyebrow mt-4">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PracticeAreasSection() {
  const featured = PRACTICE_AREAS.slice(0, 6);
  return (
    <section className="bg-navy py-28 md:py-36 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Core Disciplines"
            title={"A multidisciplinary | practice | built on trial experience."}
            description="Eight disciplines, one principal. Every matter is led personally by the founding partner and supported by a focused, senior-weighted team."
            invert
          />
          <Link
            to="/practice-areas"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-ivory"
          >
            View all practice areas →
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.slug} className="group">
                <Link
                  to="/practice-areas"
                  hash={p.slug}
                  className="flex h-full flex-col gap-6 bg-navy p-10 transition-colors duration-500 hover:bg-ivory/[0.04]"
                >
                  <Icon className="size-7 text-gold" strokeWidth={1.4} />
                  <h3 className="font-serif text-2xl text-ivory">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ivory/55">{p.blurb}</p>
                  <span className="mt-auto text-[11px] font-semibold uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Explore →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Personally led",
      body: "Every matter is principal-led from first call to final order. No relay handoffs to junior teams.",
    },
    {
      icon: Award,
      title: "Trial-tested",
      body: "Twenty-four years of federal and state trial work — including the matters most firms would settle.",
    },
    {
      icon: Sparkles,
      title: "Absolute discretion",
      body: "Engagements are confidential by default. Many of our most significant wins will never be reported.",
    },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Clients Choose Us"
          title={"The standard | clients expect | when the stakes are unforgiving."}
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i} className="rounded-sm border border-foreground/10 bg-card p-10 transition-all hover:border-gold/40 hover:shadow-elegant">
                <Icon className="size-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-8 font-serif text-2xl text-navy">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedCasesSection() {
  return (
    <section className="bg-secondary/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Selected Outcomes"
              title={"Proven results, | handled quietly."}
              description="A representative sample of recent matters. Many engagements remain confidential by client direction."
            />
            <div className="mt-10 border-l-2 border-gold bg-gold-soft p-6">
              <p className="font-serif text-base italic leading-relaxed text-navy">
                “The first call when the stakes are existential.”
              </p>
              <p className="eyebrow mt-4 !text-[10px]">Chambers Global, 2025</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
              {CASES.slice(0, 4).map((c) => (
                <li key={c.title}>
                  <Link
                    to="/case-results"
                    className="group grid grid-cols-12 items-center gap-6 py-7 transition-colors hover:bg-card/60"
                  >
                    <span className="col-span-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45 md:col-span-2">
                      {c.year} · {c.forum}
                    </span>
                    <div className="col-span-9 md:col-span-7">
                      <p className="eyebrow !text-[10px]">{c.category}</p>
                      <p className="mt-2 font-serif text-xl text-navy transition-colors group-hover:text-gold md:text-2xl">
                        {c.title}
                      </p>
                      <p className="mt-1 text-sm text-foreground/55">{c.outcome}</p>
                    </div>
                    <span className="col-span-12 text-right font-serif italic text-foreground/70 md:col-span-3">
                      {c.valueLabel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/case-results"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-navy"
              >
                View all case results →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client Confidence"
          title={"In the words | of those | who have engaged us."}
        />
        <div className="mt-16">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="border-y border-foreground/10 bg-card py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-center">Recognition</p>
        <ul className="mt-10 grid gap-x-10 gap-y-6 text-center md:grid-cols-3">
          {AWARDS.map((a) => (
            <li
              key={a}
              className="font-serif text-base italic text-foreground/65 md:text-lg"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ConsultationCTASection() {
  return (
    <section className="bg-navy py-28 text-ivory md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow !text-gold">A Single Conversation</p>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory md:text-6xl">
          The matter you are weighing
          <br />
          <span className="italic font-normal">deserves an unhurried hearing.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-ivory/65">
          Engagements begin with a confidential consultation. We respond to every
          qualified inquiry within one business day.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-charcoal transition-colors hover:bg-ivory"
          >
            Request a private briefing
          </Link>
          <a
            href={`tel:${FIRM.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-8 py-4 text-sm font-medium text-ivory transition-colors hover:border-gold"
          >
            Call {FIRM.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
