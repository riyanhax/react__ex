
import { handleActions } from 'redux-actions';
import {setPairs, setOrderBook, loadPairs, loadOrderBook } from 'act/trading';
const InitailState = {
    loadingPairs: true,
    loadingOrderBook: true,
    pairs:[],
    orderBook:[]
}

function onLoadPairs(state,pairs){
    return {
        ...state,
        pairs,
        loadingPairs:false
    };
}
function onLoadOrderBook(state,orderBook){
    return {
        ...state,
        orderBook,
        loadingOrderBook:false
    };
}
export  const tradingReducer = handleActions({
    setPairs: (state,action) => {   
        return onLoadPairs(state, action.payload.pairs);
    },

    setOrderBook: (state,action) => { 
    
        return onLoadOrderBook(state, action.payload.orderBook);
    },
  }, InitailState);
