import axios, { AxiosResponse } from 'axios';
import { IRate } from '../models/IRate';

export default class RateService {
  static async getRate(
    accessToken: string,
    take: number
  ): Promise<AxiosResponse<IRate[]>> {
    return await axios.get<IRate[]>(`http://localhost:5000/rate?take=${take}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    });
  }
}
