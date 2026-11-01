import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://alokdas.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alok Das | Hotel Booking & Guest Communication Systems in Nepal",
  description:
    "Practical systems for independent hotels, guesthouses and tourism properties in Nepal to get more direct guests, reduce OTA dependency and organize guest communication.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "More direct guests for independent hotels in Nepal",
    description:
      "Direct booking paths, clearer guest communication and less OTA dependency. Get a free visibility and communication check.",
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
    description: "Direct booking paths and guest communication systems for independent hospitality properties in Nepal.",
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
