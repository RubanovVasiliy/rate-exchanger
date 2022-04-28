import { AppDispatch } from '../..';
import RateService from '../../../api/RatesServise';
import { IRate } from '../../../models/IRate';
import {
  RateActionEnum,
  SetCurrencyAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetRateAction,
  SetValueAction,
} from './types';

export const RateActionCreators = {
  setIsLoadingRate: (payload: boolean): SetIsLoadingAction => ({
    type: RateActionEnum.SET_IS_LOADING_RATE,
    payload: payload,
  }),
  setRate: (rate: IRate): SetRateAction => ({
    type: RateActionEnum.SET_RATE,
    payload: rate,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: RateActionEnum.SET_ERROR,
    payload: payload,
  }),
  load: (accessToken: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(RateActionCreators.setIsLoadingRate(true));
      const response = await RateService.getRate(accessToken, 1);
      dispatch(RateActionCreators.setRate(response.data[0]));
      dispatch(RateActionCreators.setIsLoadingRate(false));
    } catch (e) {
      dispatch(
        RateActionCreators.setError('The Rate is currently unavailable')
      );
    }
  },

  onChangeCurrency: (name: string, value: string): SetCurrencyAction => ({
    type: RateActionEnum.SET_CURRENCY,
    payload: {
      name: name,
      value: value,
    },
  }),
  onChangeValue: (name: string, value: number): SetValueAction => ({
    type: RateActionEnum.SET_VALUE,
    payload: {
      name: name,
      value: value,
    },
  }),
};
