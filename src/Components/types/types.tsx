export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
  [key: string]: any;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  username: string;
  [key: string]: any;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  [key: string]: any;
}
