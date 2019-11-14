
import { createActions} from 'redux-actions';

export const {makeOrder, onChangeBuy, onChangeSell, setLabel} = createActions({
    onChangeBuy: (e) => ({e}),
    onChangeSell: (e) => ({e}),    
    makeOrder: (price, amount, type, pair) => ({price, amount, type, pair}),  
    setLabel: (base_unit,quote_unit) => ({base_unit,quote_unit}),    
  });

