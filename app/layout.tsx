"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navigation from "@/components/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css?family=Didact Gothic" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
            rel="stylesheet"/>
        <title>Portfolio</title>
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
    >
    <Navigation />
    {children}
    </body>
    </html>
  );
}
