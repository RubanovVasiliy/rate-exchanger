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
    type: RateActionEnum.SET_IS_LOADING,
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
  load: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(RateActionCreators.setIsLoadingRate(true));
      setTimeout(async () => {
        const response = await RateService.getRate();
        dispatch(RateActionCreators.setRate(response.data));
        dispatch(RateActionCreators.setIsLoadingRate(false));
      }, 1000);
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
