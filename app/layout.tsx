import type { Metadata } from "next";
import { Comic_Neue, Indie_Flower } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const comicNeue = Comic_Neue({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-cartoon'
});

const indieFlower = Indie_Flower({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-handwriting'
});

export const metadata: Metadata = {
  title: "JOHNNY - Desenvolvedor Fullstack",
  description: "Portfólio profissional de JOHNNY, desenvolvedor fullstack especializado em soluções web modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${comicNeue.variable} ${indieFlower.variable} font-cartoon bg-gradient-to-br from-light-surface via-light-muted to-light-surface dark:from-dark-surface dark:via-dark-surface dark:to-dark-surface text-slate-800 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}