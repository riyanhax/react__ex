import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import {fetchAccountWalletCurrency,fetchtWalletAddress,fetchWithdrawsHistory} from 'api/accountPage/account';
import { func } from 'prop-types';


function* setAccountCurrency(){
    try{
        const currencyItems = yield call(fetchAccountWalletCurrency);
        yield put(actions.account.setAccountWalletCurrency(currencyItems));
    }
    catch(e){
        console.log(e)
    }
}


export function* getAccountCurrencySaga() {
    yield takeEvery(actions.account.getAccountWalletCurrency,setAccountCurrency);
}


export function* getWalletAddressSaga() {
    yield takeEvery(actions.account.getWalletAddress,setWalletAddress);
}

function* setWalletAddress({ payload: { currency } }){
    try{
        const walletAddres = yield call(fetchtWalletAddress ,currency);
        yield put(actions.account.setWalletAddress(walletAddres));
    }
    catch(e){
        console.log(e)
    }
}

export function* getWithdrawsHistorySaga(){
    yield takeEvery(actions.account.getWithdrawsHistory,setWithdrawsHistory);
}

function* setWithdrawsHistory(){
    try{
            const history = yield call(fetchWithdrawsHistory);
            console.log(history)
            yield put(actions.account.setWithdrawsHistory(history));
    }
    catch(e){
        console.log(e)
    }
}