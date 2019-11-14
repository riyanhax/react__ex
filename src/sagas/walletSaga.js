
import { call, put, take, takeEvery } from 'redux-saga/effects';
import { fetchWallet} from "api/wallet"
import actions from 'act/';


function* tradingWallet({ payload: { base_unit, quote_unit } }) {

    try {

    const wallet = yield call(fetchWallet, quote_unit,base_unit )
    yield put(actions.wallet.setWallet(wallet))
    }
    catch (error) {
        console.log(error)
    }
  
  };
  
  export function* tradingWalletSaga() {
  
    yield takeEvery(actions.wallet.loadWallet, tradingWallet);
  }
  