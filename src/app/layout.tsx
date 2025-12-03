
import type { Metadata } from "next";
import "./globals.css";
import "@/styles/focus-visible.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/skip-link";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { ClientChatWidget } from "@/components/layout/ClientChatWidget";
import { CookieBanner } from "@/components/cookie-banner";
import WhatsappWidget from "@/components/layout/WhatsappWidget";
import { MonitoringProvider } from "@/components/layout/MonitoringProvider";

export const metadata: Metadata = {
  title: "BZION Hub Digital",
  description: "Your one-stop B2B platform for Fast-Moving Consumer Goods.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
          <MonitoringProvider />
          <ErrorBoundary>
            <SkipLink />
            <Header />
            <main id="main-content" className="flex-grow pt-0">{children}</main>
            <Footer />
            <Toaster />
            <WhatsappWidget />
            <ClientChatWidget />
            <CookieBanner />
          </ErrorBoundary>
      </body>
    </html>
  );
}
