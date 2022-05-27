import { combineReducers } from "redux";

import cryptoReducer from './crypto'

export default combineReducers({
  crypto: cryptoReducer
})