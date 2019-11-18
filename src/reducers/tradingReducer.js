
import { handleActions } from 'redux-actions';
import { setPairs, setOrderBook, loadPairs, loadOrderBook, setOrderBookSocket, setDeals } from 'act/trading';
import { setInfo } from 'act/info';
const InitailState = {
    loadingPairs: true,
    loadingOrderBook: true,
    loadingDeals: true,
    pairs: [],
    orderBook: {},
    deals: [],
    info: {},
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

            let deals = [...state.deals];
            deals.unshift(action.data.trade)
            let info = action.data.header;
            let orderBook = { ...state.orderBook };
            let { order_ask, order_bid } = action.data.trade_orders;
            let askIndex = orderBook.asks.findIndex(x => x.id === order_ask.id);
            let bidIndex = orderBook.bids.findIndex(x => x.id === order_bid.id);
            orderBook.asks[askIndex] = order_ask;
            orderBook.bids[bidIndex] = order_bid;
            if (order_ask.volume == "0.0") {
                orderBook.asks.splice(askIndex, 1);
            }
            if (order_bid.volume == "0.0") {
                orderBook.bids.splice(bidIndex, 1);
            }

            return {
                ...state,
                deals,
                info,
                orderBook
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
    setInfo: (state, action) => {
        let info = action.payload.info
        return {
            ...state,
            info
        }
    }
}, InitailState);
