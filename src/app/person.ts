export interface Person {
  name?: string;
  lastname?: string;
  age?: number;
  address: {
    city?: string;
    street?: string;
    postCode?: number;
  };
}
