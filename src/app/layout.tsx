import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import CanvasCursor from "./components/canvasCursorEffect";
import { ToastProvider } from "@/components/ui/toast";
import Down_Navbar from "./components/down_Navbar";
import AOSProvider from "./components/AOSProvider";
import SplashScreen from "./components/SplashScreen";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Saud Ali Portfolio",
  description: "Professional portfolio of Syed Saud Ali, built with Next.js",
  icons: {
    icon: "/image/pf-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SplashScreen />
        <CanvasCursor />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <ToastProvider>
            <AOSProvider />
            {children}
            <Down_Navbar />
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}