import { listCategories } from "@/lib/commerce/categories";

export const fetchersMapping = async () => {
  return {
    category: async () => {
      const categoryProducts = await listCategories();

      return categoryProducts;
    }
  };
};

export default fetchersMapping;
