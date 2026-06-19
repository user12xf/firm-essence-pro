import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export function TestimonialCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full px-2 md:basis-[70%] lg:basis-[55%]"
            >
              <div className="flex h-full flex-col justify-between rounded-sm border border-foreground/10 bg-card p-8 md:p-12">
                <Quote className="size-7 text-gold" />
                <p className="mt-6 font-serif text-2xl leading-snug text-navy md:text-[26px]">
                  “{t.quote}”
                </p>
                <div className="mt-10 border-t border-foreground/10 pt-5">
                  <p className="text-sm font-semibold text-navy">{t.author}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={
                "h-px transition-all " +
                (i === index ? "w-12 bg-navy" : "w-6 bg-foreground/20")
              }
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => embla?.scrollPrev()}
            aria-label="Previous testimonial"
            className="grid size-11 place-items-center rounded-full border border-foreground/10 text-navy transition-colors hover:bg-navy hover:text-ivory"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => embla?.scrollNext()}
            aria-label="Next testimonial"
            className="grid size-11 place-items-center rounded-full border border-foreground/10 text-navy transition-colors hover:bg-navy hover:text-ivory"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}