import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 ease-out";

const variants: Record<Variant, string> = {
  primary: "bg-lime text-ink hover:bg-ink hover:text-lime",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-slate",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type AsLink = CommonProps & { to: string; href?: never } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className"
  >;
type AsAnchor = CommonProps & { href: string; to?: never } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className"
  >;
type AsButton = CommonProps & { to?: never; href?: never } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
  >;

type ButtonProps = AsLink | AsAnchor | AsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if ("to" in props && props.to) {
    const { to, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
