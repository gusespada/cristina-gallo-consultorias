import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cristina Gallo · Dirección coral, docencia e investigación",
  description: "Consultoría profesional de Cristina Gallo para directoras y directores de coro: gesto, ensayo, repertorio e interpretación.",
  keywords: ["dirección coral", "consultoría coral", "docencia musical", "coaching para directores"],
  openGraph: {
    title: "Cristina Gallo · Consultoría en Dirección Coral",
    description: "Un espacio para directoras y directores de coro que buscan profundizar su práctica profesional.",
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    images: [{
      url: `${siteUrl}/og.png`,
      width: 1200,
      height: 630,
      alt: "Cristina Gallo · Consultoría en Dirección Coral",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristina Gallo · Consultoría en Dirección Coral",
    description: "Un espacio para directoras y directores de coro que buscan profundizar su práctica profesional.",
    images: [`${siteUrl}/og.png`],
  },
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
