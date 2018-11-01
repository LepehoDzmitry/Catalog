import { IProduct } from './i-product';

export interface IStore {
  id: number;
  name: string;
  address: string;
  operationMode: string;
  products: IProduct[];
}
