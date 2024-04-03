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
        <img src="/bgMonkey.png" className='bgMonkey' alt="One of two background images. A large teal version of the 12 Monkeys Tattoos logo, in the top right of the screen."/>
        <img src="/bgWaves.png" className='bgWaves' alt="The second of two background images. A large teal drawing of 'Finger Waves', in the bottom left of the screen." />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
