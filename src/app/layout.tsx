import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Geist, Instrument_Serif } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const contentPattern = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/DoggoFaces.png`;


export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.summary,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="lg:grid lg:min-h-svh lg:grid-cols-[17.5rem_minmax(0,1fr)]">
          <SiteHeader />
          <div
            id="content"
            className="content-stage"
            style={{ "--content-pattern": `url("${contentPattern}")` } as CSSProperties}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
