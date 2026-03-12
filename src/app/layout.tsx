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
    "Portafolio de Fabian Galan como desarrollador full-stack, enfocado en frontend, backend, APIs y sistemas web listos para producción.",
  metadataBase: new URL("https://kodigo-portfolio.vercel.app"),
  openGraph: {
    description:
      "Full-stack development con frontend, backend, APIs y sistemas web listos para producción.",
    siteName: "Kodigo Portfolio",
    title: "Fabian Galan | Full-Stack Developer y Product Systems Engineer",
    type: "website",
  },
  title: {
    default: "Fabian Galan | Full-Stack Developer y Product Systems Engineer",
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
