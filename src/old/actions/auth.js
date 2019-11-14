
import { createActions} from 'redux-actions';

export const {login, fetchLogout} = createActions({
    
    login: (email,password) => ({email,password }),  
    fetchLogout: () => ({})
  });

