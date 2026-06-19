import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal
      className={
        (align === "center" ? "mx-auto text-center " : "") +
        "max-w-2xl space-y-5"
      }
    >
      {eyebrow ? (
        <div className="eyebrow flex items-center gap-3">
          <span className="rule-gold" aria-hidden />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2
        className={
          "font-serif text-balance text-4xl leading-[1.05] md:text-5xl " +
          (invert ? "text-ivory" : "text-navy")
        }
      >
        {title.split("|").map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="italic font-normal">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </h2>
      {description ? (
        <p
          className={
            "max-w-[52ch] text-pretty text-base leading-relaxed " +
            (invert ? "text-ivory/65" : "text-foreground/65")
          }
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}