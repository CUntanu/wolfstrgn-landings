"use client";

import { useSyncExternalStore } from "react";

export interface CountdownParts {
  hours: string;
  minutes: string;
  seconds: string;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function computeTimeLeft(): CountdownParts {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  let diff = Math.max(0, end.getTime() - now.getTime());
  const hours = Math.floor(diff / 3_600_000);
  diff -= hours * 3_600_000;
  const minutes = Math.floor(diff / 60_000);
  diff -= minutes * 60_000;
  const seconds = Math.floor(diff / 1000);
  return { hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}

// Caché por segundo: getSnapshot debe devolver una referencia estable entre llamadas
// dentro del mismo tick para no provocar re-renders infinitos.
let snapshotCache: { tick: number; value: CountdownParts } | null = null;

function getSnapshot(): CountdownParts | null {
  const tick = Math.floor(Date.now() / 1000);
  if (!snapshotCache || snapshotCache.tick !== tick) {
    snapshotCache = { tick, value: computeTimeLeft() };
  }
  return snapshotCache.value;
}

function getServerSnapshot(): CountdownParts | null {
  return null;
}

function subscribe(onStoreChange: () => void): () => void {
  const id = setInterval(onStoreChange, 250);
  return () => clearInterval(id);
}

/**
 * Cuenta atrás hasta medianoche (fin de la oferta del día).
 * Devuelve null durante el render de servidor e hidratación para evitar
 * desajustes; se sincroniza con la hora real justo después de montar.
 */
export function useOfferCountdown(): CountdownParts | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function formatCountdown(timeLeft: CountdownParts | null): string {
  if (!timeLeft) return "--:--:--";
  return `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;
}
