"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { LandingView } from "@/components/landing/landing-view";
import { OfferBanner } from "@/components/landing/offer-banner";
import { LANDINGS, NAV_ITEMS, STORE_URL, type LandingId } from "@/lib/landings";
import { Menu, MapPin, Mail, Phone, ExternalLink, Percent } from "lucide-react";

export default function Home() {
  const [active, setActive] = useState<LandingId>("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useCallback((id: LandingId) => {
    setActive(id);
    setMenuOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  const landing = LANDINGS[active];

  return (
    <div className="dark flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* ============ BANNER OFERTA ============ */}
      <OfferBanner />

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          {/* Logo */}
          <button
            onClick={() => navigate("inicio")}
            className="flex items-center gap-2.5 outline-none ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Ir al inicio de WOLFSTRGN"
          >
            <Image
              src="/images/logo-wolf.png"
              alt="Logo de WOLFSTRGN"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl border border-amber-400/30 object-cover"
              priority
            />
            <span className="font-display text-xl uppercase tracking-wider text-white sm:text-2xl">
              Wolf<span className="text-amber-400">strgn</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Landings">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                aria-current={active === item.id ? "page" : undefined}
                className={`relative rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  active === item.id
                    ? "text-amber-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-[21px] h-0.5 bg-amber-400 lg:-bottom-[25px]"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden bg-gradient-to-r from-amber-400 to-orange-500 font-bold uppercase tracking-wide text-zinc-950 hover:brightness-110 md:inline-flex"
            >
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                <Percent className="mr-1 h-4 w-4" aria-hidden />
                10% DTO
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 lg:hidden"
                  aria-label="Abrir menú de navegación"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="dark w-72 border-zinc-800 bg-zinc-950 text-zinc-100"
              >
                <SheetHeader>
                  <SheetTitle className="font-display uppercase tracking-wider text-white">
                    Wolf<span className="text-amber-400">strgn</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-2 flex flex-col gap-1 px-4" aria-label="Landings móvil">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.id)}
                      className={`rounded-lg px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide transition-colors ${
                        active === item.id
                          ? "bg-amber-400/10 text-amber-400"
                          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="mt-4 px-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-amber-400 to-orange-500 font-bold uppercase tracking-wide text-zinc-950 hover:brightness-110"
                  >
                    <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                      Comprar con 10% DTO
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ============ LANDING ACTIVA ============ */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <LandingView landing={landing} onNavigate={navigate} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="mt-auto border-t border-zinc-800/80 bg-zinc-950 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Marca */}
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <Image
                  src="/images/logo-wolf.png"
                  alt=""
                  aria-hidden
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-lg border border-amber-400/30 object-cover"
                />
                <span className="font-display text-lg uppercase tracking-wider text-white">
                  Wolf<span className="text-amber-400">strgn</span>
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
                Suplementación, entrenamiento y equipamiento para una vida activa. Fuerza, instinto
                y resultados desde Huelva para toda España.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-5 border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20 hover:text-amber-200"
              >
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                  www.wolfstrgn.com
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>

            {/* Navegación */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
                Landings
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => navigate(item.id)}
                      className={`text-sm transition-colors hover:text-amber-400 ${
                        active === item.id ? "text-amber-400" : "text-zinc-400"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
                Contacto
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                  <span>
                    Avenida Niebla 32, 21830 Bonares,
                    <br />
                    Huelva, España
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:contact.wolfstrgn@gmail.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-amber-400"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                    contact.wolfstrgn@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+34624534456"
                    className="flex items-center gap-2.5 transition-colors hover:text-amber-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                    +34 624 53 44 56
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-zinc-800/80" />

          <div className="flex flex-col items-center justify-between gap-3 text-xs text-zinc-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} WOLFSTRGN. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-1.5">
              <Percent className="h-3.5 w-3.5 text-amber-400" aria-hidden />
              10% de descuento aplicado automáticamente al tramitar tu pedido
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
