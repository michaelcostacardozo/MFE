import { fetchAPI } from "./index";

import { category } from "@/constants/category";

import { Category } from "@/types/commerce/categories";
import { CategoryResults } from "@/types/commerce/categoryResults";

export async function getCategory(categoryId?: string | string[]): Promise<Category> {
  try {
    if (!categoryId) {
      categoryId = category.menuCategoryId;
    }
    const categoryData = await fetchAPI({
      path: `/categories/${categoryId}`,
      options: { ignoreTokenValidation: true },
    });

    return categoryData;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategoryProducts(categoryId: string | string[]): Promise<CategoryResults> {
  try {
    const result = await fetchAPI({
      path: `/categories/${categoryId}/products`,
      options: {
        ignoreTokenValidation: true,
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const result = await fetchAPI({
      path: `/categories`,
      options: {
        ignoreTokenValidation: true,
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}
