import { createStore, compose, applyMiddleware, Action } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import rootReducer from './reducers'
import { CryptoActionsType } from './actions/crypto';

const middlewares = [ thunkMiddleware ]

const store =
  compose(applyMiddleware(...middlewares))(createStore)(rootReducer)


export type RootAction = {
  type: CryptoActionsType;
  payload: any
}

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = Promise<any>> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>


export default store