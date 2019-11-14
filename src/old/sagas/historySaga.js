import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchOpenOrders} from "api/history" 
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