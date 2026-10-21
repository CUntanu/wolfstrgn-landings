"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOfferCountdown } from "@/lib/use-offer-countdown";
import { STORE_URL } from "@/lib/landings";
import { Zap, X, ArrowRight } from "lucide-react";

const DISMISS_KEY = "wolfstrgn-offer-banner-dismissed";

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function readDismissed(): boolean {
  try {
    return window.localStorage.getItem(DISMISS_KEY) === todayKey();
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

function subscribe(onStoreChange: () => void): () => void {
  // 'storage' solo dispara entre pestañas: suficiente para mantener sincronía
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

export function OfferBanner() {
  const timeLeft = useOfferCountdown();
  const dismissedToday = useSyncExternalStore(subscribe, readDismissed, getServerSnapshot);
  const [justClosed, setJustClosed] = useState(false);

  const show = !justClosed && !dismissedToday;

  const dismiss = () => {
    setJustClosed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, todayKey());
    } catch {
      // sin persistencia disponible: el banner solo se cierra en esta sesión
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 text-zinc-950"
          role="region"
          aria-label="Banner de oferta con descuento y cuenta atrás"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-4 sm:px-6 lg:px-8">
            {/* Mensaje */}
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide sm:text-sm">
              <Zap className="h-4 w-4 shrink-0 fill-zinc-950" aria-hidden />
              <span>
                10% de descuento en tu pedido ·{" "}
                <span className="hidden sm:inline">aplicado al tramitar el pago ·</span> termina en
              </span>
            </p>

            {/* Cuenta atrás */}
            <p
              className="flex items-center gap-1.5 font-mono text-sm font-bold tabular-nums sm:text-base"
              aria-live="off"
              aria-label={`La oferta termina en ${timeLeft ? `${timeLeft.hours} horas ${timeLeft.minutes} minutos y ${timeLeft.seconds} segundos` : "pronto"}`}
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-950 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-950" />
              </span>
              <span className="rounded-md bg-zinc-950/90 px-2 py-0.5 tracking-widest text-amber-300 shadow-sm">
                {timeLeft ? `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}` : "--:--:--"}
              </span>
            </p>

            {/* CTA */}
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-full bg-zinc-950 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-300 transition-colors hover:bg-zinc-900 hover:text-amber-200 sm:text-xs"
            >
              Aprovechar
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>

          {/* Cerrar */}
          <button
            onClick={dismiss}
            aria-label="Cerrar banner de oferta"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-zinc-950/70 transition-colors hover:bg-zinc-950/10 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
