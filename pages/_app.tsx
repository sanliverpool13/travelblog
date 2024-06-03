import type { AppProps } from "next/app";
import GlobalStyle from "../global_styles";
import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "leaflet/dist/leaflet.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />

      <Head>
        <title>Madison And Sanjar</title>
      </Head>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
