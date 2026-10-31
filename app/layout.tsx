import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import CanvasBackground from "@/components/CanvasBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Pattern Labs — Web Development, WordPress, Next.js & AI Solutions",
  description:
    "Dev Pattern Labs helps businesses turn ideas, outdated websites, and digital challenges into modern web solutions. Custom WordPress, Next.js, UI/UX, SEO, and AI automation.",
  keywords: [
    "Web Development Agency",
    "WordPress Development",
    "Next.js Development",
    "Dev Pattern Labs",
    "Tamil Nadu Web Studio",
    "AI Automation",
    "UI/UX Design",
    "SEO Optimization",
    "PostSprint",
  ],
  authors: [{ name: "Dev Pattern Labs", url: "https://devpatternlabs.com" }],
  metadataBase: new URL("https://devpatternlabs.com"),
  icons: {
    icon: "/images/dev-pattern-labs-logo-icon.webp",
    apple: "/images/dev-pattern-labs-logo-icon.webp",
  },
  openGraph: {
    title: "Dev Pattern Labs — Web Development & Digital Products",
    description:
      "We design, build, and maintain high-performing digital products with a focus on usability, performance, and business goals.",
    url: "https://devpatternlabs.com",
    siteName: "Dev Pattern Labs",
    locale: "en_US",
    type: "website",
    images: ["/images/dev-pattern-labs-web-development-agency.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="bg-deep-navy text-white antialiased font-sans selection:bg-brand-primary/30 selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <CanvasBackground />
          <div className="relative z-10 min-h-screen flex flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
