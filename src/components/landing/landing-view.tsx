"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Brain,
  Flame,
  Shield,
  Droplets,
  Mountain,
  Truck,
  Percent,
  Undo2,
  BadgeCheck,
  Headset,
  Dumbbell,
  Activity,
  Timer,
  Wand,
  Leaf,
  Warehouse,
  Ruler,
  Package,
  Wrench,
  Waves,
  HeartPulse,
  Move,
  Bed,
  BatteryCharging,
  Briefcase,
  Star,
  ArrowRight,
  Check,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { STORE_URL, type Landing, type LandingId } from "@/lib/landings";
import { useOfferCountdown, formatCountdown } from "@/lib/use-offer-countdown";

const ICONS: Record<string, LucideIcon> = {
  zap: Zap,
  brain: Brain,
  flame: Flame,
  shield: Shield,
  droplets: Droplets,
  mountain: Mountain,
  truck: Truck,
  percent: Percent,
  undo: Undo2,
  "badge-check": BadgeCheck,
  headset: Headset,
  dumbbell: Dumbbell,
  activity: Activity,
  timer: Timer,
  wand: Wand,
  leaf: Leaf,
  warehouse: Warehouse,
  ruler: Ruler,
  package: Package,
  wrench: Wrench,
  waves: Waves,
  "heart-pulse": HeartPulse,
  move: Move,
  bed: Bed,
  "battery-charging": BatteryCharging,
  briefcase: Briefcase,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
      <span className="h-px w-8 bg-amber-400/70" aria-hidden />
      {children}
      <span className="h-px w-8 bg-amber-400/70" aria-hidden />
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl uppercase leading-tight tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}

