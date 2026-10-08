import { Link } from "react-router-dom";
import { BRAND } from "../content/brand";
import { cn } from "../utils/cn";
import logo from "../../new-logo-herdsman.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${BRAND.name} home`} className={cn("inline-flex shrink-0", className)}>
      <img src={logo} alt={BRAND.name} className="h-24 w-28 object-contain" />
    </Link>
  );
}
