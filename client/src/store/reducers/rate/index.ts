import { IRate } from '../../../models/IRate';
import { RateAction, RateActionEnum, RateState } from './types';

const initialState: RateState = {
  isLoading: true,
  rate: {} as IRate,
  error: '',
};

export default function RateReducer(
  state = initialState,
  action: RateAction
): RateState {
  switch (action.type) {
    case RateActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case RateActionEnum.SET_RATE:
      return { ...state, rate: action.payload };

    case RateActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
