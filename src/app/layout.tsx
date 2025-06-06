import Script from "next/script";
import { Manrope, Geologica } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "400",
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Peter Weiser Portfolio",
  keywords: "HTML, CSS, JavaScript, TypeScript, React, Next, Tailwind, Frontend, Graphql",
  description:
    "Frontend Developer with strong experience in React, Next.js, TypeScript, and Tailwind CSS. Open to remote opportunities and freelance roles across Europe.",
  metadataBase: new URL("https://peterweiser.com"),
  authors: [{ name: "Peter Weiser", url: "https://peterweiser.com" }],
  openGraph: {
    title: "Peter Weiser Portfolio",
    description:
      "Frontend Developer with strong experience in React, Next.js, TypeScript, and Tailwind CSS. Open to remote opportunities and freelance roles across Europe.",
    url: "https://peterweiser.com",
    siteName: "Peter Weiser",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peter Weiser - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PWMM303M4E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWMM303M4E');
          `}
        </Script>

        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Peter Weiser",
              "url": "https://peterweiser.com",
              "image": "https://peterweiser.com/og-image.png",
              "jobTitle": "Frontend Developer",
              "sameAs": [
                "https://github.com/pizzaboi87",
                "https://linkedin.com/in/peterweiser87"
              ]
            }
          `}
        </Script>

        {/* Optional redundant tags (already handled by metadata but safe fallback) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="author" content="Peter Weiser" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://peterweiser.com/" />
      </head>
      <body
        className={`${manrope.variable} ${geologica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
