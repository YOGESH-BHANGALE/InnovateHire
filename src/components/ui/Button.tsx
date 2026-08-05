import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "ink" | "violet" | "soft" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  magnetic?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  ink: "bg-ink text-white hover:bg-violet",
  violet: "bg-violet text-white hover:bg-violet-deep",
  soft: "bg-white text-ink shadow-panel hover:-translate-y-0.5 hover:shadow-orbital",
  ghost: "border border-ink/15 text-ink hover:border-violet hover:text-violet",
};

export function Button({ className, children, href, variant = "ink", arrow = true, magnetic = true, ...props }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : null}
    </>
  );
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-center text-[0.68rem] font-bold uppercase tracking-[0.14em] transition duration-300 focus-visible:outline-hidden",
    variantClasses[variant],
    magnetic && "data-[magnetic=true]:will-change-transform",
    className,
  );

  if (isExternal) {
    return <a className={classes} data-magnetic={magnetic ? "true" : undefined} href={href} {...props}>{content}</a>;
  }

  return <Link className={classes} data-magnetic={magnetic ? "true" : undefined} href={href} {...props}>{content}</Link>;
}
