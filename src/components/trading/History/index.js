import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { loadOpenOrders, loadOrders, loadTradeHistory, removeOrder, filterHistory } from "act/tradingPage/history"
import { useSelector, useDispatch } from "react-redux"
import OpenOrders from "./OpenOrders"
import OrderHistory from "./OrderHistory"
import TradeHistory from "./TradeHistory"

export default (props) => {

  useEffect(() => {
    dispatch(loadOpenOrders());
    dispatch(loadOrders());
    dispatch(loadTradeHistory());
  }, [])

  const dispatch = useDispatch()
  const getVisibleHistory = (items, showed, pair) => {
    if (showed) {
      return items
    }
    else {
      return items.filter(item => item.market == pair)
    }

  }
  let openOrders = useSelector(state => getVisibleHistory(state.historyReducer.openOrdersItems, state.historyReducer.filters.openOrdersItems.showed, props.pair))
  let ordersHistory = useSelector(state => getVisibleHistory(state.historyReducer.orderHistoryItems, state.historyReducer.filters.orderHistoryItems.showed, props.pair))
  let tradeHistory = useSelector(state => getVisibleHistory(state.historyReducer.tradeHistoryItems, state.historyReducer.filters.tradeHistoryItems.showed, props.pair))
  let openOrdersShowed = useSelector(state => (state.historyReducer.filters.openOrdersItems.showed))
  let ordersHistoryShowed = useSelector(state => (state.historyReducer.filters.orderHistoryItems.showed))
  let tradeHistoryyShowed = useSelector(state => (state.historyReducer.filters.tradeHistoryItems.showed))

  return (
    <div className="history__tabs gray">
      <Tabs>
        <TabList className="ex__tabs__links">
          <Tab className="ex__tabs__link gray__text">Open Orders</Tab>
          <Tab className="ex__tabs__link gray__text">Order History</Tab>
          <Tab className="ex__tabs__link gray__text">Trade History</Tab>
        </TabList>

        <TabPanel>
          <OpenOrders
            openOrders={openOrders}
            dispatch={dispatch}
            removeOrder={removeOrder}
            filterHistory={filterHistory}
            pair={props.pair}
            showed={openOrdersShowed}
          />
        </TabPanel>
        <TabPanel>
          <OrderHistory
            ordersHistory={ordersHistory}
            dispatch={dispatch}
            filterHistory={filterHistory}
            pair={props.pair}
            showed={ordersHistoryShowed}
          />
        </TabPanel>
        <TabPanel>
          <TradeHistory
            tradeHistory={tradeHistory}
            dispatch={dispatch}
            filterHistory={filterHistory}
            pair={props.pair}
            showed={tradeHistoryyShowed}
          />
        </TabPanel>

      </Tabs>
    </div>

  )
}
