import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { FIRM } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Thorne & Associates" },
      {
        name: "description",
        content:
          "Request a confidential consultation with Thorne & Associates. Offices in New York and London. Response within one business day.",
      },
      { property: "og:title", content: "Book a Consultation — Thorne & Associates" },
      { property: "og:description", content: "Confidential consultations by appointment." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Contact"
            title={"Begin a | confidential | conversation."}
            description="Submissions are protected by attorney-client privilege from first contact. We respond to every qualified inquiry within one business day."
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-12">
              <ContactBlock icon={Phone} label="Direct line" value={FIRM.phone} href={`tel:${FIRM.phone.replace(/[^\d+]/g, "")}`} />
              <ContactBlock icon={Mail} label="Email" value={FIRM.email} href={`mailto:${FIRM.email}`} />
              <div>
                <p className="eyebrow flex items-center gap-2"><MapPin className="size-3.5 text-gold" /> Offices</p>
                <ul className="mt-4 space-y-5 text-sm">
                  {FIRM.offices.map((o) => (
                    <li key={o.city}>
                      <p className="font-serif text-xl text-navy">{o.city}</p>
                      <p className="text-foreground/65">{o.line1}</p>
                      <p className="text-foreground/65">{o.line2}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow flex items-center gap-2"><Clock className="size-3.5 text-gold" /> Hours</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/70">
                  {FIRM.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 border-b border-foreground/10 pb-1.5">
                      <span>{h.day}</span>
                      <span className="text-foreground/50">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <div className="rounded-sm border border-foreground/10 bg-card p-8 md:p-12">
              <h3 className="font-serif text-2xl text-navy md:text-3xl">Request a private briefing</h3>
              <p className="mt-2 text-sm text-foreground/65">
                A few details so we can route your inquiry appropriately.
              </p>
              <div className="mt-8">
                <ConsultationForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-t border-foreground/10">
        <div
          className="h-[360px] w-full"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.045 265) 0%, oklch(0.20 0.006 270) 100%)",
          }}
        >
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-8 px-6 text-ivory">
            <div>
              <p className="eyebrow !text-gold">Visit</p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">200 Park Avenue, New York</h3>
              <p className="mt-3 text-ivory/65">By appointment only · Concierge will receive you on the 14th floor</p>
            </div>
            <div className="hidden md:block">
              <a
                href="https://maps.google.com/?q=200+Park+Avenue+New+York"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-6 py-3 text-sm font-medium hover:border-gold"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBlock({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <p className="eyebrow flex items-center gap-2"><Icon className="size-3.5 text-gold" /> {label}</p>
      <a href={href} className="mt-3 inline-block font-serif text-2xl text-navy transition-colors hover:text-gold">
        {value}
      </a>
    </div>
  );
}