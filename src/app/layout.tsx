import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./sections/Header";

export const metadata: Metadata = {
  title: "CarsToday - Buy and Sell Cars",
  description: "Buy and Sell Safe Cars Today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-slate-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
