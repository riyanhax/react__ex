
import { createActions} from 'redux-actions';

export const {makeOrder, makeOrderMarket, onChangeBuy, onChangeSell, onChangeMarketSell, onChangeMarketBuy, setLabel, changeFormPrice} = createActions({
    onChangeBuy: (e) => ({e}),
    onChangeSell: (e) => ({e}),
    onChangeMarketSell: (e) => ({e}),
    onChangeMarketBuy: (e) => ({e}),       
    makeOrder: (...args) => ({...args}),
    makeOrderMarket: (...args) => ({...args}),    
    setLabel: (base_unit,quote_unit) => ({base_unit,quote_unit}), 
    changeFormPrice: (form, wallet) => ({form, wallet}),
    
  });

