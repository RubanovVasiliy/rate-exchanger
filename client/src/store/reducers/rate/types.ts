import { IRate } from '../../../models/IRate';

export interface RateState {
  isLoading: boolean;
  rate: IRate;
  error: string;
}

export enum RateActionEnum {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_RATE = 'SET_RATE',
  SET_ERROR = 'SET_ERROR',
}

export interface SetIsLoadingAction {
  type: RateActionEnum.SET_IS_LOADING;
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

export type RateAction = SetIsLoadingAction | SetRateAction | SetErrorAction;
