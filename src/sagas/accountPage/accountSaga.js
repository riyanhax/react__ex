import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import {fetchAccountWalletCurrency} from 'api/accountPage/account';


function* setAccountCurrency(){
    try{
        const currencyItems = yield call(fetchAccountWalletCurrency);
        yield put(actions.account.setAccountWalletCurrency(currencyItems));
    }
    catch(e){
        console.log("excp")
    }
}


export function* getAccountCurrencySaga() {
    yield takeEvery(actions.account.getAccountWalletCurrency,setAccountCurrency);
}