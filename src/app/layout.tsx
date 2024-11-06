import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import { fugazOne } from "../components/ui/fonts";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Next-Football",
  description: "A free app for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fugazOne?.className} antialiased`}>
          <NavBar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
