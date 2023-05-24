export interface CategoryResults {
  navigation: NavigationItem[];
  breadcrumbs: Breadcrumbs;
  results: Results;
  term: string;
}

export interface NavigationItem {
  id: string;
  name: string;
  multiSelect: boolean;
  refinements: Refinement[];
}

export interface PriceRefinement {
  lowerValue: string;
  upperValue: string;
}

export interface Refinement {
  total: number;
  label: string;
  link: string;
  properties: PriceRefinementProperties;
}

export interface Breadcrumbs {
  removelAllLink: string;
  refinementCrumbs: RefinementCrumb[];
}

export interface RefinementCrumb {
  id: string;
  name: string;
  multiSelect: boolean;
  total: number;
  label: string;
  removeLink: string;
  properties: PriceRefinementProperties;
}

export interface Results {
  total: number;
  perPage: number;
  firstNum: number;
  lastNum: number;
  products: Product[];
}

export interface Product {
  id: string;
  route: string;
  name: string;
  images: {
    primaryFullURL: string;
  };
  salePrice: number;
  listPrice: number;
}
