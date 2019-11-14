
import { createActions} from 'redux-actions';

export const {login, fetchLogout} = createActions({
    
    login: (email,password, initPair) => ({email,password, initPair }),  
    fetchLogout: () => ({})
  });

