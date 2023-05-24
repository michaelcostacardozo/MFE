import { PageSection, Seo } from "@/types/cms/pages";
import { Global } from "@/types/cms/global";
import { Configuration } from "@/types/cms/badge";
import { Category } from "@/types/commerce/categories";
import { Order } from "@/types/commerce/order";
import { Profile } from "@/types/commerce/profile";

export interface CommonPageProps {
  pageSections?: any;
  seo: Seo;
  preview: boolean;
  stickyHeader: boolean;
  global: Global;
  menuCategories: Category;
  locale: string;
  badge: Configuration[];
  pageSectionsData: {
    [key: string]: any
  };
  currentOrder?: Order;
  currentProfile?: Profile;
}
