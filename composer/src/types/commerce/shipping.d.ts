export interface ShippingGroup {
  items: Item[];
}

export interface Item {
  shippingAddress: ShippingAddress;
  type: string;
}

export interface ShippingAddress {
  lastName: string;
  country: string;
  address3: string;
  address2: string;
  city: string;
  address1: string;
  postalCode: string;
  firstName: string;
  phoneNumber: string;
  state: string;
  email: string;
}
