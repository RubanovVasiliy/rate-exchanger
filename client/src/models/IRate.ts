import { ICurrency } from './ICurrency';

export interface IRate {
  name: string;
  date: string;
  currencies: ICurrency[];
}
