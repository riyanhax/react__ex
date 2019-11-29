import {fetchAccountWalletCurrency} from 'api/accountPage/accountSideBar';
import actions from 'act/';
import { call, put, takeEvery } from 'redux-saga/effects';

function* setAccountCurrency(){
    try{
        const currencyItems = yield call(fetchAccountWalletCurrency);
        yield put(actions.asccountSideBar.setAccountWalletCurrency(currencyItems));
    }
    catch(e){
        console.log(e)
    }
}


export function* getAccountCurrencySaga() {
    yield takeEvery(actions.asccountSideBar.getAccountWalletCurrency,setAccountCurrency);
}