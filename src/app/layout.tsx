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
  title: "FitZone Gym | Premium Fitness Center with Expert Trainers",
  description:
    "Premium fitness center with state-of-the-art equipment and expert trainers. Join FitZone Gym for classes, personal training, and more.",
  keywords: [
    "gym",
    "fitness center",
    "personal training",
    "group fitness classes",
    "CrossFit",
    "yoga",
    "HIIT",
    "strength training",
    "membership",
  ],
  authors: [{ name: "FitZone Gym" }],
  creator: "FitZone Gym",
  publisher: "FitZone Gym",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FitZone Gym",
    title: "FitZone Gym | Premium Fitness Center with Expert Trainers",
    description:
      "Premium fitness center with state-of-the-art equipment and expert trainers. Join FitZone Gym for classes, personal training, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitZone Gym | Premium Fitness Center with Expert Trainers",
    description:
      "Premium fitness center with state-of-the-art equipment and expert trainers.",
  },
  alternates: {
    canonical: "https://gym-landing.vercel.app",
  },
  category: "fitness",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "FitZone Gym",
  description:
    "Premium fitness center with state-of-the-art equipment and expert trainers",
  url: "https://gym-landing.vercel.app",
  telephone: "+1-555-FIT-ZONE",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Your City",
    addressRegion: "WA",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
