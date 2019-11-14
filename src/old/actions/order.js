
import { createActions} from 'redux-actions';

export const {makeOrder, onChangeBuy, onChangeSell} = createActions({
    onChangeBuy: (e) => ({e}),
    onChangeSell: (e) => ({e}),    
    makeOrder: (price, amount, type, pair) => ({price, amount, type, pair}),  
  });

