import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import {fetchPublicCurrencies} from 'api/accountPage/account';


function* setPublicCurrencies(){
    try{
        let Currencies = yield call(fetchPublicCurrencies);
        yield put(actions.account.setPublicCurrencies(Currencies));
    }
    catch(e){
        console.log(exsp);
    }
}


export function* getPublicCurrencies(){
    yield takeEvery(actions.account.getPublicCurrencies,setPublicCurrencies);
}