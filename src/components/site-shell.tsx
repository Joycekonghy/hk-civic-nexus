import { Link, Outlet } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import crest from "@/assets/school-crest.png.asset.json";
import { Button } from "@/components/ui/button";

const navigation = [
  { to: "/", label: "Home", zh: "首頁" },
  { to: "/panel-members", label: "Panel", zh: "科組成員" },
  { to: "/excursions", label: "Excursions", zh: "考察活動" },
  { to: "/awards", label: "Awards", zh: "獎項" },
  { to: "/implementation", label: "Implementation", zh: "課程實踐" },
] as const;

export function SiteShell() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="edition-strip">
        <div className="site-container flex items-center justify-between gap-4 py-2">
          <span>校園專題 · SCHOOL EDITION</span>
          <span>HONG KONG · 香港</span>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container flex h-20 items-center justify-between gap-5">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="CES home">
            <img src={crest.url} alt="SKH Lam Woo Memorial Secondary School crest" className="h-14 w-14 shrink-0 object-contain" />
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate font-display text-sm font-bold text-primary">公民、經濟與社會科</span>
              <span className="block truncate text-[10px] font-semibold uppercase text-muted-foreground">Citizenship, Economics & Society</span>
            </span>
          </Link>
          <nav className="hidden items-stretch self-stretch lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
                <span>{item.label}</span><small>{item.zh}</small>
              </Link>
            ))}
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            <Menu className="size-5" />
          </Button>
        </div>
        {open && (
          <nav className="site-container grid border-t border-border py-3 lg:hidden" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-border py-3 text-sm font-semibold last:border-0">
                {item.label}<span className="text-xs font-normal text-muted-foreground">{item.zh}</span>
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main><Outlet /></main>
      <footer className="border-t-4 border-primary bg-background text-foreground">
        <div className="site-container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr]">
          <div><p className="font-display text-xl font-bold">公民、經濟與社會科</p><p className="mt-2 max-w-xl text-sm text-primary-foreground/70">Citizenship, Economics and Society · SKH Lam Woo Memorial Secondary School</p></div>
          <div className="md:text-right"><p className="text-xs font-semibold uppercase text-muted-foreground">Department desk · 科組專頁</p><Link to="/implementation" className="mt-3 inline-flex border-b border-foreground pb-1 text-sm font-semibold">Explore our curriculum</Link></div>
        </div>
      </footer>
    </div>
  );
}
