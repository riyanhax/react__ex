
import { createActions} from 'redux-actions';

export const {loadOpenOrders, setOpenOrders} = createActions({
    loadOpenOrders: () => ({  }),
    setOpenOrders: (items) => ({ items }),  
  });

