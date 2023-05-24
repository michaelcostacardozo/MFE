import { SearchResultsData } from "@/types/commerce/search";
import { handleFetchers } from "./sections";

export const getSearchData = async (
  context,
  fetchersArray
): Promise<SearchResultsData> => {
  const fetchers = await handleFetchers(fetchersArray);
  const promises = [];

  for (const resultKey in fetchers) {
    const fetcher = fetchers[resultKey];

    promises.push(fetcher(context));
  }

  const searchResults = await Promise.all(promises);
  const keys = Object.keys(fetchers);
  const props = {};

  searchResults.forEach((result, index) => {
    props[keys[index]] = result;
  });

  return {
    props,
  };
};
