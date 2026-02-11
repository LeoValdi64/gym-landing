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
  title: "Iron Forge Fitness | Premium Gym & Training",
  description:
    "Join Iron Forge Fitness for world-class equipment, expert personal trainers, group classes, and 24/7 gym access. Start your transformation today.",
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
  authors: [{ name: "Iron Forge Fitness" }],
  creator: "Iron Forge Fitness",
  publisher: "Iron Forge Fitness",
  icons: {
    icon: "/favicon.ico",
  },
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
    url: "https://gym-landing.vercel.app",
    siteName: "Iron Forge Fitness",
    title: "Iron Forge Fitness | Premium Gym & Training",
    description:
      "Join Iron Forge Fitness for world-class equipment, expert personal trainers, group classes, and 24/7 gym access. Start your transformation today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iron Forge Fitness - Premium Gym & Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Forge Fitness | Premium Gym & Training",
    description:
      "Join Iron Forge Fitness for world-class equipment, expert personal trainers, group classes, and 24/7 gym access.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://gym-landing.vercel.app",
  },
  category: "fitness",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gym-landing.vercel.app",
  name: "Iron Forge Fitness",
  description:
    "Premium fitness center with world-class equipment and expert personal trainers",
  url: "https://gym-landing.vercel.app",
  telephone: "(555) 123-4567",
  email: "info@ironforge.com",
  image: "https://gym-landing.vercel.app/og-image.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Fitness Boulevard",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
