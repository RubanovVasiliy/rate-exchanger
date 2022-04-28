import axios, { AxiosResponse } from 'axios';
import { IToken } from '../models/IToken';

export default class UserService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<IToken>> {
    return await axios.post<IToken>('http://localhost:5000/auth/login', {
      username: username,
      password: password,
    });
  }
}
