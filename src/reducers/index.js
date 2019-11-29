import {combineReducers} from 'redux';
import {authReducer} from "./auth/authReducer";
import signUpReducer from "./auth/signUpReducer";
import passRecReducer from "./auth/passRecReducer";
import {tradingReducer} from "./tradingPage/tradingReducer";
import {userReducer} from "./auth/userReducer";
import {historyReducer} from "./tradingPage/historyReducer";
import {orderReducer} from "./tradingPage/orderReducer";
import {walletReducer} from "./tradingPage/walletReducer";
import {chatReducer} from "./tradingPage/chatReducer";
import { connectRouter } from 'connected-react-router';
import { history } from 'src/history';
import {TotalUsersReducer} from './homePage/totalUserReducer';
import {mainWalletCurrencyReducer} from './accountPage/walletReducer';
import {publicCurrenciesReducer} from './accountPage/publicCurrenciesReducer';
import {depositWalletReducer} from './accountPage/depositWalletReducer';
import {withdrawsHistoryReducer} from './accountPage/withdrawsHistoryReducer';

const combineReducer = combineReducers({
    authReducer,
    signUpReducer,
    passRecReducer,
    tradingReducer,
    userReducer,
    historyReducer,
    orderReducer,
    walletReducer,
    chatReducer,
    TotalUsersReducer,
    mainWalletCurrencyReducer,
    publicCurrenciesReducer,
    depositWalletReducer,
    withdrawsHistoryReducer,
    router: connectRouter(history)
})

export default combineReducer;