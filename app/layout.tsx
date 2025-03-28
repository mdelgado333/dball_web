import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/navbar";
import { roboto } from "./ui/fonts";
import BG from './ui/bg'
import Footer from "./ui/landing/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "DBALLHUB",
  description: "Where hoopers unite.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
          <BG
            className="fixed inset-0 -z-10"
            lineColor="#fff"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />  
          <Navbar />
          <main className="flex flex-grow flex-col">
            {children}
            <SpeedInsights/>
          </main>
      </body>
      <Footer/>
    </html>
  );
}
