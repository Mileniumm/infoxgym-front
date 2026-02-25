import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Admin Panel | Gym",
    description: "Sistema de gestión de horarios",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className="dark" style={{ colorScheme: 'dark' }}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased m-0 p-0`}
        >
        {children}
        </body>
        </html>
    );
}