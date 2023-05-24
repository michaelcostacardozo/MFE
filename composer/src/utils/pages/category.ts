import { handleFetchers } from "./sections";

export const getCategoryResultsData = async (context, fetchersArray) => {
  const fetchers = await handleFetchers(fetchersArray);
  const promises = [];

  for (const resultKey in fetchers) {
    const fetcher = fetchers[resultKey];

    promises.push(fetcher(context));
  }

  const categoryResults = await Promise.all(promises);
  const keys = Object.keys(fetchers);
  const props = {};

  categoryResults.forEach((result, index) => {
    props[keys[index]] = result;
  })

  return {
    props
  };
}
