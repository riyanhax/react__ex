import { call, put, take, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import { eventChannel } from 'redux-saga';
import { fetchInfo } from "api/tradingPage/info"




function* getInfo({ payload: { pair } }) {
 
  try {
    const info = yield call(fetchInfo, pair)
    yield put(actions.info.setInfo(info))
  } catch (e) {
    //yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* tradingInfoSaga() {
  yield takeEvery(actions.info.loadInfo, getInfo);
}