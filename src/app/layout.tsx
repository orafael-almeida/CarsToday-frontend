import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`$antialiased`}>{children}</body>
    </html>
  );
}
