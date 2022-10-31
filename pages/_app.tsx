import type { AppProps } from "next/app";
import GlobalStyle from "../global_styles";
import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <RecoilRoot>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
