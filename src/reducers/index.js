import {combineReducers} from 'redux';
import {authReducer} from "./auth/authReducer";
import signUpReducer from "./auth/signUpReducer";
import passRecReducer from "./auth/passRecReducer";
import {tradingReducer} from "./tradingReducer";
import {userReducer} from "./userReducer";
import {historyReducer} from "./historyReducer";
import {orderReducer} from "./orderReducer";
import {walletReducer} from "./walletReducer";
import {chatReducer} from "./chatReducer";
import {infoReducer} from "./infoReducer";
import { connectRouter } from 'connected-react-router';
import { history } from '../history';
import {TotalUsersReducer} from './homePage/totalUserReducer';
import {mainWalletCurrencyReducer} from './accountPage/mainWalletReducer';
import {publicCurrenciesReducer} from './accountPage/publicCurrenciesReducer';
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
    
    router: connectRouter(history)
})

export default combineReducer;