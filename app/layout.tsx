import "./globals.css";
import Header from "./components/Header";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Visit Oman",
  description: "I will write it later",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="w-325 m-auto p-4 ">
        
          <Header />

          <main>
            {children}
          </main>

          <div>Footer</div>

        </div>
      </body>
    </html>
    );
}