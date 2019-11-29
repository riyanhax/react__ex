
import { createActions} from 'redux-actions';

export const {loadInfo,setInfo} = createActions({
  loadInfo: (pair) => ({ pair }),
  setInfo: (info) => ({ info }), 

  });
