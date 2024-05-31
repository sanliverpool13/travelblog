import type { AppProps } from "next/app";
import GlobalStyle from "../global_styles";
import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />

      <Head>
        <title>Madison And Sanjar</title>
      </Head>
      <Analytics />
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-JSW1J95JPC"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-JSW1J95JPC');`,
        }}
      /> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
