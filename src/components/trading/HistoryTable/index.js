import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { loadOpenOrders, loadOrders, loadTradeHistory, removeOrder, filterHistory  } from "act/history"
import { useSelector, useDispatch } from "react-redux"
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";



export default (props) => {
const {pair} = props

  useEffect(() => {
    dispatch(loadOpenOrders());
    dispatch(loadOrders());
    dispatch(loadTradeHistory());
  }, [])

  const dispatch = useDispatch()
  let openOrders = useSelector(state => state.historyReducer.openOrdersItems)
  let ordersHistory = useSelector(state => state.historyReducer.orderHistoryItems)
  let tradeHistory = useSelector(state => state.historyReducer.tradeHistoryItems)

  let openOrdersList,
    ordersHistoryList,
    tradeHistoryList

  
  if (openOrders) {
    openOrdersList = openOrders.map((item) => {
      let { id } = item;

      return (
        <tr className="hovered" key={item.id}>
          <td className=""> {item.id}</td>
          <td className="">{item.created_at}</td>
          <td className=""> {item.market}</td>
          <td className="">{item.side}</td>
          <td className=""> {item.origin_volume} </td>
          <td className=""> {item.price} </td>
          <td className=""> {item.trades_count}</td>
          <td className=""> {item.volume} </td>
          <td className="mint__text">{item.percents_volume}%</td>
          <td className="">
            <div className="ex__table__close" onClick={() => dispatch(removeOrder(id))}>
              <i className="fa fa-times-circle"></i>
            </div>
          </td>
        </tr>
      )
    })
  }


  if (ordersHistory) {
    ordersHistoryList = ordersHistory.map((item) => {
      return (
        <tr className="hovered" key={item.id}>
          <td className=""> {item.id}</td>
          <td className="">{item.created_at}</td>
          <td className=""> {item.market}</td>
          <td className="">{item.side}</td>
          <td className=""> {item.origin_volume} </td>
          <td className=""> {item.price} </td>
          <td className=""> {item.trades_count}</td>
          <td className=""> {item.volume} </td>
          <td className="mint__text">{item.percents_volume}%</td>
        </tr>
      )
    })
  }
  if (tradeHistory) {
    tradeHistoryList = tradeHistory.map((item) => {
      return (
        <tr className="hovered" key={item.id}>
          <td className=""> {item.id}</td>
          <td className="">{item.created_at}</td>
          <td className=""> {item.market}</td>
          <td className="">{item.side}</td>
          <td className=""> {item.origin_volume} </td>
          <td className=""> {item.price} </td>
          <td className=""> {item.trades_count}</td>
          <td className=""> {item.volume} </td>

        </tr>
      )
    })
  }

  return (
    <div className="history__tabs gray">
      <a className="history__tabs__hide flex__ac" onClick={() => dispatch(filterHistory(pair))}>
        <i className="fa fa-eye-slash history__tabs__img"></i>
        <div className="history__tabs__hide__text">
          Hide Other Pairs
        </div>
      </a>
      <Tabs>
        <TabList className="ex__tabs__links">
          <Tab className="ex__tabs__link gray__text">Open Orders</Tab>
          <Tab className="ex__tabs__link gray__text">Order History</Tab>
          <Tab className="ex__tabs__link gray__text">Trade History</Tab>
        </TabList>

        <TabPanel>
          <SimpleBarReact style={{ maxHeight: "20vh" }}>
            <table className="ex__table history__table">
              <tbody>
                <tr className="  gray__text">
                  <th className=""> Order </th>
                  <th className="">Date/Time</th>
                  <th className="">Pair </th>
                  <th className=""> T... </th>
                  <th className="">Amount</th>
                  <th className=""> Price </th>
                  <th className="">Total</th>
                  <th className="">Amount Left</th>
                </tr>
                {openOrdersList}
              </tbody>
            </table>
          </SimpleBarReact>
        </TabPanel>
        <TabPanel>
          <SimpleBarReact style={{ maxHeight: "20vh" }}>
            <table className="ex__table history__table">
              <tbody>
                <tr className="gray__text">
                  <th className=""> Order </th>
                  <th className="">Date/Time</th>
                  <th className="">Pair </th>
                  <th className=""> T... </th>
                  <th className="">Amount</th>
                  <th className=""> Price </th>
                  <th className="">Total</th>
                  <th className="">Amount Left</th>
                </tr>
                {ordersHistoryList}
              </tbody>
            </table>
          </SimpleBarReact>
        </TabPanel>
        <TabPanel>
          <SimpleBarReact style={{ maxHeight: "20vh" }}>
            <table className="ex__table history__table">
              <tbody>
                <tr className="  gray__text">
                  <th className=""> Order </th>
                  <th className="">Date/Time</th>
                  <th className="">Pair </th>
                  <th className=""> T... </th>
                  <th className="">Amount</th>
                  <th className=""> Price </th>
                  <th className="">Total</th>
                  <th className="">Amount Left</th>
                </tr>
                {tradeHistoryList}
              </tbody>
            </table>
          </SimpleBarReact>
        </TabPanel>

      </Tabs>
    </div>

  )
}
