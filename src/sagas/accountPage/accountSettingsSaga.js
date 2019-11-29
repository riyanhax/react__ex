import actions from 'act/';
import {fetchLoginHistory} from 'api/accountPage/accountSettings';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* getLoginHistorySaga(){
    yield takeEvery(actions.accountSettings.getLoginHistory,setLoginHistory);
}

function* setLoginHistory(){
    try{
        const history = yield call(fetchLoginHistory);
        yield put(actions.accountSettings.setLoginHistory(history))
    }
    catch(e){
        console.log(e);
    }
}