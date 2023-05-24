import { CommonPageProps } from "@/types/pages/common";
import { CategoryResults } from "@/types/commerce/categoryResults";
import { Category } from "@/types/commerce/categories";

export interface CategoryResultsPageProps extends CommonPageProps {
  category: CommerceCategory;
  categoryResults: CategoryResults;
}
