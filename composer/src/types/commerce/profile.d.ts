export interface Profile {
  lastName: string
  gender: string
  registrationDate: string
  id: string
  email: string
  receiveEmail: boolean
  firstName: string
  addresses: Address[]
  defaultShippingAddress: Address
  defaultBillingAddress: Address
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

