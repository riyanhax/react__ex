import { call, put, take, takeEvery } from 'redux-saga/effects';
import actions from 'act/';
import { eventChannel } from 'redux-saga';
import { fetchMessage, fetchGetMessages } from 'api/chat';

function* chat({ payload: { text, lang } }) {

  try {
    yield call(fetchMessage, text, lang);
  } catch (e) {
    //yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* chatSaga() {
  yield takeEvery(actions.chat.makeMessage, chat);
}



function* createEventChat(cable) {

  let { setChat } = actions.chat;
  return eventChannel(emit => {
    cable.subscriptions.create({
      channel: 'ChatsChannel',
      lang: "en"
    }, {

      received: (data) => {
        return emit({ type: setChat, data });
      },

    });
    return () => {
      cable.subscriptions.consumer.disconnect();
    };
  });
}


function* chatWatcher({ payload: { cable } }) {
  let chatChanel = yield call(createEventChat, cable);

  while (true) {
    const chatAction = yield take(chatChanel);
    yield put(chatAction);
  }
}


export function* chatSocketSaga() {
  yield takeEvery(actions.trading.handleSocketOrderBook, chatWatcher);
}



function* getMessages() {

  try {
    const data = yield call(fetchGetMessages)
    yield put(actions.chat.setChat(data))
  } catch (e) {
    //yield put(actions.failOrder('Oups! Error occurs, please try again later.'));
  }
}

export function* chatMssagesSaga() {
  yield takeEvery(actions.chat.loadMessages, getMessages);
}