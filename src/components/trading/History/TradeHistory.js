
import React from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

export default (props) => {
    const { tradeHistory, dispatch, filterHistory, pair, showed } = props;
    let tradeHistoryList

    if (tradeHistory) {
        tradeHistoryList = tradeHistory.map((item) => {

            return (
                <tr className="hovered" key={item.id}>
                    <td className=""> {item.id}</td>
                    <td className="">{item.created_at}</td>
                    <td className=""> {item.market}</td>
                    <td className="">{item.side}</td>
                    <td className=""> {item.amount} </td>
                    <td className=""> {item.price} </td>
                    <td className=""> {item.fee}</td>
                    <td className=""> {item.total} </td>

                </tr>
            )
        })
    }

    return (
        <div className="history__tabs__inner">
            <a className="history__tabs__hide flex__ac" onClick={() => dispatch(filterHistory(pair, "tradeHistoryItems"))}>
                {showed ?
                    <>
                        <i className="fa fa-eye-slash history__tabs__img"></i>
                        <div className="history__tabs__hide__text">
                            Hide Other Pairs
                         </div>
                    </>
                    :
                    <>
                        <i className="fas fa-eye history__tabs__img"></i>
                        <div className="history__tabs__hide__text">
                            Show Other Pairs
                         </div>
                    </>
                }
            </a>
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
                            <th className="">Transaction Fee</th>
                            <th className="">Total</th>

                        </tr>
                        {tradeHistoryList}
                    </tbody>
                </table>
            </SimpleBarReact>
        </div>
    )


}