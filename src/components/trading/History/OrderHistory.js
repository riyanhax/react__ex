
import React from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

export default (props) => {
  const { ordersHistory, dispatch, filterHistory, pair } = props;
  let ordersHistoryList

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

  return (
    <div className="history__tabs__inner">
      <a className="history__tabs__hide flex__ac" onClick={() => dispatch(filterHistory(pair, "orderHistoryItems"))}>
        <i className="fa fa-eye-slash history__tabs__img"></i>
        <div className="history__tabs__hide__text">
          Hide Other Pairs
        </div>
      </a>
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
    </div>
  )


}