import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchOpenOrders, fetchOrderHistory} from "api/history" 
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