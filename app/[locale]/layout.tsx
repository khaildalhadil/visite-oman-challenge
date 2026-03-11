import "./globals.css";
import Header from "../components/Header";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
import ThemeProvider from "../components/ThemeContext";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Visit Oman",
  description: "I will write it later",
};

type Locales = "en" | "ar";

interface PageParams {
  locale: Locales;
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: PageParams;
}) {

  const { locale } = await params;

  return (
    <html lang={locale} className={inter.className} dir={locale === "en" ? "ltr": "rtl"}>
      <body className="text-gray-600 min-h-screen  dark:bg-neutral-800 dark:text-gray-100">
        <ToastContainer />
        <ThemeProvider>
          <NextIntlClientProvider>
            <div className="max-w-325 m-auto p-4">
              <Header />
            
              <main>
                  {children}
              </main>

              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Chat />

      </body>
    </html>
  );
}