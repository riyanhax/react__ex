import { createActions} from 'redux-actions';

export const {setChat, makeMessage, loadMessages} = createActions({
  setChat: (data) => ({ data }),
  makeMessage:(text, lang) => ({text,lang}),
  loadMessages:() => ({})
});

