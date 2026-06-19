import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Thorne & Associates" },
      {
        name: "description",
        content:
          "Frequently asked questions about engaging Thorne & Associates: intake, fees, confidentiality, and how matters are staffed.",
      },
      { property: "og:title", content: "FAQ — Thorne & Associates" },
      { property: "og:description", content: "How we engage, fees, and how matters are staffed." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.flatMap((g) =>
            g.items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Frequently Asked"
            title={"Questions we are | asked most | often."}
            description="If your question is not here, contact our office directly — we will respond within one business day."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          {FAQS.map((group, gi) => (
            <Reveal key={group.category} delay={gi} className="lg:col-span-12">
              <div className="grid gap-10 border-t border-foreground/10 pt-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="eyebrow">Section {String(gi + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">{group.category}</h2>
                </div>
                <div className="lg:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    {group.items.map((it, i) => (
                      <AccordionItem
                        key={i}
                        value={`${gi}-${i}`}
                        className="border-b border-foreground/10"
                      >
                        <AccordionTrigger className="py-6 text-left font-serif text-lg text-navy hover:no-underline md:text-xl">
                          {it.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-8 text-base leading-relaxed text-foreground/70">
                          {it.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}