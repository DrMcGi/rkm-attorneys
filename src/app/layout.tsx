import "./globals.css";
import { fraunces, inter } from "./fonts";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export const metadata = {
  title: "RKM Attorneys and Associates Incorporated",
  description:
    "Luxury-grade counsel in estate administration, litigation, labour, criminal law, and RAF matters.",
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "https://rkmattorneys.co.za", // ✅ real domain
  },
  openGraph: {
    title: "RKM Attorneys and Associates Incorporated",
    description:
      "Trusted legal counsel in estate, litigation, labour, criminal law, and RAF matters.",
    url: "https://rkmattorneys.co.za",
    siteName: "RKM Attorneys Inc.",
    images: [
      {
        url: "/images/og-preview.jpg", // ✅ place a real 1200x630 image in /public/images
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
    images: ["/images/og-preview.jpg"],
  },
  other: {
    // ✅ Your actual Google Search Console verification
    "google-site-verification": "VyVoZNiYy3Dk_ESdUg2YWS06nD8NqvnciUn9YgE1KO0",
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "RKM Attorneys and Associates Incorporated",
      image: "https://rkmattorneys.co.za/images/reception.jpg",
      url: "https://rkmattorneys.co.za",
      telephone: "+27 72 718 3125",
      email: "Info@rkmattorneysinc.co.za",
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
      sameAs: [
        "https://www.linkedin.com/company/rkm-attorneys",
        "https://wa.me/27727183125",
      ],
      serviceType: [
        "Estate Administration",
        "Litigation",
        "Labour Law",
        "Criminal Law",
        "RAF Claims",
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
