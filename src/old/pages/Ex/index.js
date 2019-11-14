import React from 'react'
import './index.css'
import { TVChartContainer } from "cmp/TVChartContainer/"
import ExForm from 'cmp/sellForm/'
import Chat from 'cmp/Chat'
import Options from 'cmp/Options'
import SideMenu from 'cmp/SideMenu'
import OrderBook from 'cmp/OrderBook/'
import ExHeader from 'cmp/ExHeader'
import HistoryTable from 'cmp/HistoryTable'
import DealTable from 'cmp/DealTable'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group'
import { connect } from "react-redux"
import actions from "act/"
import { history } from '../../history';
import { PureComponent } from "react"

class Ex extends PureComponent {

  componentDidMount() {

    let pair = history.location.state.pair;

    this.props.loadPairs();
    this.props.loadOrderBook(pair);
    // fetch(`api/v2/peatio/market/orders`, {
    //   method: 'POST',
    //   credentials: 'include',
    //   body: JSON.stringify(
    //     {
    //       market: 'ethusd',
    //       side: "buy",
    //       volume: 2,
    //       price:10,
    //     }
    //   ),
    //   headers: {
    //     'Content-type': 'application/json'
    //   },

    // })
    //   .then(response => response.json())
    //   .then((data) => {

    //     console.log(data)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   });
  }
  state = {
    chatShow: false,
    gridTable: "rgtable"
  }
  toggleChat = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      chatShow: !prevState.chatShow
    })
    )
  }
  toggleGridTable = (e) => {
    e.preventDefault();
    this.setState({
      gridTable: e.currentTarget.attributes.data.value
    })

  }
  onSubmitSell = (action) => {
    event.preventDefault();
    let limitFormDataSell = this.props.limitFormDataSell;
    this.props.makeOrder(limitFormDataSell.price.value, limitFormDataSell.amount.value, "sell", history.location.state.pair)
  }
  onSubmitBuy = (action) => {
    event.preventDefault();
    let limitFormDataBuy = this.props.limitFormDataBuy;
    this.props.makeOrder(limitFormDataBuy.price.value, limitFormDataBuy.amount.value, "buy", history.location.state.pair)
  }
  handleChangePairs = (e) => {
    let pair = e.value
    let base_unit = e.base_unit
    let quote_unit = e.quote_unit
    history.push(
      { pathname: `/trading/${pair}` },
      {
        pair, base_unit, quote_unit
      }
    )
  }




  render() {


  

    const { pairs, loadingPairs, loadingOrderBook, limitFormDataBuy, limitFormDataSell, bids, asks, onChangeSell, onChangeBuy } = this.props;
    const { base_unit, quote_unit, pair } = history.location.state


    let dealTable = "";
    dealTable = <DealTable />
    // if (loading) {
    //   dealTable = <div className="lds-ripple"><div></div><div></div></div>
    // }
    // else {

    // }

    return (

      <section id="ex__page">

        <ExHeader
          loading={loadingPairs}
          pairs={pairs}
          handleChangePairs={this.handleChangePairs}
        />
        <div className="ex__page__inner">
          <a href="" className="side__hide__link" onClick={(e) => this.toggleChat(e)}>
            {this.state.chatShow ?
              <i className="fa fa-angle-double-left"></i>
              : <i className="fa fa-angle-double-right"></i>
            }
          </a>
          <SideMenu />
          <div className="container">
            <div className="flex">
              <Transition in={this.state.chatShow} timeout={300}>
                {(status) => (
                  <div className={`col__md ex__col__1 fcolw ${status}`}>
                    <div className="trading__block gray">
                      <TVChartContainer
                        pair={pair}
                      />
                    </div>
                    <HistoryTable />
                  </div>

                )}
              </Transition>

              <div className="col__md ex__col__2 fcolw">
                <div className="flex h__100">
              
                      <div className="ex__col__2__sub gray">
                        <div className={`grid__table red__table__cont ${this.state.gridTable}`}>
                          <div className="grid__table__header">
                            <div className="faec">
                              <div className="grid__tbale__header__links flex">
                                <a className="grid__table__header__link" href="" data="rgtable" onClick={(e) => this.toggleGridTable(e)}>
                                  <div className="red"></div>
                                  <div className="mint"></div>
                                </a>
                                <a className="grid__table__header__link" href="" data="gtable" onClick={(e) => this.toggleGridTable(e)}>
                                  <div className="gray__rec"></div>
                                  <div className="mint"></div>
                                </a>
                                <a className="grid__table__header__link" href="" data="rtable" onClick={(e) => this.toggleGridTable(e)}>
                                  <div className="red"></div>
                                  <div className="gray__rec"></div>
                                </a>
                              </div>
                              <div className="left__auto red__table__item3 gray__text">
                                grioups
                              </div>
                              <select className="red__table__header__select">
                                <option>8 decimals</option>
                                <option>10 decimals</option>
                              </select>
                            </div>
                          </div>
                          <div className="red__table__header">
                            <div className="gray__text">
                              Price (BTC)
                        </div>
                          </div>
                          {this.state.gridTable == "rgtable" || this.state.gridTable == "rtable" ? (
                            <OrderBook
                              text="red__text"
                              table="red__table"
                              sibling="nextElementSibling"
                              colorHover="rgba(234, 0, 56, 0.15)"
                              gridTable={this.state.gridTable}
                              data={asks}
                              loading={loadingOrderBook}
                            />
                          ) : (
                              ""
                            )}

                        </div>
                        <div className="green__table__header">
                          <div className="faec">
                            <div className="green__table__header__item mint__text">
                              0.0000000030
                            </div>
                            <img src="/assets/img/arr.png" />
                            <div className="green__table__header__item2">
                              $0.000029
                          </div>
                            <img src="/assets/img/ind.png" className="green__table__header__ind" />
                          </div>
                        </div>
                        <div className={`grid__table green__table__cont ${this.state.gridTable}`}>

                          {this.state.gridTable == "rgtable" || this.state.gridTable == "gtable" ? (
                            <OrderBook
                              text="mint__text"
                              table="green__table"
                              sibling="previousElementSibling"
                              colorHover="rgba(23, 172, 117, 0.1)"
                              gridTable={this.state.gridTable}
                              data={bids}
                              loading={loadingOrderBook}
                            />
                          ) : (
                              ""
                            )}
                        </div>
                      </div>
                  
                  <div className="ex__col__2__sub gray">
                    {dealTable}
                  </div>
                </div>
                <div className="ex__tabs gray">
                  <Tabs>
                    <TabList className="ex__tabs__links">
                      <Tab className="ex__tabs__link gray__text">Limit</Tab>
                      <Tab className="ex__tabs__link gray__text">Market</Tab>
                      <Tab className="ex__tabs__link gray__text">Shop-Limit</Tab>
                    </TabList>

                    <TabPanel>
                      <label className="checkbox ex__form__check">
                        <input type="checkbox" />
                        <div className="checkbox__text">Pay Az Tоkens</div>
                      </label>
                      <div className="fb">

                        <ExForm
                          limitFormData={limitFormDataBuy}
                          action="Buy"
                          basePair={base_unit}
                          quotePair={quote_unit}
                          onChange={onChangeBuy}
                          onSubmit={this.onSubmitBuy}
                        />
                        <div className="ex__tabs__line"></div>
                        <ExForm
                          limitFormData={limitFormDataSell}
                          action="Sell"
                          basePair={base_unit}
                          quotePair={quote_unit}
                          onChange={onChangeSell}
                          onSubmit={this.onSubmitSell}
                        />

                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                      <h2>Any content 3</h2>
                    </TabPanel>
                  </Tabs>
                </div>

              </div>

              <Transition in={this.state.chatShow} timeout={300}>
                {(status) => (
                  <div className={`col__md ex__col__3 gray fcoljb ${status}`}>
                    <Switch>

                      <Route path="/trading" exact>
                        <Chat />
                      </Route>
                      <Route path="/options" exact>
                        <Options />
                      </Route>

                    </Switch>
                  </div>
                )}
              </Transition>
            </div>
          </div>

        </div>

      </section>

    );
  }

}
let mapStateToProps = (state) => {
  // console.log(state)
  return {
    pairs: state.tradingReducer.pairs,
    loadingOrderBook: state.tradingReducer.loadingOrderBook,
    loadingPairs: state.tradingReducer.loadingPairs,
    limitFormDataBuy: state.orderReducer.limitFormDataBuy,
    limitFormDataSell: state.orderReducer.limitFormDataSell,
    bids: state.tradingReducer.orderBook.bids,
    asks: state.tradingReducer.orderBook.asks,
  }
};

let mapDispatchToProps = (dispatch) => {

  return {
    loadPairs: () => dispatch(actions.trading.loadPairs()),
    onChangeSell: (e) => dispatch(actions.order.onChangeSell(e)),
    onChangeBuy: (e) => dispatch(actions.order.onChangeBuy(e)),
    makeOrder: (price, amount, type, pair) => dispatch(actions.order.makeOrder(price, amount, type, pair)),
    loadOrderBook: (pair) => dispatch(actions.trading.loadOrderBook(pair)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Ex);


