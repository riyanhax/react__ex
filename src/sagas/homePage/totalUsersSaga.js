import { call, put, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import { fetchGetTotalUsers } from 'api/homePage/totalUsers'


function* totalUsers() {
    try {
        const items = yield call(fetchGetTotalUsers);
        yield put(actions.home.setTotalUsers(items));
    } catch (e) {

    }
}

export function* totalUsersSaga() {
    yield takeEvery(actions.home.loadTotalUsers, totalUsers);
}