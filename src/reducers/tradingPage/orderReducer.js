import { handleActions } from 'redux-actions';


const InitailState = {
  status: {
    limitFormDataBuy: {
      text: "",
      class: "",
      icon:""
    },
    limitFormDataSell: {
      text: "",
      class: "",
      icon:""
    },
    marketFormDataBuy: {
      text: "",
      class: "",
      icon:""
    },
    marketFormDataSell: {
      text: "",
      class: "",
      icon:""
    }
  },

  limitFormDataBuy: {
    price: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type: "number",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type: "number",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type: "number",
      label: ""
    },
  },

  limitFormDataSell: {
    price: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type: "number",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type: "number",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],
    total: {
      vaild: false,
      value: "",
      name: "quote_unit",
      type: "number",
      label: ""
    },
  },

  marketFormDataBuy: {
    price: {
      vaild: false,
      disabled: true,
      value: "Market",
      name: "quote_unit",
      type: "text",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type: "number",
      label: ""
    },
    proc: ["25%", "50%", "75%", "100%"],

  },

  marketFormDataSell: {
    price: {
      vaild: false,
      disabled: true,
      value: "Market",
      name: "quote_unit",
      type: "text",
      label: ""
    },
    amount: {
      vaild: false,
      value: "",
      name: "base_unit",
      type: "number",
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
    let proc = parseInt(action.payload.e.target.value, 10);
    let wallet = parseFloat(action.payload.wallet[0].balance);
    let procValue = wallet / 100 * proc;
    let formData = { ...state[action.payload.formName] }
    formData["price"].value = procValue;
    return {
      ...state,
      [action.payload.formName]: formData
    }
  },

  failOrder: (state, action) => {
    let status = { ...state.status };
    status[action.payload.formName].text = "Failure"
    status[action.payload.formName].class = "red__text"
    status[action.payload.formName].icon = "fas fa-times-circle"
    return {
      ...state,
      status
    }

  },

  successOrder: (state, action) => {

    let status = { ...state.status };
    status[action.payload.formName].text = "Succes"
    status[action.payload.formName].class = "mint__text"
    status[action.payload.formName].icon = "fas fa-check-square"

    return {
      ...state,
      status
    }
  },
  clearOrder: (state, action) => {
    let status = { ...state.status };
    status[action.payload.formName].text = ""
    status[action.payload.formName].class = ""
    status[action.payload.formName].icon = ""
    return {
      ...state,
      status
    }
  },


}, InitailState);
