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
  title: "Iron Forge Fitness | Premier Gym & Fitness Center in Los Angeles",
  description:
    "Transform your body at Iron Forge Fitness. World-class equipment, expert trainers, 50+ weekly classes. Membership plans starting at $29/month. Join the premier fitness destination in Los Angeles.",
  keywords: [
    "gym",
    "fitness center",
    "Los Angeles gym",
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
    siteName: "Iron Forge Fitness",
    title: "Iron Forge Fitness | Premier Gym & Fitness Center in Los Angeles",
    description:
      "Transform your body at Iron Forge Fitness. World-class equipment, expert trainers, 50+ weekly classes. Membership plans starting at $29/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Forge Fitness | Premier Gym & Fitness Center in Los Angeles",
    description:
      "Transform your body at Iron Forge Fitness. World-class equipment, expert trainers, 50+ weekly classes.",
  },
  alternates: {
    canonical: "https://ironforge.com",
  },
  category: "fitness",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ironforge.com",
  name: "Iron Forge Fitness",
  description:
    "Premier gym and fitness center in Los Angeles offering world-class equipment, expert trainers, and 50+ weekly group fitness classes.",
  url: "https://ironforge.com",
  telephone: "+1-555-123-4567",
  email: "info@ironforge.com",
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
  priceRange: "$29 - $99/month",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://facebook.com/ironforge",
    "https://instagram.com/ironforge",
    "https://twitter.com/ironforge",
    "https://youtube.com/ironforge",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Membership Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Membership",
        description:
          "Access to gym floor, basic equipment, locker room, 2 group classes/month",
        price: "29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro Membership",
        description:
          "Unlimited group classes, personal trainer intro session, sauna & steam room access",
        price: "59.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Elite Membership",
        description:
          "4 PT sessions/month, 24/7 gym access, custom meal plans, exclusive member events",
        price: "99.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Weight Floor", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cardio Zone", value: true },
    { "@type": "LocationFeatureSpecification", name: "Group Fitness Studios", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sauna", value: true },
    { "@type": "LocationFeatureSpecification", name: "Steam Room", value: true },
    { "@type": "LocationFeatureSpecification", name: "Recovery Area", value: true },
    { "@type": "LocationFeatureSpecification", name: "Nutrition Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Locker Rooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
  ],
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
