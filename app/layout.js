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
import GoogleAnalytics from './components/GoogleAnalytics';
import JumpTopWidget from "./components/jump-top-widget/layout";


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

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      {/* Everything here will be added to the <head> of the page */}
        <title>HYPRPUNK</title>
        <link rel="icon" href="../favicon.ico" type="image/x-icon" sizes="16x16" key="icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/logos/hp_apple_touch_icon.png" />
        <GoogleAnalytics />
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
