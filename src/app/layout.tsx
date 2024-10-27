import type { Metadata } from "next";
import {Noto_Serif, Poppins} from 'next/font/google'
import "./globals.css";

const notoSerif = Noto_Serif({
  display:'swap',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: '400',
  display:'swap',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Kodigo Music",
  description: "Best app for your music streaming needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
