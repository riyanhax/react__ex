import { call, put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { fetchPairs, fetchDeals, fetchOrderBook } from "api/trading"
import actions from 'act/';

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




function* tradingOrderBook({ payload: { pair } }) {

  try {
    const orderBook = yield call(fetchOrderBook, pair)
    yield put(actions.trading.setOrderBook(orderBook))
  }
  catch (error) {

  }

};

export function* tradingOrderBookSaga() {

  yield takeEvery(actions.trading.loadOrderBook, tradingOrderBook);
}




function* tradingDeals({ payload: { pair } }) {

  try {
    const deals = yield call(fetchDeals, pair)
    yield put(actions.trading.setDeals(deals))
  }
  catch (error) {

  }

};

export function* tradingDealsSaga() {

  yield takeEvery(actions.trading.loadDeals, tradingDeals);
}



function* createEventOrderBook(cable, pair) {
  let { setOrderBook } = actions.trading;
  return eventChannel(emit => {
    cable.subscriptions.create({
      channel: 'MarketsChannel'
      , market: pair
    }, {

      received: (data) => {
        
        return emit({ type: setOrderBook, data });
      },

    });
    return () => {
      cable.subscriptions.consumer.disconnect();
    };
  });
}



function* OrderBookWatcher({ payload: { pair, cable } }) {

  let orderBookChanel = yield call(createEventOrderBook, cable, pair);
  while (true) {
    const orderBookAction = yield take(orderBookChanel);
    yield put(orderBookAction);
  }
}
export function* orderBookSocketSaga() {
  yield takeEvery(actions.trading.handleSocketOrderBook, OrderBookWatcher);
}

////////////////

function* createEventDeals(cable, pair) {
  let { setDeals } = actions.trading;
  return eventChannel(emit => {
    cable.subscriptions.create({
      channel: 'TradesChannel'
      , market: pair
    }, {

      received: (data) => {
        console.log(data)
        return emit({ type: setDeals, data });
      },

    });
    return () => {
      cable.subscriptions.consumer.disconnect();
    };
  });
}



function* dealsWatcher({ payload: { pair, cable } }) {

  let dealsChanel = yield call(createEventDeals, cable, pair);
  while (true) {
    const dealsAction = yield take(dealsChanel);
    yield put(dealsAction);
  }
}
export function* dealsSocketSaga() {
  yield takeEvery(actions.trading.handleSocketOrderBook, dealsWatcher);
}






