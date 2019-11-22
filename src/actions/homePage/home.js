import { createActions} from 'redux-actions';

export const {loadTotalUsers,setTotalUsers} = createActions({
    loadTotalUsers: () => ({}),
    setTotalUsers: (totalUsers) => ({totalUsers}), 
    });