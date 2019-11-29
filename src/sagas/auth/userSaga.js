import { call, put, takeEvery } from 'redux-saga/effects';
import actions from '../../actions';
import { getUser } from '../../api/auth/user';


export function* checkUser() {
  
  try {
    let user = yield call(getUser);
   yield put(actions.user.successUser(user));
  } catch (e) {
    yield put(actions.user.failUser());
  }
}

export function* userSaga() {
  
  yield takeEvery(actions.user.checkUser, checkUser);
}
