
import { handleActions } from 'redux-actions';

const InitailState = {
}

export const historyReducer = handleActions({
    setOpenOrders: (state, action) => {
        let openOrdersItems = action.payload.items;
        return {
            ...state,
            openOrdersItems
        }
    },
    setOrderHistory: (state, action) => {
        let orderHistoryItems = action.payload.items;
        return {
            ...state,
            orderHistoryItems
        }
    },
    setTradeHistory: (state, action) => {
        let tradeHistoryItems = action.payload.items;
        return {
            ...state,
            tradeHistoryItems
        }
    },
    removeOrder: (state, action) => {
        let openOrdersItems = [...state.openOrdersItems];
        let index = openOrdersItems.findIndex(x => x.id === action.payload.id);
        openOrdersItems.splice(index, 1);
        return {
            ...state,
            openOrdersItems
        }
    },
    filterHistory: (state, action) => {

        let { pair, items } = action.payload;
        let historyData = [...state[items]];
        historyData = historyData.filter(item => item.market == pair);
        return {
            ...state,
            [items]: historyData
        }
    }
}, InitailState);

