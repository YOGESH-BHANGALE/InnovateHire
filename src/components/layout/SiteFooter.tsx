import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 pb-10 text-white md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-7 text-[0.62rem] uppercase tracking-[0.18em] text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© 2026 InnovateHive</span>
        <div className="flex gap-6"><Link className="transition hover:text-white" href="/">Back to top</Link><Link className="transition hover:text-white" href="/services">Capabilities</Link><Link className="transition hover:text-white" href="/contact">Contact</Link></div>
        <span>India → beyond</span>
      </div>
    </footer>
  );
}
