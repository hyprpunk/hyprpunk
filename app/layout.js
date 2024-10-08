import localFont from "next/font/local";
import { Michroma, Roboto_Mono, Poppins } from 'next/font/google';
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import SiteNavLayout from "./components/site-nav/layout";
import HomeHeroLayout from "./components/home-hero/layout";
import HomeServicesLayout from "./components/home-services/layout";
import HomeTechnologiesLayout from "./components/home-technologies/layout";
import ProjectSections from "./components/home-projects/layout";
import ContactSection from "./components/home-contact/layout";
import Footer from "./components/footer/layout";
import JumpTopWidget from "./components/jump-top-widget/layout";
import GoogleAnalytics from "./components/GoogleAnalytics";

import favicon from "../public/favicon/favicon.ico";
import faviconApple from "../public/favicon/apple-touch-icon.png";
import faviconSvg from "../public/favicon/favicon.svg";
import favicon48 from "../public/favicon/favicon-48x48.png";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  variable: "--font-roboto-mono",
});

const michroma = Michroma({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  variable: "--font-michroma",
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "700",
  variable: "--font-poppins",
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

export const metadata = {
  title: "HYPRPUNK",
  description: "Revolutionize Your Online Presence with HYPRPUNK",
}

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      {/* Everything here will be added to the <head> of the page */}
      <head>
        <GoogleAnalytics />
        <link rel="icon" type="image/png" href={favicon48.src} sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href={faviconSvg.src} />
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple.src} />
        <meta name="apple-mobile-web-app-title" content="HyprPunk" />
        <link rel="manifest" href="/public/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} ${robotoMono.variable} ${poppins.variable} antialiased`}
      >
        <SiteNavLayout />
        <HomeHeroLayout />
        <HomeServicesLayout />
        <HomeTechnologiesLayout />
        <ProjectSections />
        <ContactSection />
        <JumpTopWidget />
        <Footer />
      </body>
    </html>
  );
}
