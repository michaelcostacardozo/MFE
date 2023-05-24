import { Header } from "@/types/cms/global";
import { Category } from "@/types/commerce/categories";

export interface HeaderProps {
  children: React.ReactNode;
  global: Global;
  currentOrder?: Order;
  currentProfile?: Profile;
  menuCategories: Category;
  stickyHeader?: boolean;

}
