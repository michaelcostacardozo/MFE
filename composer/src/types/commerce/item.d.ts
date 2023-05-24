export interface Items {
  items: Item[];
}

export interface Item {
  quantity: number;
  productId: string;
  shippingGroupId: string;
  shopperInput: ShopperInput;
  skuId: string;
  locationId: string;
}

export interface ShopperInput {
  key: string;
}
