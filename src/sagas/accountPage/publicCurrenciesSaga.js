import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import {fetchPublicCurrencies} from 'api/accountPage/account';


function* setPublicCurrencies(){
    try{
        let Currencies = yield call(fetchPublicCurrencies);
        //Chang BTC Currencies[0].id
        
        yield put(actions.account.setPublicCurrencies(Currencies));
        yield put(actions.account.getWalletAddress('btc'));
    }
    catch(e){
        console.log(exsp);
    }
}


export function* getPublicCurrencies(){
    yield takeEvery(actions.account.getPublicCurrencies,setPublicCurrencies);
}