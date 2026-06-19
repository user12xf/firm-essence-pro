import {
  Scale,
  Building2,
  Users,
  Gavel,
  Home,
  Briefcase,
  Globe2,
  Calculator,
  type LucideIcon,
} from "lucide-react";

export const FIRM = {
  name: "Thorne & Associates",
  partner: "Elias R. Thorne, Esq.",
  tagline: "Strategic counsel for high-stakes matters.",
  phone: "+1 (212) 555-0184",
  email: "counsel@thorne-legal.com",
  offices: [
    { city: "New York", line1: "200 Park Avenue, Suite 1400", line2: "New York, NY 10166" },
    { city: "London", line1: "45 Savile Row, Mayfair", line2: "London W1S 3QD" },
  ],
  hours: [
    { day: "Monday – Friday", time: "8:00 — 19:00" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
    { day: "Urgent matters", time: "24 / 7 hotline" },
  ],
};

export type PracticeArea = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  icon: LucideIcon;
  services: string[];
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "corporate",
    title: "Corporate Law",
    blurb: "M&A, governance, and complex commercial transactions.",
    description:
      "Advising boards, founders, and institutional investors on transactions where the cost of error is measured in nine figures and years of reputation.",
    icon: Building2,
    services: ["Mergers & acquisitions", "Corporate governance", "Shareholder disputes", "Joint ventures"],
  },
  {
    slug: "litigation",
    title: "Civil Litigation",
    blurb: "Bet-the-company trials and multi-district disputes.",
    description:
      "Trial-tested representation in commercial, contractual, and tort matters. Equally comfortable in federal court, state forums, and international arbitration.",
    icon: Gavel,
    services: ["Commercial disputes", "Class action defense", "Appellate practice", "Arbitration"],
  },
  {
    slug: "criminal",
    title: "Criminal Defense",
    blurb: "White-collar, regulatory, and federal defense.",
    description:
      "Discreet, intellectually rigorous defense for executives and professionals facing federal indictments, SEC actions, and internal investigations.",
    icon: Scale,
    services: ["White-collar defense", "Federal investigations", "SEC enforcement", "Internal inquiries"],
  },
  {
    slug: "family",
    title: "Family Law",
    blurb: "High-net-worth divorce and private family matters.",
    description:
      "Protecting generational wealth, business interests, and the privacy of the families that hold them. Always negotiated. Often quietly.",
    icon: Users,
    services: ["High-asset divorce", "Pre-nuptial agreements", "Custody arrangements", "Trust disputes"],
  },
  {
    slug: "real-estate",
    title: "Real Estate Law",
    blurb: "Acquisitions, development, and complex leasing.",
    description:
      "Commercial real estate counsel for institutional buyers, family offices, and developers across mixed-use, hospitality, and industrial assets.",
    icon: Home,
    services: ["Acquisitions", "Development & zoning", "Commercial leasing", "Title disputes"],
  },
  {
    slug: "employment",
    title: "Employment Law",
    blurb: "Executive contracts and workplace investigations.",
    description:
      "Counsel to executives, founders, and employers on the moments where employment law, equity, and reputation intersect.",
    icon: Briefcase,
    services: ["Executive separations", "Equity disputes", "Workplace investigations", "Restrictive covenants"],
  },
  {
    slug: "immigration",
    title: "Immigration Law",
    blurb: "Investor and executive visa strategy.",
    description:
      "Strategic immigration planning for global executives, investors, and the families that move with them.",
    icon: Globe2,
    services: ["EB-5 investor visas", "O-1 / L-1 strategy", "Citizenship & naturalization", "Compliance audits"],
  },
  {
    slug: "tax",
    title: "Tax Law",
    blurb: "Controversy, planning, and cross-border structuring.",
    description:
      "Resolving controversies with revenue authorities and structuring transactions to withstand scrutiny over decades — not quarters.",
    icon: Calculator,
    services: ["Tax controversy", "Cross-border planning", "Transfer pricing", "Estate & trust tax"],
  },
];

export const METRICS = [
  { value: 24, suffix: "+", label: "Years in practice" },
  { value: 480, suffix: "", label: "Matters resolved" },
  { value: 98, suffix: "%", label: "Favorable outcomes" },
  { value: 2.4, suffix: "B", prefix: "$", label: "Recovered or defended", decimals: 1 },
];

