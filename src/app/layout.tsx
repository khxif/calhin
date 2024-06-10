import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calhin",
  description: "Official website of calhin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-black text-white")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
