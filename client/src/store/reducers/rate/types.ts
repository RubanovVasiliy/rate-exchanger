import { IExchanger } from '../../../models/IExchanger';
import { IRate } from '../../../models/IRate';

export interface RateState {
  isLoading: boolean;
  rate: IRate;
  error: string;
  exchanger: IExchanger;
}

export enum RateActionEnum {
  SET_IS_LOADING_RATE = 'SET_IS_LOADING_RATE',
  SET_RATE = 'SET_RATE',
  SET_ERROR = 'SET_ERROR',
  SET_CURRENCY = 'SET_CURRENCY',
  SET_VALUE = 'SET_VALUE',
}

export interface SetIsLoadingAction {
  type: RateActionEnum.SET_IS_LOADING_RATE;
  payload: boolean;
}

export interface SetRateAction {
  type: RateActionEnum.SET_RATE;
  payload: IRate;
}

export interface SetErrorAction {
  type: RateActionEnum.SET_ERROR;
  payload: string;
}

export interface SetCurrencyAction {
  type: RateActionEnum.SET_CURRENCY;
  payload: {
    name: string;
    value: string;
  };
}

export interface SetValueAction {
  type: RateActionEnum.SET_VALUE;
  payload: {
    name: string;
    value: number;
  };
}

export type RateAction =
  | SetIsLoadingAction
  | SetRateAction
  | SetErrorAction
  | SetCurrencyAction
  | SetValueAction;
