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
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "RKM Attorneys and Associates Incorporated",
      image: "https://yourdomain.com/images/reception.jpg",
      url: "https://yourdomain.com",
      telephone: "+27 72 000 0000",
      email: "Info@rkmattorneysinc.co.za",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Khotso House, 7th Floor, Marshalltown",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        postalCode: "2001",
        addressCountry: "ZA"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -26.205,
        longitude: 28.041
      },
      sameAs: [
        "https://www.linkedin.com/company/rkm-attorneys",
        "https://wa.me/27720000000"
      ]
    })
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-onyx text-bone antialiased">
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
