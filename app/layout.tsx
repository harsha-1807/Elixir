import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elixir",
  description: "Revolutionize the education",
  icons:"/ElixirLogo2.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className} style={{backgroundColor:"#FFFCF5"}}>
      <Header/>
        
        {children}
      <Footer/>
        </body>
    </html>
  );
}
