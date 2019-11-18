
import { createActions} from 'redux-actions';

export const {loadOpenOrders, setOpenOrders, loadOrders, setOrderHistory} = createActions({
    loadOpenOrders: () => ({  }),
    setOpenOrders: (items) => ({ items }), 
    loadOrders: () => ({ }), 
    setOrderHistory: (items) => ({ items }),  
  });

