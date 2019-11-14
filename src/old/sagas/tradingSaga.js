
import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchPairs} from "api/trading" 
import {fetchOrderBook} from "api/trading" 
import actions from '../actions';

function* tradingPairs() {
    try {
        const pairs = yield call(fetchPairs)
        yield put(actions.trading.setPairs(pairs))
    }
    catch (error) {

    }
};

  export function* tradingPairsSaga() {
    yield takeEvery(actions.trading.loadPairs, tradingPairs);
  }




  function* tradingOrderBook({ payload: {pair} }) {
    try {
        const orderBook = yield call(fetchOrderBook,pair)
        yield put(actions.trading.setOrderBook(orderBook))
    }
    catch (error) {

    }

};



  export function* tradingOrderBookSaga() {
    
    yield takeEvery(actions.trading.loadOrderBook, tradingOrderBook);
  }








