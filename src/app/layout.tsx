import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/layout/header";

const siteUrl = "https://alokdas.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alok Das | Hotel & Local Business Digital Growth in Nepal",
  description:
    "OTA setup, hotel websites and training for independent hospitality properties, plus practical visibility and enquiry systems for selected local service businesses in Kathmandu Valley.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hotel & Local Business Digital Growth in Nepal",
    description:
      "Practical booking, visibility and enquiry systems for independent hotels and selected local service businesses in Nepal.",
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
    title: "Hotel & Local Business Digital Growth in Nepal | Alok Das",
    description: "OTA setup, websites, SEO, training and practical enquiry systems for businesses in Nepal.",
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

