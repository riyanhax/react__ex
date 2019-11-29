import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import { openOrdersSaga, orderHistorySaga, tradeHistorySaga, removeOrderSaga } from './tradingPage/historySaga';
import {fetchLoginSaga} from './auth/authSaga';
import {userSaga} from './auth/userSaga';
import {orderSaga, orderMarketSaga} from './tradingPage/orderSaga'
import {tradingPairsSaga, orderBookSocketSaga, tradingOrderBookSaga, tradingDealsSaga, dealsSocketSaga} from './tradingPage/tradingSaga'
import {tradingWalletSaga} from './tradingPage/walletSaga'
import {chatSaga, chatSocketSaga, chatMssagesSaga} from './tradingPage/chatSaga'
import {tradingInfoSaga} from './tradingPage/infoSaga'
import {totalUsersSaga} from './homePage/totalUsersSaga'
import {getAccountCurrencySaga} from './accountPage/accountSaga'
import {getPublicCurrencies} from './accountPage/publicCurrenciesSaga'
import {getWalletAddressSaga,getWithdrawsHistorySaga} from './accountPage/accountSaga';

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
        removeOrderSaga(),
        totalUsersSaga(),
        getAccountCurrencySaga(),
        getPublicCurrencies(),
        getWalletAddressSaga(),
        getWithdrawsHistorySaga(),
    ]);
  }

