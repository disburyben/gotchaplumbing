import type { Metadata } from "next";
import { Inter, Contrail_One, Norican } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const contrailOne = Contrail_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-norican",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gotcha Plumbing & Gas | Adelaide Plumber",
  description:
    "Gotcha Plumbing & Gas offers 24/7 emergency plumbing services, gas fitting, and maintenance across Greater Adelaide.",
  keywords: "plumbing, gas, emergency plumber, adelaide, gotcha plumbing",
  openGraph: {
    title: "Gotcha Plumbing & Gas | Adelaide Plumber",
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
    <html lang="en" className={`${inter.variable} ${contrailOne.variable} ${norican.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Gotcha Plumbing & Gas",
              telephone: "+61428592610",
              email: "gotchaplumbingandgas@gmail.com",
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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
