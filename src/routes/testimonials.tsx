import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Thorne & Associates" },
      {
        name: "description",
        content:
          "Client reviews and success stories from general counsel, founders, and family offices represented by Thorne & Associates.",
      },
      { property: "og:title", content: "Testimonials — Thorne & Associates" },
      { property: "og:description", content: "Reviews from general counsel, founders, and family offices." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Client Confidence"
            title={"In the words | of those | we have represented."}
            description="Selected testimonials, edited only for brevity and to preserve client confidentiality."
          />
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
              <span className="ml-3 text-sm font-medium text-navy">4.98 / 5.00</span>
              <span className="ml-2 text-sm text-foreground/55">across 142 client reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialCarousel />
        </div>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="All Reviews" title={"More from | our clients."} />
          <div className="mt-16 grid gap-px bg-foreground/10 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i % 2} className="bg-card p-10">
                <Quote className="size-6 text-gold" />
                <p className="mt-5 font-serif text-xl leading-snug text-navy">“{t.quote}”</p>
                <div className="mt-8 border-t border-foreground/10 pt-5">
                  <p className="text-sm font-semibold text-navy">{t.author}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}