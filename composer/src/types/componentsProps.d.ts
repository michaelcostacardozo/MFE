import { Configuration } from "@/types/cms/badge";
import { Global } from "@/types/cms/global";
import { Category } from "@/types/commerce/categories";
import { Order } from "@/types/commerce/order";
import { Profile } from "@/types/commerce/profile";
import { SearchResults } from "@/types/commerce/search";
import { Product } from "@/types/commerce/product";

export interface HeaderProps {
  global: Global;
  menuCategories: Category;
  stickyHeader?: boolean;
}