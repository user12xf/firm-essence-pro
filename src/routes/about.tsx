import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/attorney-portrait.jpeg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AWARDS, FIRM, TIMELINE } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${FIRM.partner} — ${FIRM.name}` },
      {
        name: "description",
        content: `Biography, education, and professional record of ${FIRM.partner}, founding partner of ${FIRM.name}.`,
      },
      { property: "og:title", content: `About ${FIRM.partner}` },
      { property: "og:description", content: "Trial lawyer for complex commercial, regulatory, and white-collar matters." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Discretion",
    body: "Most of our most significant outcomes will never be publicly reported. We engage on that basis from the first call.",
  },
  {
    title: "Preparation",
    body: "We try every matter as if it will go the distance — because the matters that settle on favorable terms are precisely the ones that could.",
  },
  {
    title: "Candor",
    body: "We tell clients what we believe, not what they wish to hear. The first conversation will always be the most useful one.",
  },
];

const MEMBERSHIPS = [
  "New York State Bar Association",
  "American Bar Association — Litigation Section",
  "Federal Bar Council",
  "American College of Trial Lawyers (Fellow)",
  "International Bar Association",
  "American Law Institute (Member)",
];

function AboutPage() {
  return (
    <>
      <PortraitHero />
      <BiographySection />
      <TimelineSection />
      <ValuesSection />
      <CredentialsSection />
    </>
  );
}

function PortraitHero() {
  return (
    <section className="pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-3">
            <span className="rule-gold" aria-hidden /> The Partner
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-balance text-navy md:text-7xl">
            {FIRM.partner.split(",")[0]},
            <br />
            <span className="italic font-normal">trial lawyer.</span>
          </h1>
          <p className="mt-8 max-w-[55ch] text-pretty text-lg leading-relaxed text-foreground/70">
            For nearly a quarter century, Mr. Thorne has represented public
            companies, private investors, and individuals in the matters they
            cannot afford to lose — and almost never speak publicly about.
          </p>
        </Reveal>
        <Reveal delay={1} className="lg:col-span-5">
          <div className="overflow-hidden rounded-sm shadow-elegant">
            <img
              src={portrait}
              alt={FIRM.partner}
              width={896}
              height={1120}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BiographySection() {
  return (
    <section className="border-y border-foreground/10 bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Biography" title={"A trial lawyer's | record."} />
        </div>
        <div className="space-y-6 text-base leading-relaxed text-foreground/75 lg:col-span-8 lg:text-lg">
          <p>
            Elias Thorne began his legal career as a clerk on the United States
            Court of Appeals for the Second Circuit before joining the
            litigation department of an AmLaw 10 firm in New York. He made
            partner six years later, leading a series of bet-the-company trials
            for technology, financial, and industrial issuers.
          </p>
          <p>
            In 2019 he founded {FIRM.name}, a personal-brand practice designed
            around principal-led representation in matters where institutional
            volume and committee-driven decision-making are themselves the risk.
          </p>
          <p>
            He has been recognized by Chambers Global, The Legal 500, Benchmark
            Litigation, and Lawdragon as one of the leading commercial
            litigators in the United States. He teaches advanced trial practice
            at Columbia Law School and serves on the board of two non-profits.
          </p>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Experience" title={"Two decades of | distinction."} />
        <ol className="mt-16 grid gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i % 3} className="group bg-card p-8 transition-colors hover:bg-secondary/40">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-3xl text-gold">{t.year}</span>
                <h3 className="font-serif text-xl text-navy">{t.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">{t.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-navy py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Mission & Values"
          title={"Three commitments | we make | to every client."}
          invert
        />
        <div className="mt-16 grid gap-px bg-ivory/10 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i} className="bg-navy p-10 transition-colors hover:bg-ivory/[0.04]">
              <span className="font-mono text-xs text-gold">0{i + 1}</span>
              <h3 className="mt-6 font-serif text-2xl text-ivory">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/60">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredentialsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Awards & Recognition</p>
          <ul className="mt-8 space-y-4">
            {AWARDS.map((a) => (
              <li key={a} className="border-b border-foreground/10 pb-4 font-serif text-lg italic text-foreground/75">
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Memberships</p>
          <ul className="mt-8 space-y-4">
            {MEMBERSHIPS.map((m) => (
              <li key={m} className="border-b border-foreground/10 pb-4 font-serif text-lg italic text-foreground/75">
                {m}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-medium text-ivory transition-colors hover:bg-charcoal"
          >
            Request introduction
          </Link>
        </div>
      </div>
    </section>
  );
}
