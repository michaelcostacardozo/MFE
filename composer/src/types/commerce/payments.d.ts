export interface PaymentGroup {
  items: Item[];
}

export interface Item {
  billingAddress: BillingAddress;
  paymentData: PaymentData;
  customProperties: CustomProperties;
  paymentMethod: string;
  amount: number;
  currencyCode: string;
}

export interface BillingAddress {
  lastName: string;
  country: string;
  address3: string;
  address2: string;
  city: string;
  address1: string;
  postalCode: string;
  firstName: string;
  phoneNumber: string;
  alias: string;
  state: string;
  email: string;
}

export interface PaymentData {
  cardCVV: string;
  cardNumber: string;
  cardType: string;
  expiryMonth: string;
  expiryYear: string;
  nameOnCard: string;
  saveCard: boolean;
}

export interface CustomProperties {
  key: string;
}
