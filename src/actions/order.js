
import { createActions} from 'redux-actions';

export const {makeOrder, failOrder, clearOrder, successOrder, makeOrderMarket, onChangeBuy, onChangeSell, onChangeMarketSell, onChangeMarketBuy, setLabel, changeFormPrice} = createActions({
    onChangeBuy: (e) => ({e}),
    onChangeSell: (e) => ({e}),
    onChangeMarketSell: (e) => ({e}),
    onChangeMarketBuy: (e) => ({e}),       
    makeOrder: (price, amount, type, pair, formName) => ({price, amount, type, pair, formName}),
    failOrder: (formName) =>({formName}),
    successOrder: (formName) =>({formName}),
    clearOrder: (formName) =>({formName}),
    makeOrderMarket: (...args) => ({...args}),    
    setLabel: (base_unit,quote_unit) => ({base_unit,quote_unit}), 
    changeFormPrice: (formName, wallet, e) => ({formName, wallet, e}),
  });

