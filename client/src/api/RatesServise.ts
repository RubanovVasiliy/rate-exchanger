import axios, { AxiosResponse } from 'axios';
import { IRate } from '../models/IRate';

export default class RateService {
  static async getRate(): Promise<AxiosResponse<IRate>> {
    return await axios.get<IRate>('./rates.json');
  }
}
