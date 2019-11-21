import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import { openOrdersSaga, orderHistorySaga, tradeHistorySaga, removeOrderSaga } from './historySaga';
import {fetchLoginSaga} from './authSaga';
import {userSaga} from './userSaga';
import {orderSaga, orderMarketSaga} from './orderSaga'
import {tradingPairsSaga, orderBookSocketSaga, tradingOrderBookSaga, tradingDealsSaga, dealsSocketSaga} from './tradingSaga'
import {tradingWalletSaga} from './walletSaga'
import {chatSaga, chatSocketSaga, chatMssagesSaga} from './chatSaga'
import {tradingInfoSaga} from './infoSaga'

export default function* rootSasga() {
    yield all([
        tradingPairsSaga(),
        fetchLoginSaga(),
        userSaga(),
        openOrdersSaga(),
        orderHistorySaga(),
        orderSaga(),
        orderMarketSaga(),
        tradingOrderBookSaga(),
        orderBookSocketSaga(),
        dealsSocketSaga(),
        tradingDealsSaga(),
        tradingWalletSaga(),
        chatSocketSaga(),
        chatSaga(),
        chatMssagesSaga(),
        tradingInfoSaga(),
        tradeHistorySaga(),
        removeOrderSaga()
    ]);
  }

