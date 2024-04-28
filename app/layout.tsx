"use client"
import { Mulish } from "next/font/google";
import { useState, useEffect } from "react";
import Menu from "@/components/Sidebar/Menu";
import "./global.css"

const open_sans = Mulish({ weight: "700", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={open_sans.className}>
        <section>
          <div className='flex'>
            <Menu />
            <div className='w-full h-screen overflow-y-auto'>
              {children}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
