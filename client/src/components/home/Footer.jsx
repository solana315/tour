import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer container">
      <Logo />
      <span>Viagem 2026</span>
      <a href="#top">
        voltar ao topo <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}
