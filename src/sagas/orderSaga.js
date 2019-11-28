import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import { fetchOrder, fetchOrderMarket } from 'api/order';
import { store } from '../store';

function* makeOrder({ payload: { price, amount, type, pair, formName } }) {

    try {

      const resp = yield call(fetchOrder, price, amount, type, pair);

      if (resp["errors"]) {
        yield put(actions.order.failOrder(formName))
      }
      else {
        yield put(actions.order.successOrder(formName))
      }
      setTimeout(() => {
        store.dispatch(actions.order.clearOrder(formName))
      }, 2200)


    } catch (e) {

    }
  }

  export function* orderSaga() {
    yield takeEvery(actions.order.makeOrder, makeOrder);
  }

  function* makeOrdMarket({ payload: {ord_type, amount, type, pair, formName } }) {

    try {

      const resp = yield call(fetchOrderMarket, ord_type, amount, type, pair);

      if (resp["errors"]) {
        yield put(actions.order.failOrder(formName))
      }
      else {
        yield put(actions.order.successOrder(formName))
      }
      setTimeout(() => {
        store.dispatch(actions.order.clearOrder(formName))
      }, 2200)


    } catch (e) {

    }



  
  }

  export function* orderMarketSaga() {
    yield takeEvery(actions.order.makeOrderMarket, makeOrdMarket);
  }

