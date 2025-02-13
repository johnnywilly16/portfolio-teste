import type { Metadata, Viewport } from "next";
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
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F3FF' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1625' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
      </head>
      <body className={`${comicNeue.variable} ${indieFlower.variable} font-cartoon bg-gradient-to-br from-light-surface via-light-muted to-light-surface dark:from-dark-surface dark:via-dark-surface dark:to-dark-surface text-slate-800 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden max-w-[100vw]`}>
        <Providers>
          <div className="relative overflow-x-hidden w-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}