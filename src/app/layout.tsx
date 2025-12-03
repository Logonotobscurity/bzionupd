
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { ClientChatWidget } from "@/components/layout/ClientChatWidget";
import { CookieBanner } from "@/components/cookie-banner";
import WhatsappWidget from "@/components/layout/WhatsappWidget";

export const metadata: Metadata = {
  title: "BZION Hub Digital",
  description: "Your one-stop B2B platform for Fast-Moving Consumer Goods.",
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
          <Header />
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
          <Toaster />
          <WhatsappWidget />
          <ClientChatWidget />
          <CookieBanner />
      </body>
    </html>
  );
}
