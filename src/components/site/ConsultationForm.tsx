import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  matter: z.string().min(1, "Select a matter category"),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters of context")
    .max(2000),
});

type FormValues = z.infer<typeof schema>;

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", matter: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    // eslint-disable-next-line no-console
    console.info("Consultation request", values);
    toast.success("Inquiry received. Our office will respond within one business day.");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-foreground/10 bg-card p-10 text-center">
        <CheckCircle2 className="mx-auto size-10 text-gold" />
        <h3 className="mt-6 font-serif text-2xl text-navy">Inquiry received.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm text-foreground/65">
          A member of our office will respond within one business day. All
          communications are confidential.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:text-navy"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full border-0 border-b border-foreground/15 bg-transparent px-0 py-3 text-sm text-navy placeholder:text-foreground/40 focus:border-gold focus:outline-none transition-colors";
  const labelClass =
    "eyebrow mb-2 block";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"grid gap-6 " + (compact ? "" : "md:grid-cols-2")}
      noValidate
    >
      <div>
        <label htmlFor="name" className={labelClass}>Full name</label>
        <input id="name" autoComplete="name" placeholder="Arthur Sterling" className={fieldClass} {...register("name")} />
        {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" type="email" autoComplete="email" placeholder="you@firm.com" className={fieldClass} {...register("email")} />
        {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
        <input id="phone" autoComplete="tel" placeholder="+1 (212) 555-0100" className={fieldClass} {...register("phone")} />
      </div>
      <div>
        <label htmlFor="matter" className={labelClass}>Matter category</label>
        <select id="matter" defaultValue="" className={fieldClass} {...register("matter")}>
          <option value="" disabled>Select category…</option>
          {PRACTICE_AREAS.map((p) => (
            <option key={p.slug} value={p.title}>{p.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
        {errors.matter && <p className="mt-2 text-xs text-destructive">{errors.matter.message}</p>}
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <label htmlFor="message" className={labelClass}>Brief overview of the matter</label>
        <textarea
          id="message"
          rows={4}
          placeholder="A few sentences on the nature of the matter, the parties involved, and any deadlines."
          className={fieldClass + " resize-none"}
          {...register("message")}
        />
        {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-navy px-8 py-4 text-sm font-medium text-ivory transition-colors hover:bg-charcoal disabled:opacity-60 md:w-auto"
        >
          {isSubmitting ? "Sending…" : "Request private briefing"}
        </button>
        <p className="mt-4 text-xs text-foreground/50">
          Submissions are confidential and protected by attorney-client privilege.
        </p>
      </div>
    </form>
  );
}