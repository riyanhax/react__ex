import actions from 'act/';
import {fetchBalancesTable} from 'api/accountPage/accountMarginTrading'
import { call, put, takeEvery } from 'redux-saga/effects';

export function* getBalanceTableSaga(){
    yield takeEvery(actions.accountMarginTrading.getBalanceTable,setBalanceTable);
}

function* setBalanceTable(){
    try{
        const table = yield call(fetchBalancesTable);
        yield put(actions.accountMarginTrading.setBalanceTable(table))
    }
    catch(e){
        console.log(e)
    }
    
}