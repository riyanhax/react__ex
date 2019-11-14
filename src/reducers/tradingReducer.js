
import { handleActions } from 'redux-actions';
import { setPairs, setOrderBook, loadPairs, loadOrderBook, setOrderBookSocket, setDeals } from 'act/trading';
const InitailState = {
    loadingPairs: true,
    loadingOrderBook: true,
    loadingDeals: true,
    pairs: [],
    orderBook: [],
    deals: []
}



export const tradingReducer = handleActions({
    setPairs: (state, action) => {
        let pairs = action.payload.pairs
        return {
            ...state,
            pairs,
            loadingPairs: false
        }
    },

    setOrderBook: (state, action) => {

        if (action.data) {
         
            let orderBook = { ...state.orderBook };
            if (action.data.order_type == "OrderBid") {
                orderBook.bids.unshift(action.data.order)
            }
            if (action.data.order_type == "OrderAsk") {
                orderBook.asks.unshift(action.data.order)
            }
            return {
                ...state,
                orderBook
            }
        }
        if (action.payload.orderBook) {
            let orderBook = action.payload.orderBook;
            return {
                ...state,
                orderBook,
                loadingOrderBook: false,
            }

        }

    },
    setDeals: (state, action) => {
        
        if (action.data) {
            console.log(action.data)
            let deals = [...state.deals];
            deals.unshift(action.data.trade)
            return {
                ...state,
                deals
            }
        }
        if (action.payload.deals) {
            let deals = action.payload.deals;
            return {
                ...state,
                deals,
                loadingDeals: false
            }
        }

    },

}, InitailState);
