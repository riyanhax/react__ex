
import { createActions} from 'redux-actions';

export const {loadPairs, loadOrderBook, setPairs, setOrderBook} = createActions({
  loadPairs: () => ({  }),
  setPairs: (pairs) => ({ pairs }), 
  loadOrderBook: (pair) => ({ pair }),
  setOrderBook: (orderBook) => ({ orderBook }),  
  });

