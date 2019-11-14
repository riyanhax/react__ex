
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser } from "api/auth"
import actions from '../actions';
import { push } from 'connected-react-router';
import { checkUser } from './userSaga';


export function* fetchLogin({ payload: { email, password } }) {

  try {
    yield call(loginUser, email, password);
    yield call(checkUser);
    yield put(
      push(
        { pathname: `/trading/ethusd` },
        {
          pair: "ethusd",
          base_unit: "eth",
          quote_unit: "usd"
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

