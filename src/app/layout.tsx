import "./globals.css";
import { fraunces, inter } from "./fonts";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://rkmattorneys.co.za"),
  title: "RKM Attorneys and Associates Incorporated",
  description:
    "Luxury-grade counsel in estate administration, litigation, labour, criminal law, and RAF matters.",
  keywords: [
    "RKM Attorneys",
    "estate administration attorneys Johannesburg",
    "litigation lawyers Gauteng",
    "labour law firm Marshalltown",
    "RAF claims attorneys",
    "criminal defence lawyers Johannesburg",
  ],
  category: "legal",
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "https://rkmattorneys.co.za", // ✅ real domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "RKM Attorneys and Associates Incorporated",
    description:
      "Trusted legal counsel in estate, litigation, labour, criminal law, and RAF matters.",
    url: "https://rkmattorneys.co.za",
    siteName: "RKM Attorneys Inc.",
    images: [
      {
        url: "https://rkmattorneys.co.za/images/og-preview.jpg", // ✅ place a real 1200x630 image in /public/images
        width: 1200,
        height: 630,
        alt: "RKM Attorneys reception",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RKM Attorneys Inc.",
    description:
      "Luxury-grade legal counsel in estate, litigation, labour, criminal law, and RAF matters.",
    images: ["https://rkmattorneys.co.za/images/og-preview.jpg"],
  },
  other: {
    // ✅ Your actual Google Search Console verification
    "google-site-verification": "VyVoZNiYy3Dk_ESdUg2YWS06nD8NqvnciUn9YgE1KO0",
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": "https://rkmattorneys.co.za#legalservice",
      name: "RKM Attorneys and Associates Incorporated",
      image: "https://rkmattorneys.co.za/images/reception.jpg",
      url: "https://rkmattorneys.co.za",
      telephone: "+27 72 718 3125",
      email: "Info@rkmattorneysinc.co.za",
      hasMap:
        "https://www.google.com/maps/place/Khotso+House,+Marshalltown,+Johannesburg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Khotso House, 7th Floor, Marshalltown",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        postalCode: "2001",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -26.205,
        longitude: 28.041,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gauteng",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+27 72 718 3125",
        email: "Info@rkmattorneysinc.co.za",
        areaServed: "ZA",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.linkedin.com/company/rkm-attorneys",
        "https://wa.me/27727183125",
        "https://maps.app.goo.gl/7sg2JfBKP5y2P7Pm8",
      ],
      serviceType: [
        "Estate Administration",
        "Litigation",
        "Labour Law",
        "Criminal Law",
        "RAF Claims",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estate Administration",
            areaServed: "Johannesburg",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Road Accident Fund Claims",
            areaServed: "Gauteng",
          },
          availability: "https://schema.org/InStock",
        },
      ],
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased bg-onyx text-bone">
        {/* Ambient luxury glow backdrop */}
        <div className="fixed inset-0 pointer-events-none bg-goldradial" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
