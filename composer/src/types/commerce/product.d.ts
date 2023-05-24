export type ProductType = {
  id: string;
  displayName: string;
};

export interface Product {
  badge: {
    type: string;
    text: string;
  };
  relatedProducts: RelatedProduct[];
  addOnProducts: AddOnProduct[];
  categories: Categories;
  images: Images;
  prices: Prices;
  dimensions: Dimensions;
  seo: Seo;
  variantOptions: VariantOption[];
  childSKUs: ChildSku[];
  variantValuesOrder: VariantValuesOrder;
  orderLimit: number;
  onlineOnly: boolean;
  active: boolean;
  shippable: boolean;
  type: string;
  id: string;
  brand: string;
  creationDate: string;
  route: string;
  avgCustRating: number;
  longDescription: string;
  name: string;
  description: string;
}

export interface RelatedProduct {
  id: string;
}

export interface AddOnProduct {
  id: string;
}

export interface Categories {
  parentCategories: ParentCategory[];
  parentCategory: ParentCategory;
}

export interface ParentCategory {
  id: string;
}

export interface Images {
  imageAltText: string;
  imageTitle: string;
  largeImageURL: string;
  mediumImageURL: string;
  sourceImageURL: string;
  smallImageURL: string;
  thumbImageURL: string;
  fullImageURL: string;
  largeImageURLs: string[];
  thumbImageURLs: string[];
  mediumImageURLs: string[];
  sourceImageURLs: string[];
  smallImageURLs: string[];
  fullImageURLs: string[];
}

export interface Prices {
  listPrices: ListPrices;
  salePrices: SalePrices;
  shippingSurcharges: ShippingSurcharges;
  listPrice: number;
  salePrice: number;
  shippingSurcharge: number;
}

export interface ListPrices {
  [key: string]: number;
}

export interface SalePrices {
  [key: string]: number;
}

export interface ShippingSurcharges {
  [key: string]: number;
}

export interface Dimensions {
  height: number;
  weight: number;
  width: number;
  length: number;
}

export interface Seo {
  urlSlugDerived: string;
}

export interface VariantOption {
  optionId: string;
  optionName: string;
  optionValueMap: OptionValueMap;
}

export interface OptionValueMap {
  [key: string]: number;
}

export interface ChildSku {
  dynamicPropertyMapLong: DynamicPropertyMapLong;
  images: Images;
  prices: Prices;
  onlineOnly: boolean;
  active: boolean;
  name: string;
  id: string;
}
export interface PropertyMapLong {
  [key: string]: number;
}

export interface VariantValuesOrder {
  [key: string]: number;
}
