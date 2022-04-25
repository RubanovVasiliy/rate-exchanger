import { AppDispatch } from '../..';
import RateService from '../../../api/RatesServise';
import { IRate } from '../../../models/IRate';
import {
  RateActionEnum,
  SetErrorAction,
  SetIsLoadingAction,
  SetRateAction,
} from './types';

export const RateActionCreators = {
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
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
      dispatch(RateActionCreators.setIsLoading(true));
      setTimeout(async () => {
        const response = await RateService.getRate();
        dispatch(RateActionCreators.setRate(response.data));
        dispatch(RateActionCreators.setIsLoading(false));
      }, 1000);
    } catch (e) {
      dispatch(
        RateActionCreators.setError('The Rate is currently unavailable')
      );
    }
  },
};
