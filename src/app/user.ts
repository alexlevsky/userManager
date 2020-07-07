export interface User {
    name: string;
    email: string;
    phone: string;
    website: string;
    id: number;
    username: string;
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    };
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    };
  }