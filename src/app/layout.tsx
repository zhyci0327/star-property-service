import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://starproperty.nz"),
  title: {
    default: "Star Property Service Limited | Auckland Renovation & Building Specialists",
    template: "%s | Star Property Service Limited",
  },
  description:
    "Star Property Service Limited is Auckland's premier residential & commercial renovation company, led by Director Raymond Zhang. Specialising in bespoke kitchen renovations, luxury bathrooms, full home extensions, and outdoor living across Auckland.",
  keywords: [
    "Star Property Service Limited",
    "Raymond Zhang Auckland",
    "Auckland house renovation",
    "Kitchen renovations Auckland",
    "Bathroom renovation Auckland",
    "Home extensions Auckland",
    "Decking Auckland",
    "Remuera builder",
    "Ponsonby renovation",
    "Takapuna luxury bathroom",
  ],
  authors: [{ name: "Raymond Zhang", url: "https://starproperty.nz" }],
  creator: "Star Property Service Limited",
  publisher: "Star Property Service Limited",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Star Property Service Limited | Auckland Renovation & Building Specialists",
    description:
      "Crafting exceptional living spaces across Auckland. Kitchens, luxury bathrooms, full house extensions, and bespoke outdoor living.",
    url: "https://starproperty.nz",
    siteName: "Star Property Service Limited",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Star Property Service Limited - Luxury Kitchen and Home Renovation Auckland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Property Service Limited | Auckland Renovation Specialists",
    description:
      "Auckland residential & commercial renovation company led by Director Raymond Zhang. High-end kitchens, bathrooms, extensions & decking.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Star Property Service Limited",
    "alternateName": "Star Property Service",
    "founder": {
      "@type": "Person",
      "name": "Raymond Zhang",
      "jobTitle": "Director & Principal"
    },
    "telephone": "+64 21 882 582",
    "email": "admin@starproperty.nz",
    "url": "https://starproperty.nz",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Auckland",
      "addressRegion": "Auckland",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -36.8485,
      "longitude": 174.7633
    },
    "areaServed": [
      "Auckland",
      "Remuera",
      "Ponsonby",
      "Takapuna",
      "Epsom",
      "Albany",
      "Parnell",
      "Grey Lynn",
      "Mission Bay"
    ],
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="en-NZ" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-brand-warmCream text-brand-dark selection:bg-brand-dark selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
