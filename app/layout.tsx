import type { Metadata } from "next";

import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoUp from "@/components/layout/GoUp";

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
        <script src="https://kit.fontawesome.com/f1ed3a95ea.js" crossOrigin="anonymous" defer></script>
      </head>
      <ReduxProvider>
        <body>
          <Header />
          {children}
          <GoUp />
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