export const CASES = [
  {
    year: "2024",
    forum: "S.D.N.Y.",
    title: "Global Fintech v. Institutional Creditor",
    category: "Securities Litigation",
    outcome: "Summary judgment for defendant",
    summary:
      "Defended a publicly-traded fintech against a $450M securities-fraud claim spanning four years of disclosures. Obtained complete dismissal at summary judgment.",
    challenge: "Plaintiffs alleged systemic misstatements across nineteen earnings calls and a registration statement.",
    solution: "Reframed the matter around materiality, narrowed discovery, and forced an early Daubert posture on plaintiffs' expert.",
    result: "Full dismissal; appeal denied; no settlement paid.",
    valueLabel: "$450M dispute",
  },
  {
    year: "2023",
    forum: "Del. Ch.",
    title: "Fortune 100 Proxy Contest",
    category: "Corporate Governance",
    outcome: "Board reconstitution secured",
    summary:
      "Counseled a dissident shareholder coalition through an eight-month proxy contest that culminated in the seating of three independent directors.",
    challenge: "An entrenched board with sophisticated counsel, a friendly press, and the resources of a Fortune 100 incumbent.",
    solution: "Disciplined disclosure strategy, parallel Delaware litigation, and a tightly-controlled investor outreach program.",
    result: "Settlement reconstituted the board on terms favorable to our client.",
    valueLabel: "Fortune 100",
  },
  {
    year: "2023",
    forum: "Federal — DOJ",
    title: "Executive Federal Investigation",
    category: "White-Collar Defense",
    outcome: "Declination after 18-month inquiry",
    summary:
      "Represented a senior executive through a multi-agency federal investigation that resolved with a formal declination and no charges filed.",
    challenge: "Parallel SEC, DOJ, and internal investigation streams, with hostile media interest and shareholder pressure.",
    solution: "Built a privileged factual record, coordinated company counsel, and presented to prosecutors before charging decisions matured.",
    result: "Formal declination. Client returned to active leadership.",
    valueLabel: "Closed proceeding",
  },
  {
    year: "2022",
    forum: "ICC Arbitration",
    title: "Cross-Border Joint Venture Unwind",
    category: "International Arbitration",
    outcome: "$210M award for claimant",
    summary:
      "Prosecuted breach-of-JV claims across three jurisdictions, securing a $210M award and enforcement in two foreign forums.",
    challenge: "A sophisticated counter-party with assets distributed across opaque corporate structures.",
    solution: "Coordinated counsel in four jurisdictions, deployed targeted asset tracing, and prepared a forty-day evidentiary record.",
    result: "Award affirmed and enforced; net recovery within twelve months.",
    valueLabel: "$210M award",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Thorne has an uncanny ability to simplify complex legal structures for judges while maintaining intellectual rigor. He is the first call when the stakes are existential.",
    author: "General Counsel",
    role: "NYSE-Listed Technology Company",
  },
  {
    quote:
      "We brought him in after two prior firms had told us the case was unwinnable. He restructured the entire defense and produced an outcome we did not believe was possible.",
    author: "Founder & CEO",
    role: "Private Equity-Backed Issuer",
  },
  {
    quote:
      "Discreet, surgical, and entirely unflappable. Exactly the counsel you want across the table from a federal prosecutor on a Friday afternoon.",
    author: "Managing Partner",
    role: "Family Office, London",
  },
  {
    quote:
      "He treated a deeply personal matter with the seriousness of a Fortune 500 transaction — and gave us back our family's privacy in the process.",
    author: "Private Client",
    role: "High-Net-Worth Family",
  },
  {
    quote:
      "There is no substitute for trial experience. Thorne walked into the courtroom on day one as if he had tried that exact case a hundred times before.",
    author: "Lead Litigator",
    role: "AmLaw 50 Firm",
  },
];

