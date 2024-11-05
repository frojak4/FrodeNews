import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Prociono, Nunito } from 'next/font/google'
import { Providers } from "./providers";
import Ad from "@/components/ads/Ad";
import { Suspense } from "react";
import { verifySession } from "@/lib/dal";
import AdCheck from "@/components/ads/AdCheck";


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
          <Suspense fallback={<p>loading...</p>}>
            <AdCheck />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
