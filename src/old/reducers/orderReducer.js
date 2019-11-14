
import { handleActions } from 'redux-actions';
import { history } from '../history';
import { makeOrder, onChangeBuy, onChangeSell} from 'act/order';
let quote_unit= ""
let base_unit =""
if(history.location.state){

  quote_unit= history.location.state.quote_unit;
  base_unit = history.location.state.base_unit;
}

const InitailState = {

  limitFormDataBuy: {
    price: {
      vaild: false,
      value: 0,
      label: quote_unit
    },
    amount: {
      vaild: false,
      value: 0,
      label: base_unit
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: 0,
      label: quote_unit
    },
  },
  limitFormDataSell: {
    price: {
      vaild: false,
      value: 0,
      label: quote_unit
    },
    amount: {
      vaild: false,
      value: 0,
      label: base_unit
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: 0,
      label: quote_unit
    },
  }
}



export const orderReducer = handleActions({
  onChangeBuy: (state, action) => {
    
    let key = action.payload.e.target.name;
    let value = action.payload.e.target.value;
    let limitFormDataBuy = {...state.limitFormDataBuy};
    limitFormDataBuy[key].value = value
    return {
      ...state,
      limitFormDataBuy
    }
  },
  onChangeSell: (state, action) => {
    let key = action.payload.e.target.name;
    let value = action.payload.e.target.value;
    let limitFormDataSell = {...state.limitFormDataSell};
    limitFormDataSell[key].value = value
    return {
      ...state,
      limitFormDataSell
    }
  },
  makeOrder: (state) => {
    return {
      ...state,
    };
  }
}, InitailState);
