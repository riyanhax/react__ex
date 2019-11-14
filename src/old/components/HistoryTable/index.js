import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from "react-redux"
import actions from "act/"
 class HistoryTable extends React.Component {

    componentDidMount() {
        this.props.loadOpenOrders()
    }
    render() {
  
        let openOrdersList
        if (this.props.loading) {
            openOrdersList = <tr></tr>
        }
        else {
            openOrdersList = this.props.openOrders.map((item) => {
                return (
                    <tr className="" key={item.id}>
                        <td className=""> {item.id}</td>
                        <td className="">{item.created_at}</td>
                        <td className=""> {item.market}</td>
                        <td className="">{item.side}</td>
                        <td className=""> {item.origin_volume} </td>
                        <td className=""> {item.price} </td>
                        <td className=""> {item.trades_count}</td>
                        <td className=""> {item.remaining_volume} </td>
                        <td className="mint__text"> 50%</td>
                        <td className="">
                            <div className="ex__table__close">
                            <i className="fa fa-times-circle"></i>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        return (
            <div className="history__tabs gray">
            <a className="history__tabs__hide fac">
              <img src="/assets/img/hide.png" className="history__tabs__img" />
              <div className="history__tabs__hide__text">
                Hide Other Pairs
               </div>
            </a>
            <Tabs>
              <TabList className="ex__tabs__links">
                <Tab className="ex__tabs__link gray__text">Open Orders</Tab>
                <Tab className="ex__tabs__link gray__text">Order History</Tab>
                <Tab className="ex__tabs__link gray__text">Trade History</Tab>
                <Tab className="ex__tabs__link gray__text">Funds</Tab>
              </TabList>

              <TabPanel>
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
                
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 4</h2>
              </TabPanel>
            </Tabs>
          </div>
           
        )
    }
}
let mapStateToProps = (state) => {

    return {
      openOrders: state.historyReducer.payload,
      loading: state.historyReducer.loading,
    }
  };
  
  let mapDispatchToProps = (dispatch) => {
  
    return {
        loadOpenOrders: () => dispatch(actions.history.loadOpenOrders())
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(HistoryTable);
  
