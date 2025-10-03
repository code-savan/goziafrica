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
  title: "Gozi Africa - Empowering Communities Across Africa",
  description: "Join Gozi Africa in creating sustainable change across African communities through education, healthcare, and agricultural initiatives. Support our mission to uplift children and build a brighter future.",
  keywords: [
    "Africa",
    "charity",
    "non-profit",
    "education",
    "healthcare",
    "agriculture",
    "community development",
    "children",
    "donation",
    "volunteer",
    "NGO",
    "sustainable development"
  ],
  authors: [{ name: "Gozi Africa" }],
  creator: "Gozi Africa",
  publisher: "Gozi Africa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goziafrica.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gozi Africa - Empowering Communities Across Africa",
    description: "Join Gozi Africa in creating sustainable change across African communities through education, healthcare, and agricultural initiatives.",
    url: "https://goziafrica.org",
    siteName: "Gozi Africa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Children in Africa - Gozi Africa Mission",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gozi Africa - Empowering Communities Across Africa",
    description: "Join Gozi Africa in creating sustainable change across African communities through education, healthcare, and agricultural initiatives.",
    images: ["https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=630&fit=crop&crop=center"],
    creator: "@goziafrica",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
