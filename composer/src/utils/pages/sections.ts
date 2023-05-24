import { noop, isPromise } from "@/utils/generic";

export const handleFetchers = async (fetchersArray) => {
  const fetchersPromises = fetchersArray.map(async fetcher => await fetcher);
  const fetchersData = await Promise.all(fetchersPromises);
  const fetchersFunctions = fetchersData.map(fetcher => fetcher?.default || noop);
  const fetchersFunctionsPromises = fetchersFunctions.map(async (fetcher = noop) => isPromise(fetcher) ? await fetcher() : fetcher());
  const fetchers = await Promise.all(fetchersFunctionsPromises) || [];

  return fetchers.reduce((acc, fetcher) => { return { ...acc, ...fetcher } }, {});
};

export const getPageSectionsData = async (pageProps, fetchersArray, extraProperties) => {
  const { props: { pageSections = [] } = {} } = pageProps;  
  const pageSectionsData = {};
  const fetchers = await handleFetchers(fetchersArray);

  for (const section of pageSections) {
    if (fetchers[section]) {
      pageSectionsData[`${section}`] = await fetchers[section](section, extraProperties);
    }
  }

  return {
    props: {
      pageSectionsData
    }
  };
}
