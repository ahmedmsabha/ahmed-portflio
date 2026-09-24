import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun } from "lucide-react";
import { useCopy } from "@/i18n/use-copy";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function applyTheme(next: "light" | "dark") {
  document.documentElement.classList.toggle("dark", next === "dark");
  localStorage.setItem("theme", next);
}

export function Header() {
  const { locale, ui } = useCopy();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-serif text-lg tracking-tight">
          {ui.heroFirst}
        </a>
        <nav aria-label={ui.navLabel} className="hidden items-center gap-5 lg:flex">
          {ui.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-draw text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link
            to={ui.langHref}
            hrefLang={locale === "ar" ? "en" : "ar"}
            className="rounded-full border border-border px-3 py-1 text-sm hover:bg-muted"
          >
            {ui.langLabel}
          </Link>
          <Button variant="ghost" size="icon" aria-label={ui.theme} onClick={toggleTheme}>
            <Sun className="hidden dark:block" />
            <Moon className="block dark:hidden" />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden"
              render={<Button variant="ghost" size="icon" aria-label={ui.openMenu} />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side={locale === "ar" ? "left" : "right"} className="w-72">
              <SheetHeader>
                <SheetTitle className="font-serif">{ui.menu}</SheetTitle>
              </SheetHeader>
              <nav aria-label={ui.mobileNav} className="flex flex-col gap-1 px-4">
                {ui.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-3 text-base hover:bg-muted"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
