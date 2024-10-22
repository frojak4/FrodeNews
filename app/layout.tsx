import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Prociono, Nunito } from 'next/font/google'
import { Providers } from "./providers";


export const prociono_init = Prociono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

export const nunito_init = Nunito({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Frode News",
  description: "The most trusted news-source in the world!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={nunito_init.className}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
