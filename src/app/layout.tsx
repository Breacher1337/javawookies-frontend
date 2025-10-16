import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "./layout/Header";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Javawookies",
  description: "Javawookies Cafe and Bakery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${roboto.variable} antialiased`}
      >
      <main className="max-w-6xl mx-auto">
        <Header/>
      {children}

      </main>
        
      </body>
    </html>
  );
}
