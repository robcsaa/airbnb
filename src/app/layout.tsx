import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oasis Airbnb | A calm stay, made simple.",
  description:
    "Oasis Airbnb offers a serene vacation rental experience with thoughtful design, personal touches, and an easy booking process.",
  openGraph: {
    title: "Oasis Airbnb",
    description:
      "Discover a calm stay made simple. Reach out to begin planning your visit with Oasis Airbnb.",
    url: "https://oasisairbnb.com",
    type: "website",
    siteName: "Oasis Airbnb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