function StoreButton({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "default" | "lg";
  className?: string;
}) {
  return (
    <Button asChild size={size} className={className}>
      <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

export function LandingView({
  landing,
  onNavigate,
}: {
  landing: Landing;
  onNavigate: (id: LandingId) => void;
}) {
  const countdown = useOfferCountdown();

  return (
    <div className="dark min-h-screen bg-zinc-950 text-zinc-100">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={landing.heroImage}
            alt={`${landing.title} ${landing.titleHighlight} - WOLFSTRGN`}
            fill
            priority
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/60 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.55)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300 sm:text-xs"
            >
              {landing.eyebrow}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            {landing.title}{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              {landing.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            {landing.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <StoreButton className="h-13 w-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 text-base font-bold uppercase tracking-wide text-zinc-950 shadow-[0_0_30px_rgba(251,191,36,0.35)] transition-all hover:shadow-[0_0_45px_rgba(251,191,36,0.55)] hover:brightness-110 sm:w-auto">
              <ShoppingCart className="mr-2 h-5 w-5" />
              {landing.primaryCta}
            </StoreButton>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const faq = document.getElementById("faq");
                if (faq) faq.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full border-zinc-700 bg-zinc-900/60 px-8 text-base font-semibold uppercase tracking-wide text-zinc-200 backdrop-blur hover:bg-zinc-800 hover:text-white sm:w-auto"
            >
              {landing.secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800/50 backdrop-blur md:grid-cols-4"
          >
            {landing.stats.map((stat) => (
              <div key={stat.label} className="bg-zinc-950/80 px-4 py-5">
                <p className="font-display text-2xl text-amber-400 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-400 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="border-y border-zinc-800/80 bg-zinc-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: Truck, text: "Envío 1-3 días con seguimiento" },
            { icon: Percent, text: "10% de descuento al pagar" },
            { icon: Shield, text: "Pago seguro Visa · Apple Pay" },
            { icon: Undo2, text: "Devolución garantizada 30 días" },
          ].map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-3">
              <item.icon className="h-5 w-5 shrink-0 text-amber-400" aria-hidden />
              <span className="text-xs font-medium text-zinc-300 sm:text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={landing.benefitsEyebrow}
            title={landing.benefitsTitle}
            subtitle={landing.benefitsSubtitle}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {landing.benefits.map((benefit, i) => {
              const Icon = ICONS[benefit.icon] ?? Zap;
              return (
                <motion.div
                  key={benefit.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-amber-400/40 hover:bg-zinc-900"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-amber-400/10 p-3 text-amber-400 transition-colors group-hover:bg-amber-400/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-zinc-50">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="border-y border-zinc-800/80 bg-zinc-900/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={landing.productsEyebrow}
            title={landing.productsTitle}
            subtitle={landing.productsSubtitle}
          />
          <div
            className={`grid gap-6 ${
              landing.products.length === 1
                ? "mx-auto max-w-md"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {landing.products.map((product, i) => (
              <motion.article
                key={product.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-colors hover:border-amber-400/40"
              >
                {product.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-950">
                        {product.badge}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-1 text-xl font-bold text-zinc-50">{product.name}</h3>
                  <p className="mb-4 flex items-baseline gap-2">
                    <span className="font-display text-2xl text-amber-400">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-zinc-500 line-through">{product.oldPrice}</span>
                    )}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-400">{product.tagline}</p>
                  <ul className="mb-6 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {product.targetLanding ? (
                      <Button
                        onClick={() => onNavigate(product.targetLanding as LandingId)}
                        className="w-full bg-amber-400 font-bold uppercase tracking-wide text-zinc-950 hover:bg-amber-300"
                      >
                        {product.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <StoreButton
                        size="default"
                        className="w-full bg-amber-400 font-bold uppercase tracking-wide text-zinc-950 hover:bg-amber-300"
                      >
                        {product.cta ?? "Comprar ahora"}
                      </StoreButton>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={landing.processEyebrow}
            title={landing.processTitle}
            subtitle=""
          />
          <div className="grid gap-8 md:grid-cols-3">
            {landing.processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
              >
                <span className="font-display text-6xl leading-none text-amber-400/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 mt-3 text-lg font-bold text-zinc-50">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                {i < landing.processSteps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-amber-400/50 md:block"
                    aria-hidden
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="border-y border-zinc-800/80 bg-zinc-900/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonios"
            title={landing.testimonialsTitle}
            subtitle={landing.testimonialsSubtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {landing.testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <div className="mb-4 flex gap-1" aria-label={`Valoración ${t.rating} de 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${
                        s < t.rating ? "fill-amber-400 text-amber-400" : "text-zinc-700"
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-zinc-800 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-display text-sm text-zinc-950">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resolvemos tus dudas"
            title="PREGUNTAS FRECUENTES"
            subtitle="Todo lo que necesitas saber antes de tu primer pedido."
          />
          <motion.div {...fadeUp}>
            <Accordion type="single" collapsible className="space-y-3">
              {landing.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 last:border-b"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-zinc-100 hover:text-amber-400 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-zinc-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={landing.ctaImage}
            alt=""
            aria-hidden
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
          <motion.div {...fadeUp}>
            <span className="mb-6 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 font-display text-sm uppercase tracking-widest text-amber-300">
              10% de descuento en tu pedido
            </span>
            <p className="mb-2 flex items-center justify-center gap-2 text-sm text-zinc-300">
              <Flame className="h-4 w-4 text-orange-400" aria-hidden />
              La oferta de hoy termina en
              <span className="rounded-md border border-orange-400/30 bg-orange-500/10 px-2 py-0.5 font-mono font-bold tabular-nums tracking-widest text-orange-300">
                {formatCountdown(countdown)}
              </span>
            </p>
            <h2 className="font-display text-4xl uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              {landing.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {landing.ctaSubtitle}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <StoreButton className="h-13 w-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 text-base font-bold uppercase tracking-wide text-zinc-950 shadow-[0_0_30px_rgba(251,191,36,0.35)] transition-all hover:shadow-[0_0_45px_rgba(251,191,36,0.55)] hover:brightness-110 sm:w-auto">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ir a wolfstrgn.com
              </StoreButton>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate(landing.id === "inicio" ? "shilajit" : "inicio")}
                className="w-full border-zinc-700 bg-zinc-900/60 px-8 text-base font-semibold uppercase tracking-wide text-zinc-200 backdrop-blur hover:bg-zinc-800 hover:text-white sm:w-auto"
              >
                {landing.id === "inicio" ? "Descubrir Shilajit" : "Volver al inicio"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
