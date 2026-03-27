import "@/styles/reset.css";
import "@/styles/globals.css";
import { Manrope, Fraunces } from "next/font/google";
import Providers from "./providers";
import site from "@/settings/site";
import BackToTop from "@/components/BackToTop/BackToTop";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className={`${manrope.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body>
        <NextTopLoader color="#0f5e66" height={3} showSpinner={false} />
        <div className="app-bg" />
        <Providers>
          {children}
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
