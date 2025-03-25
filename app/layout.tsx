import './globals.css';
import Navbar from '../components/layout/Navbar';
import React from "react";


export const metadata = {
    title: 'Bxbby | Portfolio',
    description: 'Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="flex flex-col">
        <Navbar />
        <main className="flex-1 min-h-screen">
            {children}
        </main>
        </body>
        </html>
    );
}
