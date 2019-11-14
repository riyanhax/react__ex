
import { createActions} from 'redux-actions';

export const {loadPairs, loadOrderBook, setPairs, setOrderBook, handleSocketOrderBook, setOrderBookSocket, loadDeals, setDeals} = createActions({
  loadPairs: () => ({  }),
  setPairs: (pairs) => ({ pairs }), 
  loadOrderBook: (pair) => ({ pair }),
  setOrderBook: (orderBook) => ({ orderBook }),
  handleSocketOrderBook: (pair, cable) => ({ pair, cable }),
  setOrderBookSocket: (data) => ({ data }),
  loadDeals: (pair) => ({ pair }),
  setDeals: (deals) => ({ deals }),
  });

