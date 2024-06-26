import Head from "next/head";
import PageLayout from "../components/pagelayout";
import { Analytics } from "@vercel/analytics/react";
import "./global.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Jelet Adventures",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
