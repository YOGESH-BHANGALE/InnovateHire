export type Accent = "violet" | "cyan" | "ink";
export type RoutePath = "/" | "/about" | "/services" | "/products" | "/contact" | "/case-studies";
export type ProductSlug = "medihive" | "vyaparhive" | "resumehive";
export type ServiceSlug = "ai" | "web" | "software" | "brand-growth" | "app" | "seo" | "graphic-design";
export type CaseStudyCategory = "all" | "product" | "healthcare" | "business-ops" | "career" | "growth";

export type ProductDetailVariant = "care-graph" | "control-ledger" | "career-signal";
export type ProductDetailIcon = "calendar" | "records" | "pharmacy" | "ledger" | "reconcile" | "report" | "structure" | "role-fit" | "export";

export interface Product {
  slug: ProductSlug;
  name: string;
  category: string;
  description: string;
  accent: Accent;
  image?: string;
  features: string[];
}

export interface ProductSignal {
  label: string;
  description: string;
  accent: Accent;
}

export interface ProductCapability {
  title: string;
  description: string;
  accent: Accent;
  icon: ProductDetailIcon;
  layout: "large" | "stacked" | "wide";
  metric?: { label: string; value: string }[];
}

export interface ProductDetailCta {
  eyebrow: string;
  title: string;
  description: string;
  inputLabel: string;
  placeholder: string;
  submitLabel: string;
  note: string;
}

