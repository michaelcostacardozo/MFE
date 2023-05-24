import type { Dispatch } from 'react';
import { Link, Category, SubCategory } from "@/types/cms/global";

export interface HeaderItemMenuDesktopProps {
  category?: Category;
  childCategories?: SubCategory[];
  link?: Link;
  isLink?: boolean;
  setActiveCategory?: Dispatch<any>;
  activeCategory?: Category | null;
}
