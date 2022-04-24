import { IRate } from '../../../models/IRate';

export interface ExchangerState {
  isLoading: boolean;
  rate: IRate;
  error: string;
}

export enum ExchangerActionEnum {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_RATE = 'SET_RATE',
  SET_ERROR = 'SET_ERROR',
}

export interface SetIsLoadingAction {
  type: ExchangerActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetRateAction {
  type: ExchangerActionEnum.SET_RATE;
  payload: IRate;
}

export interface SetErrorAction {
  type: ExchangerActionEnum.SET_ERROR;
  payload: string;
}

export type ExchangerAction =
  | SetIsLoadingAction
  | SetRateAction
  | SetErrorAction;
