import type { AppProps } from "next/app";
import GlobalStyle from "../global_styles";
import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />

      <Head>
        <title>Beyond Us Two</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