export interface ProductDetailBase extends Product {
  variant: ProductDetailVariant;
  hero: {
    eyebrow: string;
    headline: string;
    emphasis: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  signals: ProductSignal[];
  capabilities: ProductCapability[];
  trustItems: string[];
  cta: ProductDetailCta;
}

export interface CareGraphDetail extends ProductDetailBase {
  variant: "care-graph";
  graph: {
    steps: Array<{ index: string; title: string; description: string; accent: Accent }>;
    nodes: Array<{ id: "provider" | "patient" | "pharmacy"; label: string; icon: ProductDetailIcon; accent: Accent }>;
  };
}

export interface ControlLedgerDetail extends ProductDetailBase {
  variant: "control-ledger";
  trace: {
    stats: Array<{ value: string; label: string }>;
    features: Array<{ title: string; description: string; accent: Accent; span: "half" | "full" }>;
  };
}

export interface CareerSignalDetail extends ProductDetailBase {
  variant: "career-signal";
  process: Array<{ title: string; description: string; accent: Accent }>;
}

export type ProductDetail = CareGraphDetail | ControlLedgerDetail | CareerSignalDetail;

export interface Service {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  description: string;
  shortDescription: string;
  icon: "brain" | "globe" | "code" | "sparkles" | "smartphone" | "chart" | "palette";
  accent: Accent;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: Exclude<CaseStudyCategory, "all">;
  summary: string;
  year: string;
  metric: string;
  accent: Accent;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: Accent;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  socials: { label: string; href: string }[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export const services: Service[] = [
  {
    slug: "ai",
    title: "AI services for decisions ahead.",
    eyebrow: "Intelligence layer",
    description: "Custom AI workflows, predictive systems, and automation that make complex operations easier to read and act on.",
    shortDescription: "LLMs, RAG, and automation with a point of view.",
    icon: "brain",
    accent: "violet",
  },
  {
    slug: "web",
    title: "Website Development",
    eyebrow: "Digital flagship",
    description: "High-performance digital flagships and portals built for clarity, speed, and conversion.",
    shortDescription: "A sharper first impression with stronger foundations.",
    icon: "globe",
    accent: "violet",
  },
  {
    slug: "software",
    title: "Software Development",
    eyebrow: "Product foundation",
    description: "Resilient product foundations for teams that need the next release to hold up.",
    shortDescription: "Systems designed for the release after the next one.",
    icon: "code",
    accent: "cyan",
  },
  {
    slug: "brand-growth",
    title: "Brand, Interface & Growth Systems",
    eyebrow: "Signal design",
    description: "Visual identity, product experience, and SEO foundations that connect attention to action.",
    shortDescription: "A consistent point of view from first glance to next click.",
    icon: "sparkles",
    accent: "violet",
  },
  {
    slug: "app",
    title: "App Development",
    eyebrow: "Mobile layer",
    description: "Focused mobile experiences for Android, iOS, and cross-platform products.",
    shortDescription: "Useful mobile moments, made lighter.",
    icon: "smartphone",
    accent: "cyan",
  },
  {
    slug: "seo",
    title: "Website SEO",
    eyebrow: "Discovery layer",
    description: "Technical foundations and content signals that help the right people find you.",
    shortDescription: "Search visibility that compounds instead of shouts.",
    icon: "chart",
    accent: "violet",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    eyebrow: "Visual language",
    description: "Identity systems, campaign visuals, and social assets with a consistent point of view.",
    shortDescription: "A visual system people remember when the tab is closed.",
    icon: "palette",
    accent: "cyan",
  },
];

export const products: Product[] = [
  {
    slug: "medihive",
    name: "MediHive",
    category: "Healthcare",
    description: "An integrated healthcare platform connecting patients, doctors, and pharmacies through secure digital links.",
    accent: "violet",
    image: "https://innovatehive.in/images/products/healthsync.jpg",
    features: ["Secure patient-doctor links", "Pharmacy-ready workflows", "Care signals in one view"],
  },
  {
    slug: "vyaparhive",
    name: "VyaparHive",
    category: "Business ops",
    description: "Next-generation accounting and financial management for enterprises that value transparency and velocity.",
    accent: "cyan",
    image: "https://innovatehive.in/images/products/financeflow.jpg",
    features: ["Live operating clarity", "Faster financial decisions", "Built for growing teams"],
  },
  {
    slug: "resumehive",
    name: "ResumeHive",
    category: "Career",
    description: "An ATS-friendly resume builder that turns experience into a clearer route toward high-impact roles.",
    accent: "violet",
    image: "https://innovatehive.in/images/products/Resumehive.jpg",
    features: ["Signal-first templates", "ATS-friendly structure", "Sharper career momentum"],
  },
];

const productBySlug = (slug: ProductSlug) => {
  const product = products.find((item) => item.slug === slug);
  if (!product) throw new Error(`Unknown product: ${slug}`);
  return product;
};

const detailBase = <T extends ProductDetail>(slug: ProductSlug, detail: Omit<T, keyof Product>): T => ({
  ...productBySlug(slug),
  ...detail,
} as T);

export const productDetails: ProductDetail[] = [
  detailBase<CareGraphDetail>("medihive", {
    variant: "care-graph",
    hero: {
      eyebrow: "V4.0 release",
      headline: "Care that stays",
      emphasis: "connected.",
      description: "MediHive bridges the gap between patients, practitioners, and pharmacies through a unified care infrastructure built for the next era of medicine.",
      primaryCta: "Request a care walkthrough",
      secondaryCta: "View the care graph",
      imageAlt: "MediHive unified care dashboard",
    },
    signals: [
      { label: "Patient timeline", description: "One view of the journey", accent: "violet" },
      { label: "Provider handoff", description: "Verified care transitions", accent: "cyan" },
      { label: "Pharmacy sync", description: "Inventory-aware prescriptions", accent: "violet" },
      { label: "Live telemetry", description: "Care signals in motion", accent: "cyan" },
    ],
    capabilities: [
      { title: "Smart Appointments", description: "Advanced scheduling that prioritizes clinic flow and urgent interventions with clear clinical signals.", accent: "violet", icon: "calendar", layout: "large", metric: [{ label: "Latency", value: "0.4ms" }, { label: "Accuracy", value: "99.9%" }] },
      { title: "Unified Records", description: "A singular source of truth for patient history, diagnostic imaging, and pharmacy logs.", accent: "cyan", icon: "records", layout: "stacked" },
      { title: "Pharmacy Sync", description: "Automated e-prescriptions with direct inventory awareness at patient-preferred local pharmacies.", accent: "violet", icon: "pharmacy", layout: "wide" },
    ],
    trustItems: ["Secure links", "Role-based access", "One care timeline"],
    cta: { eyebrow: "Join the ecosystem", title: "Build care people can navigate.", description: "Give every handoff a clearer signal, from first intake to the pharmacy door.", inputLabel: "Clinic or practice email", placeholder: "Enter clinic or practice email", submitLabel: "Request demo", note: "Trusted by 120+ medical centers globally." },
    graph: {
      steps: [
        { index: "01", title: "Patient Intake Intelligence", description: "Automated triaging and demographic verification before the first consultation begins.", accent: "violet" },
        { index: "02", title: "Provider Handoff Logs", description: "Encrypted handoff memos and vital sync between primary care and specialized networks.", accent: "cyan" },
      ],
      nodes: [
        { id: "provider", label: "Provider", icon: "records", accent: "violet" },
        { id: "patient", label: "Patient", icon: "role-fit", accent: "ink" },
        { id: "pharmacy", label: "Pharmacy", icon: "pharmacy", accent: "ink" },
      ],
    },
  }),
  detailBase<ControlLedgerDetail>("vyaparhive", {
    variant: "control-ledger",
    hero: {
      eyebrow: "VyaparHive antigravity edition",
      headline: "Financial control",
      emphasis: "without the drag.",
      description: "Eliminate manual reconciliation and fiscal opacity. VyaparHive maps every movement to an immutable, cryptographically verifiable sequence.",
      primaryCta: "Request a finance walkthrough",
      secondaryCta: "See the control layer",
      imageAlt: "VyaparHive financial control dashboard",
    },
    signals: [
      { label: "Cash flow visibility", description: "See movement at the source", accent: "cyan" },
      { label: "Ledger clarity", description: "Trace every decision", accent: "violet" },
      { label: "Audit trail ready", description: "Immutable operating records", accent: "ink" },
    ],
    capabilities: [
      { title: "Financial Overview", description: "Monitor liquidity, burn rates, and runway with predictive modeling built directly into the engine.", accent: "violet", icon: "ledger", layout: "large" },
      { title: "Auto-Reconciliation", description: "Match transactions with bank statements using proprietary logic for absolute fidelity.", accent: "cyan", icon: "reconcile", layout: "stacked" },
      { title: "Transparent Reporting", description: "Drill from high-level summaries into raw transaction metadata instantly without friction.", accent: "ink", icon: "report", layout: "wide" },
    ],
    trustItems: ["Role-based access", "Traceable changes", "Shared operating picture"],
    cta: { eyebrow: "System integration", title: "Immutable trust by architecture.", description: "Transition to the financial operating system built for the next decade of enterprise velocity.", inputLabel: "Enterprise email", placeholder: "Enter enterprise email address", submitLabel: "Start integration", note: "GDPR compliant · SOC2 / Type II · Enterprise scale." },
    trace: {
      stats: [{ value: "100%", label: "Audit compliance" }, { value: "0ms", label: "Sync latency" }],
      features: [
        { title: "Reconciliation", description: "Smart matching of cross-border transactions and local bank feeds with zero manual drift.", accent: "cyan", span: "half" },
        { title: "Reporting", description: "On-demand P&L and tax-ready summaries that reflect the millisecond.", accent: "violet", span: "half" },
        { title: "Accountability", description: "Each entry is signed and dated, creating a permanent record that eliminates operational ambiguity and trust deficits.", accent: "ink", span: "full" },
      ],
    },
  }),
  detailBase<CareerSignalDetail>("resumehive", {
    variant: "career-signal",
    hero: {
      eyebrow: "Product: ResumeHive / signal: live",
      headline: "Make experience",
      emphasis: "easier to see.",
      description: "Precision-engineered resume building that transforms complex careers into high-impact digital signals recognized by global systems.",
      primaryCta: "Build a stronger signal",
      secondaryCta: "Explore role fit",
      imageAlt: "ResumeHive ATS-friendly resume builder",
    },
    signals: [
      { label: "ATS-friendly", description: "Verified against major engines", accent: "violet" },
      { label: "Role-fit ready", description: "Dynamic keyword optimization", accent: "cyan" },
      { label: "Export focus", description: "Pixel-perfect PDF and JSON", accent: "ink" },
    ],
    capabilities: [
      { title: "Guided Structural Integrity", description: "A layout engine that keeps every section logically weighted for maximum scanability.", accent: "violet", icon: "structure", layout: "large" },
      { title: "Role-fit Optimization", description: "Adaptive linguistic matching for specific industry requirements.", accent: "cyan", icon: "role-fit", layout: "stacked" },
      { title: "Pixel-perfect Export", description: "Standardized digital formats for human review and machine consumption.", accent: "ink", icon: "export", layout: "stacked" },
    ],
    trustItems: ["Human: readable", "System: legible", "Result: impact"],
    cta: { eyebrow: "Final call", title: "Put the right signal forward.", description: "A clearer route is waiting for your next career move. Start building your digital signal today.", inputLabel: "Work email", placeholder: "name@company.com", submitLabel: "Get started now", note: "Talk to a career advisor when you are ready." },
    process: [
      { title: "Structure", description: "Optimized layout hierarchy for zero-loss parsing by Applicant Tracking Systems.", accent: "violet" },
      { title: "Relevance", description: "Smart contextual matching that identifies and highlights your core career signals.", accent: "cyan" },
      { title: "Confidence", description: "A professional aesthetic that builds immediate trust during human review.", accent: "ink" },
    ],
  }),
];

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails.find((detail) => detail.slug === slug);
}

export const testimonials: Testimonial[] = [
  {
    quote: "The team kept adding the right features, SEO support, and thoughtful refinements until the website felt fully ours.",
    name: "Dr. Rohan Vishvasrao",
    role: "Healthcare website",
    initials: "RV",
    accent: "violet",
  },
  {
    quote: "The engineering precision changed how quickly our team could move from a rough idea to a usable digital experience.",
    name: "Adventure platform team",
    role: "Booking & discovery",
    initials: "AP",
    accent: "cyan",
  },
  {
    quote: "A partner who understands that a clean interface is not decoration; it is how momentum becomes visible.",
    name: "Product team, India",
    role: "Product systems",
    initials: "IH",
    accent: "ink",
  },
];

export const milestones: TimelineMilestone[] = [
  { year: "01", title: "Find the signal", description: "We map the real friction before prescribing a feature, a page, or a platform." },
  { year: "02", title: "Build the orbit", description: "We shape the system around the decision your people need to make next." },
  { year: "03", title: "Make it travel", description: "We refine the experience until it can move from first launch to everyday use." },
  { year: "04", title: "Compound the useful", description: "We stay close to the signals that turn a shipped product into durable momentum." },
];

export const team: TeamMember[] = [
  { name: "The product mind", role: "Strategy / direction", bio: "Turns broad ambition into a next useful decision.", initials: "PM", socials: [{ label: "LinkedIn", href: "#" }, { label: "Email", href: "mailto:innovatehive.tech@gmail.com" }] },
  { name: "The system builder", role: "Engineering / motion", bio: "Makes complex interactions feel calm, fast, and inevitable.", initials: "SB", socials: [{ label: "LinkedIn", href: "#" }, { label: "GitHub", href: "#" }] },
  { name: "The signal editor", role: "Brand / growth", bio: "Finds the words and forms that make attention stick.", initials: "SE", socials: [{ label: "LinkedIn", href: "#" }, { label: "Email", href: "mailto:innovatehive.tech@gmail.com" }] },
];

export const values = [
  { number: "01", title: "Clarity over noise", description: "Every layer earns its place. Every interaction should make the next decision easier.", accent: "violet" as const },
  { number: "02", title: "Useful by default", description: "We design for the moment after launch: the one where someone actually needs the system.", accent: "cyan" as const },
  { number: "03", title: "Calmly ambitious", description: "The work can be bold without making people work harder to understand it.", accent: "ink" as const },
  { number: "04", title: "Built to travel", description: "A strong idea should hold up across screens, teams, contexts, and the next version.", accent: "violet" as const },
];

export const caseStudies: CaseStudy[] = [
  { slug: "medihive-care-graph", title: "MediHive care graph", category: "healthcare", summary: "A calmer interface for the links between patients, providers, and pharmacies.", year: "2026", metric: "03 care loops", accent: "violet", tags: ["Product", "Healthcare", "Systems"] },
  { slug: "vyaparhive-control-ledger", title: "VyaparHive control ledger", category: "business-ops", summary: "A clearer operating layer for financial teams moving at enterprise speed.", year: "2026", metric: "01 live ledger", accent: "cyan", tags: ["Business ops", "Platform", "Growth"] },
  { slug: "resumehive-career-signal", title: "ResumeHive career signal", category: "career", summary: "A stronger route from lived experience to the next high-impact role.", year: "2026", metric: "04 signal layers", accent: "violet", tags: ["Career", "Product", "Experience"] },
  { slug: "adventure-booking-orbit", title: "Adventure booking orbit", category: "product", summary: "A discovery flow that lets the destination stay in focus while the interface gets out of the way.", year: "2025", metric: "+38% clarity", accent: "ink", tags: ["Product", "Booking", "Interface"] },
  { slug: "search-foundation", title: "Search foundation", category: "growth", summary: "A technical and editorial system for showing up when the right questions get asked.", year: "2025", metric: "06 core signals", accent: "cyan", tags: ["Growth", "SEO", "Content"] },
  { slug: "healthcare-identity", title: "Healthcare identity system", category: "healthcare", summary: "A visual language that makes trust legible before the first appointment.", year: "2025", metric: "01 shared language", accent: "violet", tags: ["Healthcare", "Brand", "Design"] },
];

export const navigation: Array<{ href: RoutePath; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
];
