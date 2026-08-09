import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://alokdas.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alok Das | Independent Digital Growth Partner",
  description:
    "Conversion-focused websites for service businesses and growing brands. Clear packages from NPR 35,000, delivered in as little as 5-7 working days.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Websites that turn visitors into qualified enquiries",
    description:
      "Clear website packages from NPR 35,000, with defined scope and delivery timelines.",
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
    description: "Websites that turn visitors into qualified enquiries.",
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
