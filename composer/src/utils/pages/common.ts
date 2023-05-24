import type { GetStaticPropsContext } from "next";

import type { Namespace } from "i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type ArrayElementOrSelf<T> = T extends Array<infer U> ? U[] : T[];

export const getServerSideTranslations = async (
  locale: string,
  namespaces: ArrayElementOrSelf<Namespace>
) => {
  return await serverSideTranslations(locale ?? "en", namespaces);
};

export const getCommonPageProps = async (context) => {
  const { locale, preview = false } = context as GetStaticPropsContext;
  const isServerSide = context?.req ?? false;

  if (isServerSide) {
    return {
      props: {
        ...(await getServerSideTranslations(locale, ["common"])),
        preview
      }
    };
  }

  return {
    props: {
      ...(await getServerSideTranslations(locale, ["common"])),
      preview
    }
  };
};
