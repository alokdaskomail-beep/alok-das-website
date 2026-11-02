import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/layout/header";

const siteUrl = "https://alokdas.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alok Das | Hotel OTA Setup, Websites & Training in Nepal",
  description:
    "OTA setup and optimization, hotel websites, SEO, guest-message templates, practical team training and professional property photography for independent hospitality properties in Nepal.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Better OTA setup and guest communication for hotels in Nepal",
    description:
      "Improve your property’s booking platform setup, website and search visibility. Book a free 5-minute discovery call.",
    url: siteUrl,
    siteName: "Alok Das - Digital Growth Partner",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alok Das - Independent Digital Growth Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alok Das - Digital Growth Partner",
    description: "OTA setup, websites, SEO, guest communication and property photography for hospitality properties in Nepal.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon-ad.svg",
    shortcut: "/favicon-ad.svg",
  },
  manifest: "/site.webmanifest",
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
};

export const viewport: Viewport = {
  themeColor: "#0b2c20",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

