import { IRate } from '../../../models/IRate';
import { getPrices } from './helper';
import { RateAction, RateActionEnum, RateState } from './types';

const initialState: RateState = {
  isLoading: true,
  rate: {} as IRate,
  error: '',
  exchanger: {
    valueIn: 1,
    valueOut: 1,
    currencyIn: 'USD',
    currencyOut: 'USD',
  },
};

export default function RateReducer(
  state = initialState,
  action: RateAction
): RateState {
  switch (action.type) {
    case RateActionEnum.SET_IS_LOADING_RATE:
      return { ...state, isLoading: action.payload };

    case RateActionEnum.SET_RATE:
      return { ...state, rate: action.payload };

    case RateActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case RateActionEnum.SET_VALUE:
      const [currencyInValue, currencyOutValue] = getPrices(
        state,
        state.exchanger.currencyIn,
        state.exchanger.currencyOut
      );
      if (action.payload.name === 'valueIn') {
        const newValue: number = parseFloat(
          ((action.payload.value * currencyInValue) / currencyOutValue).toFixed(
            4
          )
        );
        return {
          ...state,
          exchanger: {
            ...state.exchanger,
            valueIn: action.payload.value,
            valueOut: newValue,
          },
        };
      }
      if (action.payload.name === 'valueOut') {
        const newValue: number = parseFloat(
          ((action.payload.value * currencyOutValue) / currencyInValue).toFixed(
            4
          )
        );
        return {
          ...state,
          exchanger: {
            ...state.exchanger,
            valueOut: action.payload.value,
            valueIn: newValue,
          },
        };
      }
      return { ...state };

    case RateActionEnum.SET_CURRENCY:
      if (action.payload.name === 'currencyIn') {
        const [currInValue, currOutValue] = getPrices(
          state,
          action.payload.value,
          state.exchanger.currencyOut
        );
        const newValue: number = parseFloat(
          ((state.exchanger.valueIn * currOutValue) / currInValue).toFixed(4)
        );
        return {
          ...state,
          exchanger: {
            ...state.exchanger,
            valueOut: newValue,
            currencyIn: action.payload.value,
          },
        };
      }
      if (action.payload.name === 'currencyOut') {
        const [currInValue, currOutValue] = getPrices(
          state,
          state.exchanger.currencyIn,
          action.payload.value
        );
        const newValue: number = parseFloat(
          ((state.exchanger.valueIn * currInValue) / currOutValue).toFixed(4)
        );
        return {
          ...state,
          exchanger: {
            ...state.exchanger,
            valueOut: newValue,
            currencyOut: action.payload.value,
          },
        };
      }

      return { ...state };

    default:
      return state;
  }
}
