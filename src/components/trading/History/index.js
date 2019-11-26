import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { loadOpenOrders, loadOrders, loadTradeHistory, removeOrder, filterHistory } from "act/history"
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
  let openOrders = useSelector(state => state.historyReducer.openOrdersItems)
  let ordersHistory = useSelector(state => state.historyReducer.orderHistoryItems)
  let tradeHistory = useSelector(state => state.historyReducer.tradeHistoryItems)

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
          />
        </TabPanel>
        <TabPanel>
          <OrderHistory
            ordersHistory={ordersHistory}
            dispatch={dispatch}
            filterHistory={filterHistory}
            pair={props.pair}
          />
        </TabPanel>
        <TabPanel>
          <TradeHistory
            tradeHistory={tradeHistory}
            dispatch={dispatch}
            filterHistory={filterHistory}
            pair={props.pair}
          />
        </TabPanel>

      </Tabs>
    </div>

  )
}
