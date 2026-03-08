"use client";

import { Link } from "@heroui/link";
import { Logo } from "@/components/icons";

interface ServiceProps {
  title: string;
  description: string;
  href?: string;
  status: "live" | "beta" | "wip";
}

function ServiceItem({ title, description, href, status }: ServiceProps) {
  const statusMap = {
    live: { label: "Live", bgClass: "bg-foreground text-background" },
    beta: { label: "Beta", bgClass: "bg-default-800 text-background" },
    wip:  { label: "WIP",  bgClass: "bg-default-200 text-default-600" },
  } as const;

  const { label, bgClass } = statusMap[status];

  const content = (
    <div className={`group flex flex-col md:flex-row md:items-center justify-between gap-4 py-5 px-4 md:px-6 border-b border-default-200 transition-colors ${href ? "hover:bg-default-100/50 cursor-pointer" : ""}`}>
      <div className="flex flex-col gap-1.5 relative">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-medium tracking-tight text-foreground">{title}</h2>
          <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm ${bgClass}`}>
            {label}
          </span>
        </div>
        <p className="text-default-500 text-sm leading-relaxed max-w-xl pr-6">
          {description}
        </p>
      </div>

      <div className="flex-shrink-0 flex items-center h-full">
        {!href && (
          <span className="text-[11px] text-default-400 font-medium tracking-widest uppercase block">Coming Soon</span>
        )}
      </div>
    </div>
  );

  return href ? (
    <Link href={href} isExternal className="block w-full no-underline">
      {content}
    </Link>
  ) : (
    <div className="block w-full">{content}</div>
  );
}

export default function Home() {
  return (
    <section className="flex flex-col items-center py-16 px-6 bg-background">
      <div className="w-full max-w-3xl flex flex-col gap-16">
        {/* Minimalist Hero - Compact */}
        <div className="flex flex-col gap-5 items-start relative max-w-2xl">
          <div className="flex items-center gap-3 text-foreground/80 mb-1">
            <Logo size={32} className="text-foreground shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase">ocaens.de</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground leading-[1.1]">
            Utilities built for competitive play.
          </h1>
          <p className="text-default-500 text-base md:text-lg leading-relaxed font-light">
            Strategy managers, link tools, and resources tailored specifically for FPS players. Designed, built, and maintained fully by sneaco.
          </p>
        </div>

        {/* Minimalist List */}
        <div className="flex flex-col w-full">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-default-400 mb-2 border-b border-default-300 pb-3">
            Index
          </h3>
          <div className="flex flex-col w-full">
            <ServiceItem
              title="Valorant Strats"
              description="Browse and manage your team's Valorant strategies. Build your playbook round by round."
              href="https://valo.ocaens.de"
              status="beta"
            />
            <ServiceItem
              title="CS Strats"
              description="Counter-Strike strategy manager for your squad. Currently under development."
              status="wip"
            />
            <ServiceItem
              title="Link Shortener"
              description="Quickly share shortened links under the custom ocaens.de domain."
              status="wip"
            />
          </div>
        </div>
        
        {/* Simple Footer Note */}
        <div className="text-xs text-default-400 font-light border-t border-default-200 pt-6 flex justify-between">
          <span>© {new Date().getFullYear()} ocaens.de</span>
        </div>
      </div>
    </section>
  );
}
