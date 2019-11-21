import { handleActions } from 'redux-actions';


const InitailState = {
  limitFormDataBuy: {
    price: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type:"number",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type:"number",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type:"number",
      label: ""
    },
  },

  limitFormDataSell: {
    price: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type:"number",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type:"number",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type:"number",
      label: ""
    },
  },

  marketFormDataBuy: {
    price: {
      vaild: false,
      disabled:true,
      value: "Market",
      name: "quote_unit",
      type:"text",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type:"number",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],

  },

  marketFormDataSell: {
    price: {
      vaild: false,
      disabled:true,
      value: "Market",
      name: "quote_unit",
      type:"text",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type:"number",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],

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

  onChangeMarketSell: (state, action) => {
    let key = action.payload.e.target.name;
    let value = action.payload.e.target.value;
    let marketFormDataSell = { ...state.marketFormDataSell };
    marketFormDataSell[key].value = value
    return {
      ...state,
      marketFormDataSell
    }
  },
  onChangeMarketBuy: (state, action) => {
    let key = action.payload.e.target.name;
    let value = action.payload.e.target.value;
    let marketFormDataBuy = { ...state.marketFormDataBuy };
    marketFormDataBuy[key].value = value
    return {
      ...state,
      marketFormDataBuy
    }
  },


  setLabel: (state, action) => {
    let quote_unit = action.payload.quote_unit
    let base_unit = action.payload.base_unit
    let limitFormDataSell = { ...state.limitFormDataSell };
    let limitFormDataBuy = { ...state.limitFormDataBuy };
    let marketFormDataBuy = { ...state.marketFormDataBuy };
    let marketFormDataSell = { ...state.marketFormDataSell };
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
    updateLabels(marketFormDataBuy);
    updateLabels(marketFormDataSell);
    return {
      ...state,
      limitFormDataSell,
      limitFormDataBuy
    };
  },
  changeFormPrice: (state, action) => {
   console.log(action)
    //let formData = {...state[action.payload.form]}
    //formData["price"].value =1;
    return {
      ...state,
     // [action.payload.form]:formData
    }
  },
}, InitailState);
