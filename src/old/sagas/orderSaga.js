import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/order';

import { fetchOrder } from 'api/order';

export function* makeOrder({ payload: { price, amount, type, pair } }) {

  try {
    yield call(fetchOrder, price, amount, type, pair);
  } catch (e) {
    //yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* orderSaga() {
  yield takeEvery(actions.makeOrder, makeOrder);
}
