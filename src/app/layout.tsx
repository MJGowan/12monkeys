import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "12 Monkeys Tattoos",
  description: "Tattoo studio located in Tracy, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img src="/bgMonkey.png" className='bgMonkey' />
        <img src="/bgWaves.png" className='bgWaves' />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
