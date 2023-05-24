import type { Dispatch } from 'react';
import { Link, Category } from "@/types/cms/global";

export interface HeaderMenuDesktopCategoriesProps {
  menuCategories: Category[];
  headerLinks: Link[];
  setActiveCategory: Dispatch<any>;
  activeCategory: Category | null;
}
