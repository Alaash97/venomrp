import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VenomRP - سيرفر الحياة الواقعية",
  description: "انضم إلى أفضل سيرفر حياة واقعية في الشرق الأوسط. تجربة لعب فريدة ومجتمع رياضي.",
  openGraph: {
    title: "VenomRP - سيرفر الحياة الواقعية",
    description: "انضم إلى أفضل سيرفر حياة واقعية في الشرق الأوسط. تجربة لعب فريدة ومجتمع رياضي.",
    url: "https://venomrp.com",
    siteName: "VenomRP",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "VenomRP Logo",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VenomRP - سيرفر الحياة الواقعية",
    description: "انضم إلى أفضل سيرفر حياة واقعية في الشرق الأوسط. تجربة لعب فريدة ومجتمع رياضي.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
