import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { GetStaticProps } from "next";

import { HeaderProps} from "@/types/componentsProps";
import { HomePageProps } from "@/types/pages/home";
import { getCommonPageProps } from "@/utils/pages/common";
import { REVALIDATE_DEFAULT } from "@/constants/index";
// import { getPageSectionsData } from "@/utils/pages/sections";

const Header: React.ComponentType<HeaderProps> = dynamic(
  () => import("header/Header")
);

// const HeaderFetchers = import("header/categoryFetchers");

const REVALIDATE_HOME_PAGE =
  Number(process.env.REVALIDATE_HOME_PAGE) || REVALIDATE_DEFAULT;

export const getStaticProps: GetStaticProps = async (context) => {
  const [commonProps] = await Promise.all([
    getCommonPageProps(context)    
  ]);

  const pageProps = {
    props: { 
      pageSections: ['category'] 
    }
  }
  
  // const [pageSectionsData] = await Promise.all([
  //   getPageSectionsData(pageProps, [HeaderFetchers], {}),
  // ]);

  const categories = [
    {
      name: "Categoria teste",
      url: "https://teste.com.br"
    },
    {
      name: "Categoria teste 2",
      url: "https://teste.com.br"
    }
  ]
  const { props: common } = commonProps;
  return {
    props: {
      categories,
      ...common,
      // ...pageSectionsData?.props,
      menuCategories : categories,
    },
    revalidate: REVALIDATE_HOME_PAGE,
  };
};

const Home: React.FC<HomePageProps> = ({
  seo,
  global,  
  menuCategories,  
  stickyHeader,
  pageSectionsData
}) => {
  const router = useRouter();  

  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }

  const pageTitle = `Microfrontends AWS`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header
        global={global}
        // menuCategories={pageSectionsData?.category.categories}
        menuCategories={menuCategories}
        stickyHeader={stickyHeader}
      />
    </>
  );
};

export default Home;
