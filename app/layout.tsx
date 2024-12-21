import Head from "next/head";
import type { Metadata } from "next";
import PageLayout from "../components/pagelayout";
import { Analytics } from "@vercel/analytics/react";
import "./global.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Jelet Adventures",
  description:
    "A blog to share our adventures, whether in travel, food or anything else.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <body>
        <Analytics />
        <Navbar />
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
