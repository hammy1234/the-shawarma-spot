import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrderModalProvider } from "@/components/order/OrderModalProvider";
import { SITE } from "@/data/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.fullName} | Halal Shawarma in Grayson`,
    template: `%s | ${SITE.fullName}`,
  },
  description: SITE.description,
  keywords: [
    "halal restaurant Grayson",
    "shawarma Grayson",
    "Mediterranean food Grayson",
    "chicken shawarma near me",
    "halal food near Grayson",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.fullName,
    images: [{ url: "/images/og/og.jpg", width: 1200, height: 630, alt: SITE.fullName }],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <OrderModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </OrderModalProvider>
      </body>
    </html>
  );
}
