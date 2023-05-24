import "@module-federation/nextjs-mf/src/include-defaults";

import Head from "next/head";
import { Montserrat } from "next/font/google";

import { appWithTranslation } from "next-i18next";

import NextNProgress from "nextjs-progressbar";

import "swiper/css";
import "swiper/css/pagination";

import { variables } from "@/constants/styles";

const montserrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color={variables.primary} />

      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(MyApp);
