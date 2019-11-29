
import { createActions} from 'redux-actions';

export const {checkUser, successUser, failUser} = createActions({
    checkUser: () => ({}),
    successUser: (data) => ({data}),
    failUser: () => ({})
  });

