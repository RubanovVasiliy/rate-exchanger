import { AppDispatch } from '../..';
import UserService from '../../../api/UserServise';
import { IUser } from '../../../models/IUser';
import {
  AuthActionEnum,
  SetErrorAction,
  SetIsAuthAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';

export const AuthActionCreators = {
  setIsAuth: (payload: boolean): SetIsAuthAction => ({
    type: AuthActionEnum.SET_IS_AUTH,
    payload: payload,
  }),
  setIsLoadingAuth: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: payload,
  }),
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        const response = await UserService.login(username, password);
        if (response.data) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', username);
          localStorage.setItem('accessToken', response.data.access_token);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(
            AuthActionCreators.setUser({
              username: username,
              accessToken: response.data.access_token,
            })
          );
        }
      } catch (e) {
        dispatch(AuthActionCreators.setError('Неправильный логин или пароль'));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
