import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import { fetchOrder,fetchOrderMarket } from 'api/order';

 function* makeOrder({ payload: { ...args } }) {
 
  try {
    yield call(fetchOrder, args);
  } catch (e) {
    //yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* orderSaga() {
  yield takeEvery(actions.order.makeOrder, makeOrder);
}



 function* makeOrdMarket({ payload: { ...args } }) {
  try {
    yield call(fetchOrderMarket, args);
  } catch (e) {
    //yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* orderMarketSaga() {
  yield takeEvery(actions.order.makeOrderMarket, makeOrdMarket);
}

