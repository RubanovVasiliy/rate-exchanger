import { RateState } from './types';

export const getPrices = (
  state: RateState,
  currencyIn: string,
  currencyOut: string
): [number, number] => {
  const currencyInValue: number = parseFloat(
    String(
      state.rate.currencies.find((el) => el.charCode === currencyIn)!.value
    )
  );
  const currencyOutValue: number = parseFloat(
    String(
      state.rate.currencies.find((el) => el.charCode === currencyOut)!.value
    )
  );

  return [currencyInValue, currencyOutValue];
};