export const POSTS = [
  {
    slug: "after-the-subpoena",
    title: "After the Subpoena: The First Seventy-Two Hours",
    excerpt:
      "What disciplined organizations do — and meticulously avoid — in the three days following service of a federal subpoena.",
    category: "White-Collar Defense",
    date: "May 14, 2026",
    minutes: 8,
  },
  {
    slug: "private-arbitration",
    title: "Why Sophisticated Parties Are Returning to Private Arbitration",
    excerpt:
      "Procedural discipline, confidentiality, and judicial bandwidth are reshaping the calculus for high-value commercial disputes.",
    category: "Litigation Strategy",
    date: "April 02, 2026",
    minutes: 6,
  },
  {
    slug: "delaware-fiduciary",
    title: "Delaware Fiduciary Duties After the 2025 Term",
    excerpt:
      "Three Chancery decisions that quietly redrew the boundaries of director liability and what boards should do next.",
    category: "Corporate Governance",
    date: "March 11, 2026",
    minutes: 11,
  },
  {
    slug: "investor-visa-2026",
    title: "Investor Visa Strategy in a Rebalanced 2026",
    excerpt:
      "Where the EB-5 program is heading after the latest regional center reauthorization and what families should weigh.",
    category: "Immigration",
    date: "February 20, 2026",
    minutes: 5,
  },
  {
    slug: "internal-investigations",
    title: "Designing an Internal Investigation That Withstands Discovery",
    excerpt:
      "Privilege, scoping, and reporting choices that determine whether your investigation becomes a shield — or an exhibit.",
    category: "Compliance",
    date: "January 06, 2026",
    minutes: 9,
  },
  {
    slug: "family-office-disputes",
    title: "Resolving Family-Office Disputes Without Litigation",
    excerpt:
      "Structured mediation and governance frameworks that resolve the matters wealth families would prefer never appeared in a docket.",
    category: "Private Wealth",
    date: "December 12, 2025",
    minutes: 7,
  },
];

export const AWARDS = [
  "Chambers Global — Band 1, Commercial Litigation",
  "The Legal 500 — Hall of Fame, Dispute Resolution",
  "Benchmark Litigation — National Practitioner of the Year",
  "Lawdragon 500 — Leading Litigator in America",
  "Best Lawyers in America — White-Collar Criminal Defense",
  "Super Lawyers — Top 100, New York Metro",
];

export const TIMELINE = [
  { year: "2002", title: "Yale Law School, J.D., magna cum laude", body: "Articles editor, Yale Law Journal." },
  { year: "2003", title: "Clerkship — U.S. Court of Appeals, Second Circuit", body: "Hon. José A. Cabranes." },
  { year: "2004", title: "Associate, AmLaw 10 firm", body: "Securities litigation and SEC enforcement defense." },
  { year: "2010", title: "Partner — Litigation Department", body: "Lead counsel on multi-jurisdictional commercial trials." },
  { year: "2015", title: "Lecturer in Law, Columbia Law School", body: "Advanced trial practice and federal evidence." },
  { year: "2019", title: "Founded Thorne & Associates", body: "Personal-brand practice focused on bet-the-company matters." },
];

export const FAQS = [
  {
    category: "Engaging the firm",
    items: [
      {
        q: "How do I begin working with Thorne & Associates?",
        a: "Most matters begin with a confidential consultation — either by referral from existing counsel or through our intake form. We will respond within one business day and, where appropriate, schedule a strategic briefing.",
      },
      {
        q: "Do you accept new clients directly?",
        a: "We accept a limited number of direct engagements each year, in addition to referral matters. All new clients are evaluated for conflicts and strategic fit before engagement.",
      },
      {
        q: "Is the initial consultation confidential?",
        a: "Yes. The consultation and all communications are protected by attorney-client privilege from first contact, regardless of whether we ultimately accept the engagement.",
      },
    ],
  },
  {
    category: "Fees and engagement",
    items: [
      {
        q: "How are fees structured?",
        a: "We work on hourly, flat-fee, and blended arrangements depending on the matter. Engagement letters set rates, scope, and billing cadence transparently before any work begins.",
      },
      {
        q: "Do you offer contingency arrangements?",
        a: "For select commercial recovery matters, yes. Eligibility is determined case-by-case after a substantive review of the underlying claim.",
      },
    ],
  },
  {
    category: "Working with us",
    items: [
      {
        q: "Will the senior partner personally handle my matter?",
        a: "Mr. Thorne personally leads every engagement. He is supported by a focused team of associates and specialists scaled to the demands of the matter.",
      },
      {
        q: "Do you handle matters outside New York?",
        a: "Yes. We are admitted in New York and the United Kingdom and routinely appear pro hac vice across U.S. federal courts and in international arbitration forums.",
      },
      {
        q: "What information should I have ready for our first call?",
        a: "A brief written summary of the matter, the names of any opposing parties or counsel, and any deadlines you are aware of. We will guide the rest of the conversation.",
      },
    ],
  },
];