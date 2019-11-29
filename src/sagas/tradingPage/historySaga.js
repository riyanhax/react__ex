import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchOpenOrders, fetchOrderHistory, fetchTradeHistory, fetchRemoveOrder } from "api/tradingPage/history"
import actions from 'act/';


function* openOrders() {

  try {
    const items = yield call(fetchOpenOrders)
    yield put(actions.history.setOpenOrders(items))

  }
  catch (error) {

  }

};

export function* openOrdersSaga() {
  yield takeEvery(actions.history.loadOpenOrders, openOrders);
}


function* orderHistory() {

  try {
    const items = yield call(fetchOrderHistory)
    yield put(actions.history.setOrderHistory(items))

  }
  catch (error) {

  }

};


export function* orderHistorySaga() {

  yield takeEvery(actions.history.loadOrders, orderHistory);
}




function* tradeHistory() {

  try {
    const items = yield call(fetchTradeHistory)
    yield put(actions.history.setTradeHistory(items))

  }
  catch (error) {

  }

};


export function* tradeHistorySaga() {

  yield takeEvery(actions.history.loadTradeHistory, tradeHistory);
}


function* removeOrder({ payload: { id } }) {

  try {
    yield call(fetchRemoveOrder,id)

  }
  catch (error) {

  }

};


export function* removeOrderSaga() {

  yield takeEvery(actions.history.removeOrder, removeOrder);
}



