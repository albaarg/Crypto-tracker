import { RootState } from "store";

export const getPricings = (state: RootState) => {

  return state.crypto.pricings;
};