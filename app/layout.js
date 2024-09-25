import localFont from "next/font/local";
import { Michroma } from 'next/font/google';
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import SiteNavLayout from "./components/site-nav/layout";
import HomeHeroLayout from "./components/home-hero/layout";
import HomeServicesLayout from "./components/home-services/layout";
import HomeTechnologiesLayout from "./components/home-technologies/layout";

const michroma = Michroma({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  variable: "--font-michroma",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased`}
      >
        <SiteNavLayout />
        <HomeHeroLayout />
        <HomeServicesLayout />
        <HomeTechnologiesLayout />
        {children}
      </body>
    </html>
  );
}
