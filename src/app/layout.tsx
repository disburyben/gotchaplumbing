import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gotcha Plumbing & Gas | Coming Soon",
  description:
    "Gotcha Plumbing & Gas is currently under construction. We offer 24/7 emergency plumbing services across Greater Adelaide.",
  keywords: "plumbing, gas, emergency plumber, adelaide, gotcha plumbing",
  openGraph: {
    title: "Gotcha Plumbing & Gas | Coming Soon",
    description: "24/7 Emergency Plumbing Services in Adelaide.",
    type: "website",
    url: "https://gotchaplumbing.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Gotcha Plumbing & Gas",
              telephone: "+61428592610",
              email: "info@gotchaplumbing.com.au",
              areaServed: {
                "@type": "City",
                name: "Adelaide",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
