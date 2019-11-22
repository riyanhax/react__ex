import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import { openOrdersSaga, orderHistorySaga } from './historySaga';
import {fetchLoginSaga} from './authSaga';
import {userSaga} from './userSaga';
import {orderSaga} from './orderSaga'
import {tradingPairsSaga, orderBookSocketSaga, tradingOrderBookSaga, tradingDealsSaga, dealsSocketSaga} from './tradingSaga'
import {tradingWalletSaga} from './walletSaga'
import {chatSaga, chatSocketSaga, chatMssagesSaga} from './chatSaga'
import {tradingInfoSaga} from './infoSaga'
import {totalUsersSaga} from './homePage/totalUsersSaga'
import {getAccountCurrencySaga} from './accountPage/accountSaga'
import {getPublicCurrencies} from './accountPage/publicCurrenciesSaga'

export default function* rootSaga() {
    yield all([
        tradingPairsSaga(),
        fetchLoginSaga(),
        userSaga(),
        openOrdersSaga(),
        orderHistorySaga(),
        orderSaga(),
        tradingOrderBookSaga(),
        orderBookSocketSaga(),
        dealsSocketSaga(),
        tradingDealsSaga(),
        tradingWalletSaga(),
        chatSocketSaga(),
        chatSaga(),
        chatMssagesSaga(),
        tradingInfoSaga(),
        totalUsersSaga(),
        getAccountCurrencySaga(),
        getPublicCurrencies(),
    ]);
  }

