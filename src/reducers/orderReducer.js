
import { handleActions } from 'redux-actions';
import { history } from '../history';
import { makeOrder, onChangeBuy, onChangeSell, setLabel } from 'act/order';

const InitailState = {
  limitFormDataBuy: {
    price: {
      vaild: false,
      value: "",
      name: "quote_unit",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: "",
      name: "quote_unit",
      label: ""
    },
  },
  // limitFormDataBuy: {...formsTemplate},
  // limitFormDataSell:{...formsTemplate}
  limitFormDataSell: {
    price: {
      vaild: false,
      value: "",
      name: "quote_unit",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: "",
      name: "quote_unit",
      label: ""
    },
  }
}


export const orderReducer = handleActions({
  onChangeBuy: (state, action) => {
    //return onChange(state, action.payload, state.limitFormDataBuy,limitFormDataBuy)
    let key = action.payload.e.target.name;
    let value = action.payload.e.target.value;
    let limitFormDataBuy = { ...state.limitFormDataBuy };
    limitFormDataBuy[key].value = value;
    limitFormDataBuy["total"].value = limitFormDataBuy["price"].value * limitFormDataBuy["amount"].value
    return {
      ...state,
      limitFormDataBuy
    }
  },
  onChangeSell: (state, action) => {
    let key = action.payload.e.target.name;
    let value = action.payload.e.target.value;
    let limitFormDataSell = { ...state.limitFormDataSell };
    limitFormDataSell[key].value = value
    limitFormDataSell["total"].value = limitFormDataSell["price"].value * limitFormDataSell["amount"].value
    return {
      ...state,
      limitFormDataSell
    }
  },

  setLabel: (state, action) => {
    let quote_unit = action.payload.quote_unit
    let base_unit = action.payload.base_unit
    let limitFormDataSell = { ...state.limitFormDataSell };
    let limitFormDataBuy = { ...state.limitFormDataBuy };
    function updateLabels(obj) {
      for (const key in obj) {
        if (obj[key].name == "quote_unit") {
          obj[key].label = quote_unit;
        }
        if (obj[key].name == "base_unit") {
          obj[key].label = base_unit;
        }
      }
    }
    updateLabels(limitFormDataSell);
    updateLabels(limitFormDataBuy);
    return {
      ...state,
      limitFormDataSell,
      limitFormDataBuy
    };
  },
  makeOrder: (state) => {
    return {
      ...state,
    };
  }
}, InitailState);
