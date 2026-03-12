import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  authors: [{ name: "Fabian Galan" }],
  description:
    "Portafolio de Fabian Galan enfocado en frontend, sistemas UI, dashboards operativos y productos web listos para producción.",
  metadataBase: new URL("https://kodigo-portfolio.vercel.app"),
  openGraph: {
    description:
      "Frontend, sistemas UI, dashboards operativos y productos web listos para producción.",
    siteName: "Kodigo Portfolio",
    title: "Fabian Galan | Frontend Engineer y UI Systems Builder",
    type: "website",
  },
  title: {
    default: "Fabian Galan | Frontend Engineer y UI Systems Builder",
    template: "%s | Kodigo Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${mono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
