import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import { tradingPairsSaga } from './tradingSaga';
import { tradingOrderBookSaga } from './tradingSaga';
import { openOrdersSaga } from './historySaga';
import {fetchLoginSaga} from './authSaga';
import {userSaga} from './userSaga';
import {orderSaga} from './orderSaga'


export default function* rootSaga() {
    yield all([
        tradingPairsSaga(),
        fetchLoginSaga(),
        userSaga(),
        openOrdersSaga(),
        orderSaga(),
        tradingOrderBookSaga()
    ]);
  }

