
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser } from "api/auth"
import actions from 'act/';
import { push } from 'connected-react-router';
import { checkUser } from './userSaga';


export function* fetchLogin({ payload: { email, password, initPair } }) {
  try {
    yield call(loginUser, email, password);
    yield call(checkUser);
    yield put(
      push(
        { pathname: `/trading/${initPair["id"]}` },
        {
          pair: initPair["id"],
          base_unit: initPair["base_unit"],
          quote_unit: initPair["quote_unit"]
        }
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

