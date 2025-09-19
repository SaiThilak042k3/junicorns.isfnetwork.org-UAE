export interface FormData {
    fullName: string;
    email: string;
    mobile: string;
    organization: string;
    designation: string;
    city: string;
    country: string;
    registrationType: string;
    arrivalFrom: string;
    otherArrivalLocation: string;
    arrivalDate: string;
    departureDate: string;
    specialRequests: string;
  }
  
  export interface FormErrors {
    [key: string]: string | undefined;
  }
  
  export interface CountryOption {
    label: string;
    value: string;
  }