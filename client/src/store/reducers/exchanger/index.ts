import { IRate } from '../../../models/IRate';
import { ExchangerAction, ExchangerActionEnum, ExchangerState } from './types';

const initialState: ExchangerState = {
  isLoading: false,
  rate: {} as IRate,
  error: '',
};

export default function exchangerReducer(
  state = initialState,
  action: ExchangerAction
): ExchangerState {
  switch (action.type) {
    case ExchangerActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case ExchangerActionEnum.SET_RATE:
      return { ...state, rate: action.payload };

    case ExchangerActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
