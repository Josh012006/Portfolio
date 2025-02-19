import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoUp from "@/components/layout/GoUp";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Josué Mongan",
  description: "Josué Mongan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href= "/logo.png" sizes="16x16" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <Script src="https://kit.fontawesome.com/f1ed3a95ea.js" crossOrigin="anonymous" defer></Script>
        
        <meta name="google-site-verification" content="4tEN8VJShNlSjB57RxtFhfTgLN91RRvdAo0yS2O7R-o" />
        <meta property="og:title" content="Josué Mongan" />
        <meta property="og:description" content="Josué Mongan's Portfolio" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://josue-mongan.vercel.app" />
        <meta property="og:type" content="website" />


        <link rel="preload" as="video" href="/home-animation.mp4" />

        <link rel="preload" as="image" href="/about3.webp" />
        <link rel="preload" as="image" href="/about0.webp" />
        <link rel="preload" as="image" href="/about2.webp" />
        
      </head>
      <ReduxProvider>
        <body>
          <Header />
          {children}
          <GoUp />
          <Footer />
          <Analytics/>
          <SpeedInsights/>
        </body>
      </ReduxProvider>
    </html>
  );
}
