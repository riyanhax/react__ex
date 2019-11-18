
import { handleActions } from 'redux-actions';
import { setOpenOrders, loadOpenOrders, setOrderHistory } from '../actions/history';
const InitailState = {
    loading: true
}

function onLoad(state, payload) {

    return {
        ...state,
        loading: false,
        payload,

    };
}

export const historyReducer = handleActions({
    setOpenOrders: (state, action) => {

        return onLoad(state, action.payload.items);
    },
    setOrderHistory: (state, action) => {
        let orderHistoryItems = action.payload.items;
        return {
            ...state,
            orderHistoryItems
        }
    }
  }, InitailState);
