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
import {mainWalletCurrencyReducer} from './accountPage/accountSideBarReducer';
import {accountWithdrawalReducer} from './accountPage/accountWithdrawalReducer';
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
    accountWithdrawalReducer,
    
    router: connectRouter(history)
})

export default combineReducer;