
import FooterSignup from "./components/Footer";
import { SiteHeader } from "./components/Header";
import "./globals.css";
import { Barlow_Condensed } from 'next/font/google'

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-barlow-condensed' })

export const metadata = {
  title: "Welcome to Hill Groove Coffee",
  description: "Experience the harmony of specialty coffee and curated vinyl at Hill Groove Coffee, your roastery and listening room in Dehradun.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.variable}>
        <SiteHeader></SiteHeader>
        {children}
        <FooterSignup></FooterSignup>
      </body>
    </html>
  );
}
