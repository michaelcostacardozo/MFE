import { PageSection, Metadata } from "@/types/cms/pages"
import { Category } from "@/types/cms/categories"
import { Global, Badge } from "@/types/cms/global"
import { Category as CommerceCategory } from "@/types/commerce/categories"

export interface CategoryPageProps {
  pageSections: PageSection[];
  metadata: Metadata;
  preview: boolean;
  global: Global;
  menuCategories: CommerceCategory;
  badge: Badge[];
  category: Category;
  pageSectionsData: { [key: string]: any };
}
