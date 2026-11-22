import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Elmer David P. Enting | Full-Stack Web & App Developer",
  description: "Full-Stack Web & App Developer in Palawan, Philippines. Fast, scalable web & mobile apps with clean UI/UX and strong security.",
  openGraph: { title: "Elmer David P. Enting", description: "Full-Stack Web & App Developer | AI-Accelerated Product Builder", type: "website" },
};
export const viewport: Viewport = { themeColor: "#090D16", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
