import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import { openOrdersSaga } from './historySaga';
import {fetchLoginSaga} from './authSaga';
import {userSaga} from './userSaga';
import {orderSaga} from './orderSaga'
import {tradingPairsSaga, orderBookSocketSaga, tradingOrderBookSaga, tradingDealsSaga, dealsSocketSaga} from './tradingSaga'
import {tradingWalletSaga} from './walletSaga'
import {chatSaga, chatSocketSaga, chatMssagesSaga} from './chatSaga'


export default function* rootSaga() {
    yield all([
        tradingPairsSaga(),
        fetchLoginSaga(),
        userSaga(),
        openOrdersSaga(),
        orderSaga(),
        tradingOrderBookSaga(),
        orderBookSocketSaga(),
        dealsSocketSaga(),
        tradingDealsSaga(),
        tradingWalletSaga(),
        chatSocketSaga(),
        chatSaga(),
        chatMssagesSaga(),
    ]);
  }

