import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WOLFSTRGN — Suplementación, Entrenamiento y Recuperación",
  description:
    "Tienda online española de suplementación (Shilajit del Himalaya, creatina), maquinaria de gimnasio y recuperación muscular. Envío en 1-3 días, devolución garantizada 30 días y 10% de descuento en tu pedido.",
  keywords: [
    "WOLFSTRGN",
    "shilajit",
    "creatina",
    "suplementos deportivos",
    "maquinaria gimnasio",
    "pistola de masaje",
    "presoterapia",
    "recuperación muscular",
  ],
  authors: [{ name: "WOLFSTRGN" }],
  icons: {
    icon: "/images/logo-wolf.png",
  },
  openGraph: {
    title: "WOLFSTRGN — Entrena como un lobo",
    description:
      "Suplementación, equipamiento y maquinaria para una vida activa. 10% de descuento en tu pedido.",
    url: "https://www.wolfstrgn.com",
    siteName: "WOLFSTRGN",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "WOLFSTRGN — Entrena como un lobo",
    description:
      "Suplementación, equipamiento y maquinaria para una vida activa. 10% de descuento en tu pedido.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
