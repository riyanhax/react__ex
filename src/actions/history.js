
import { createActions} from 'redux-actions';

export const {loadOpenOrders, setOpenOrders, loadOrders, setOrderHistory, loadTradeHistory, setTradeHistory, removeOrder, filterHistory} = createActions({
    loadOpenOrders: () => ({  }),
    setOpenOrders: (items) => ({ items }), 
    loadOrders: () => ({ }), 
    setOrderHistory: (items) => ({ items }),
    loadTradeHistory: () => ({ }), 
    setTradeHistory: (items) => ({ items }), 
    removeOrder: (id) => ({ id }), 
    filterHistory: (pair) => ({ pair }), 
  });

  ``