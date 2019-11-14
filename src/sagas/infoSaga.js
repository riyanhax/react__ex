import { call, put, take, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import { eventChannel } from 'redux-saga';
import { fetchInfo } from "api/info"





// function* createEventChat(cable) {

//   let { setChat } = actions.chat;
//   return eventChannel(emit => {
//     cable.subscriptions.create({
//       channel: 'ChatsChannel',
//       lang: "en"
//     }, {

//       received: (data) => {
//         return emit({ type: setChat, data });
//       },

//     });
//     return () => {
//       cable.subscriptions.consumer.disconnect();
//     };
//   });
// }


// function* chatWatcher({ payload: { cable } }) {
//   let chatChanel = yield call(createEventChat, cable);

//   while (true) {
//     const chatAction = yield take(chatChanel);
//     yield put(chatAction);
//   }
// }


// export function* chatSocketSaga() {
//   yield takeEvery(actions.trading.handleSocketOrderBook, chatWatcher);
// }



function* getInfo() {

  try {
    const data = yield call(fetchInfo)
    yield put(actions.info.setInfo(data))
  } catch (e) {
    //yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* tradingInfoSaga() {
  yield takeEvery(actions.info.loadInfo, getInfo);
}