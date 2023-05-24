import type { Dispatch } from 'react';
import { Image, Category, SubCategory, SubSectionItem } from "@/types/cms/global";

export interface HeaderMenuDesktopDropdownProps {
  activeCategory?: Category | null;
  setActiveCategory?: Dispatch<any>;
  stickyHeader?: boolean;
}

export interface DropdownItemProps {
  icon: Image;
  url: string;
  name: string;
  setActiveCategory?: Dispatch<any>;
}

export interface MenuItemProps {
  array: SubCategory[] | SubSectionItem[];
  name: string;
  setActiveCategory?: Dispatch<any>;
}
