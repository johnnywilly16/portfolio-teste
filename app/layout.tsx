import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const cursive = Great_Vibes({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-cursive'
});

export const metadata: Metadata = {
  title: "Johnny Willy - Desenvolvedor Fullstack",
  description: "Portfólio profissional de Johnny Willy, desenvolvedor fullstack especializado em soluções web modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} ${cursive.variable} bg-gray-900 text-gray-100`}>
        <Providers>
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
