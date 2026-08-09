import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://alokdas.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alok Das | Independent Digital Growth Partner",
  description:
    "Practical websites, SEO, advertising, WhatsApp journeys, automation and tracking for service businesses, with specialist hotel growth support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital systems that help businesses get found, trusted and chosen",
    description:
      "Websites, SEO, ads, automation and tracking for service businesses, with a dedicated hotel growth practice.",
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
    description: "Websites, SEO, ads, automation and tracking for service businesses.",
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
      <body>{children}</body>
    </html>
  );
}
