import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import CanvasBackground from "@/components/CanvasBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Pattern Labs | 14-Day Next.js & n8n Automation Sprints (Awwwards Experience)",
  description:
    "We build modular Next.js web applications and autonomous n8n workflows in 14-day sprints. Fixed price, senior developers, 100% code ownership.",
  keywords: [
    "Next.js development",
    "n8n automation",
    "workflow automation",
    "web engineering studio",
    "14-day sprint",
    "Supabase Postgres",
    "SaaS MVP development",
    "Dev Pattern Labs",
  ],
  authors: [{ name: "Dev Pattern Labs", url: "https://devpatternlabs.com" }],
  creator: "Dev Pattern Labs",
  publisher: "Dev Pattern Labs",
  metadataBase: new URL("https://devpatternlabs.com"),
  alternates: {
    canonical: "https://devpatternlabs.com",
  },
  openGraph: {
    title: "Dev Pattern Labs | 14-Day Next.js & n8n Automation Sprints",
    description:
      "Stop wasting months on disjointed agencies. We build modular Next.js web apps and autonomous backend pipelines in 14 days.",
    url: "https://devpatternlabs.com",
    siteName: "Dev Pattern Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Pattern Labs | 14-Day Next.js & n8n Automation Sprints",
    description:
      "We build modular Next.js web applications and autonomous n8n workflows in 14-day sprints.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="bg-background text-foreground antialiased font-sans selection:bg-brand-cyan/30 selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <CanvasBackground />
          <div className="relative z-10 min-h-screen flex flex-col bg-noise">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
