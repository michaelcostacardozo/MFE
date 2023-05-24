export interface Order {
  priceInfo: PriceInfo;
  paymentGroups: PaymentGroup[];
  shippingGroups: ShippingGroup[];
  items: CommerceItem[];
  orderId: string;
  dynamicProperties: DynamicProperty[];
  siteId: string;
  discountInfo: DiscountInfo;
  state: string;
  uuid?: string;
}

export interface PriceInfo {
  amount: number;
  total: number;
  shipping: number;
  shippingSurchargeValue: number;
  tax: number;
  subTotal: number;
  totalWithoutTax: number;
}

export interface PaymentGroup {
  paymentGroupId: string;
  paymentMethod: string;
  amount: number;
  customProperties: CustomProperties;
  billingAddress: Address;
  state: string;
}

export interface ShippingGroup {
  shippingMethod: ShippingMethod;
  shippingGroupId: string;
  shippingAddress: Address;
  items: ShippingGroupItem[];
}

export interface CommerceItem {
  images: string;
  name: string;
  dynamicProperties: any[];
  shippingSurchargeValue: number;
  discountAmount: number;
  description: string;
  itemDiscountInfos: any[];
  commerceItemId: string;
  price: number;
  variant: any[];
  quantity: number;
  productId: string;
  salePrice: number;
  orderDiscountInfos: any[];
  priceInfo: CommerceItemPriceInfo[];
  skuId: string;
  skuProperties: SkuProperty[];
  route: string;
  discountInfo: any[];
  shopperInput: any;
  listPrice: number;
}

export interface DynamicProperty {
  id: string;
  value: string;
}

export interface DiscountInfo {
  orderCouponsMap: OrderCouponsMap;
  orderDiscount: number;
  shippingDiscount: number;
  orderImplicitDiscountList: any[];
  unclaimedCouponsMap: UnclaimedCouponsMap;
}

export interface CustomProperties {
  [key: string]: string;
}

export interface Address {
  lastName: string;
  country: string;
  address3: any;
  address2: any;
  city: string;
  address1: string;
  postalCode: string;
  firstName: string;
  phoneNumber: string;
  alias: string;
  state: string;
  email: string;
}

export interface ShippingMethod {
  amount: number;
  name: string;
  customProperties: CustomProperties;
  estimatedDeliveryDate: string;
  deliveryDays: number;
  id: string;
}

export interface ShippingGroupItem {
  commerceItemId: string;
  quantity: number;
  productId: string;
  skuId: string;
}

export interface ShopperInput {
  [key: string]: string;
}

export interface CommerceItemPriceInfo {
  discounted: boolean;
  amount: number;
  tax: number;
  orderDiscountShare: number;
  detailedUnitPrice: number;
}

export interface Images {
  primaryThumbURL: string;
}

export interface SkuProperty {
  name: string;
  id: string;
  value: string;
}

export interface OrderCouponsMap {}

export interface UnclaimedCouponsMap {}
