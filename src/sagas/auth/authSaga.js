
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser } from "api/auth/auth"
import actions from 'act/';
import { push } from 'connected-react-router';
import { checkUser } from './userSaga';


export function* fetchLogin({ payload: { email, password, initPair } }) {
  try {
    yield call(loginUser, email, password);
    yield call(checkUser);
    yield put(
      push(
        { pathname: `/trading/${initPair["id"]}` }
      )
    )

  } catch (e) {
    console.log("fail")
    // yield put(actions.failLogin('Oups! Error occurs, please try again later.'));
  }

}

export function* fetchLoginSaga() {

  yield takeEvery(actions.auth.login, fetchLogin);
}

