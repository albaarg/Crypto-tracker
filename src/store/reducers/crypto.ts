import { RootAction } from "..";
import { LOAD_PRICING } from '../../types'

export interface CryptoState {
  name: string;
  pricings : any[]
}

const initialState = {
  name: 'Demo',
  pricings: []
}

export default function cryptoReducer(
  state: CryptoState = initialState,
  action: RootAction
): CryptoState {
  switch (action.type) {
    case LOAD_PRICING:
      return { ...state, pricings: action.payload }
    default:
      return state;
  }

  return state
}