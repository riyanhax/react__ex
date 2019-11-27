import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import {fetchtWalletAddress,fetchWithdrawsHistory,fetchPublicCurrencies} from 'api/accountPage/accountWithdrawal';

export function* getWalletAddressSaga() {
    yield takeEvery(actions.accountWithdrawal.getWalletAddress,setWalletAddress);
}

function* setWalletAddress({ payload: { currency } }){
    try{
        const walletAddres = yield call(fetchtWalletAddress ,currency);
        yield put(actions.accountWithdrawal.setWalletAddress(walletAddres));
    }
    catch(e){
        console.log(e)
    }
}

export function* getWithdrawsHistorySaga(){
    yield takeEvery(actions.accountWithdrawal.getWithdrawsHistory,setWithdrawsHistory);
}

function* setWithdrawsHistory(){
    try{
            const history = yield call(fetchWithdrawsHistory);
            console.log(history)
            yield put(actions.accountWithdrawal.setWithdrawsHistory(history));
    }
    catch(e){
        console.log(e)
    }
}

function* setPublicCurrencies(){
    try{
        let Currencies = yield call(fetchPublicCurrencies);
        //Chang BTC Currencies[0].id
        
        yield put(actions.accountWithdrawal.setPublicCurrencies(Currencies));
        yield put(actions.accountWithdrawal.getWalletAddress('btc'));
    }
    catch(e){
        console.log(exsp);
    }
}


export function* getPublicCurrencies(){
    yield takeEvery(actions.accountWithdrawal.getPublicCurrencies,setPublicCurrencies);
}