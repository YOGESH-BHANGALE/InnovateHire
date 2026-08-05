"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={cn("fixed left-4 right-4 top-4 z-40 rounded-full border border-transparent px-5 py-3 transition-all duration-500 md:left-8 md:right-8 md:px-7 md:py-4", scrolled && "nav-scrolled")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link aria-label="InnovateHive home" className="font-display text-xl font-bold tracking-[-0.06em]" href="/">
            InnovateHive<span className="text-violet">.</span>
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.12em] md:flex">
            {navigation.map((item) => <Link aria-current={pathname === item.href ? "page" : undefined} className="nav-link" href={item.href} key={item.href}>{item.label}</Link>)}
            <Link className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-white transition hover:bg-violet" data-magnetic="true" href="/contact">Contact <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </nav>
          <button aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "Close navigation menu" : "Open navigation menu"} className="grid size-11 place-items-center rounded-full bg-ink text-white md:hidden" onClick={() => setOpen((current) => !current)} type="button">
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open ? <motion.div animate={{ opacity: 1 }} className="fixed inset-0 z-30 bg-ink p-7 text-white md:hidden" exit={{ opacity: 0 }} id="mobile-navigation" initial={{ opacity: 0 }}>
          <div className="mt-24 flex flex-col gap-5 font-display text-5xl font-semibold tracking-[-0.06em]">
            {navigation.map((item, index) => <motion.div animate={{ opacity: 1, y: 0 }} custom={index} initial={{ opacity: 0, y: 18 }} key={item.href} transition={{ delay: index * 0.06 }}><Link className="block" href={item.href} onClick={() => setOpen(false)}>{item.label}</Link></motion.div>)}
            <Link className="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-violet to-cyan px-7 py-4 text-sm font-bold uppercase tracking-[0.12em]" href="/contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="absolute bottom-8 left-7 right-7 flex justify-between text-[0.62rem] uppercase tracking-[0.25em] text-white/45"><span>India → beyond</span><span>menu / 01</span></div>
        </motion.div> : null}
      </AnimatePresence>
    </>
  );
}
