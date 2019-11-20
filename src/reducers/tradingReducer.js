
import { handleActions } from 'redux-actions';

const InitailState = {
    loadingPairs: true,
    loadingOrderBook: true,
    loadingDeals: true,
    pairs: [],
    orderBook: {},
    deals: [],
    info: {},
    lstPrice: ""
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

            console.log(action.data)
            if (action.data.order_type == "OrderBid") {
                if (action.data.is_cancel) {
                    let index = orderBook.bids.findIndex(x => x.id === action.data.order.id);
                    orderBook.bids.splice(index, 1);
                }
                else {
                    orderBook.bids.unshift(action.data.order);
                }
            }
            if (action.data.order_type == "OrderAsk") {
                if (action.data.is_cancel) {
                    let index = orderBook.asks.findIndex(x => x.id === action.data.order.id);
                    orderBook.asks.splice(index, 1);
                }
                else {
                    orderBook.asks.unshift(action.data.order);
                }
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
            let lastPrice = action.data.trade.price
            let info = action.data.header;

            deals.unshift(action.data.trade);
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
                orderBook,
                lastPrice
            }
        }
        else if (action.payload.deals) {
            let deals = [...state.deals];
             deals = action.payload.deals;
            //console.log(deals)
            let lastPrice = action.payload.deals[0].price
            return {
                ...state,
                deals:deals,
                lastPrice,
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
