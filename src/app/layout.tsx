import type { Metadata } from "next";
import { Noto_Sans_JP, Space_Grotesk, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "松尾翔太 — Shota Matsuo",
  description: "API を主戦場にするフルスタックエンジニア。Next.js × TypeScript × Supabase を軸に、外部サービスをつなぎ合わせてWebサイトやシステムを作っています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${pressStart2P.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
