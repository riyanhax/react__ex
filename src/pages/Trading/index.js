import React from 'react'
import './index.css'
import { TVChartContainer } from "cmp/trading/TVChartContainer/"
import OrderForm from 'cmp/trading/TradingForm/'
import Chat from 'cmp/trading/Chat'
import Options from 'cmp/trading/Options'
import SideMenu from 'cmp/trading/SideMenu'
import OrderBook from 'cmp/trading/OrderBook/'
import ExHeader from 'cmp/trading/TradingHeader'
import HistoryTable from 'cmp/trading/HistoryTable'
import Deals from 'cmp/trading/Deals'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group'
import { connect } from "react-redux"
import actions from "act/"
import { history } from '../../history';
import { ConnectedRouter } from 'connected-react-router';
import Cable from "actioncable"



class Ex extends React.Component {

  componentDidMount() {

    let { base_unit, quote_unit, pair } = history.location.state



    this.props.loadOrderBook(pair, base_unit, quote_unit);
    this.props.loadDeals(pair);
    this.props.setLabel(base_unit, quote_unit);
    this.props.handleSocketOrderBook(pair, base_unit, quote_unit, this.state.cable);
    this.props.loadWallet(base_unit, quote_unit);
    this.props.loadMessages();
    this.props.loadInfo(pair);

    // fetch(`api/v2/peatio/market/orders/27/cancel`, {
    //   method: 'POST',
    //   credentials: 'include',
    //   body: JSON.stringify(
    //     // {
    //     //   text: 'lol',
    //     //   lang: "en",
    //     // }
    //   ),
    //   headers: {
    //     'Content-type': 'application/json'
    //   },

    // })
    //   .then(response => response.json())
    //   .then((data) => {

    //    console.log(data)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   });



  }
  state = {
    chatShow: false,
    gridTable: "rgtable",
    cable: Cable.createConsumer('ws://localhost:8099/websocket')
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


  handleChangePairs = (e) => {
    this.state.cable.subscriptions.consumer.disconnect();
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



    const { pairs, loadingDeals, loadingOrderBook, limitFormDataBuy,
      limitFormDataSell, onChangeSell, onChangeBuy, handleSocketOrderBook,
      orderBook, deals, wallet, messages, makeMessage, info, lastPrice,
      marketFormDataBuy, marketFormDataSell, makeOrder, onChangeMarketBuy,
      onChangeMarketSell, makeOrderMarket, changeFormPrice
    } = this.props;
    const { base_unit, quote_unit, pair } = history.location.state

    console.log(limitFormDataSell)
    return (

      <section id="ex__page">

        <ExHeader
          pairs={pairs}
          pair={pair}
          handleChangePairs={this.handleChangePairs}
          wallet={wallet}
          info={info}
          lastPrice={lastPrice}
        />
        <div className="ex__page__inner">
          <a href="" className="side__hide__link" onClick={(e) => this.toggleChat(e)}>
            {this.state.chatShow ?
              <i className="fa fa-angle-double-left"></i>
              : <i className="fa fa-angle-double-right"></i>
            }
          </a>
          <SideMenu
            pair={pair}
          />
          <div className="container">
            <div className="flex">
              <Transition in={this.state.chatShow} timeout={300}>
                {(status) => (
                  <div className={`col__md ex__col__1 flex__col ${status}`}>
                    <div className="trading__block gray">
                      <TVChartContainer
                        pair={pair}
                      />
                    </div>
                    <HistoryTable
                      data={deals}
                    />
                  </div>

                )}
              </Transition>

              <div className="col__md ex__col__2 flex__col">
                <div className="flex h__100">

                  <div className="ex__col__2__sub gray">
                    <div className={`grid__table red__table__cont ${this.state.gridTable}`}>
                      <div className="grid__table__header">
                        <div className="flex__je__ac">
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
                          text="d__red__text"
                          table="red__table"
                          sibling="nextElementSibling"
                          colorHover="rgba(234, 0, 56, 0.15)"
                          gridTable={this.state.gridTable}
                          data={orderBook.asks}
                          loading={loadingOrderBook}
                          //key={this.state.renderKey}
                          handleSocketOrderBook={handleSocketOrderBook}
                        />
                      ) : (
                          ""
                        )}

                    </div>
                    <div className="green__table__header">
                      <div className="flex__je__ac">
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
                          data={orderBook.bids}
                          loading={loadingOrderBook}
                          //key={this.state.renderKey}
                          handleSocketOrderBook={handleSocketOrderBook}
                        />
                      ) : (
                          ""
                        )}
                    </div>
                  </div>

                  <div className="ex__col__2__sub gray">
                    <Deals
                      loading={loadingDeals}
                      data={deals}
                    />
                  </div>
                </div>
                <div className="ex__tabs gray">
                  <Tabs>
                    <TabList className="ex__tabs__links">
                      <Tab className="ex__tabs__link gray__text">Limit</Tab>
                      <Tab className="ex__tabs__link gray__text">Market</Tab>
                    </TabList>

                    <TabPanel>
                      <label className="checkbox ex__form__check">
                        <input type="checkbox" />
                        <div className="checkbox__text">Pay Az Tоkens</div>
                      </label>
                      <div className="flex__jb">

                        <OrderForm
                          limitFormData={limitFormDataBuy}
                          action="buy"
                          basePair={base_unit}
                          onChange={onChangeBuy}
                          makeOrder={makeOrder}
                          changeFormPrice={changeFormPrice}
                          args={[limitFormDataBuy.price.value, limitFormDataBuy.amount.value, "buy", pair]}
                        />
                        <div className="ex__tabs__line"></div>
                        <OrderForm
                          limitFormData={limitFormDataSell}
                          action="sell"
                          basePair={base_unit}
                          onChange={onChangeSell}
                          makeOrder={makeOrder}
                          form={"limitFormDataSell"}
                          wallet = {wallet}
                          changeFormPrice={changeFormPrice}
                          args={[limitFormDataSell.price.value, limitFormDataSell.amount.value, "sell", pair]}
                        />

                      </div>
                    </TabPanel>
                    <TabPanel>
                      <label className="checkbox ex__form__check">
                        <input type="checkbox" />
                        <div className="checkbox__text">Pay Az Tоkens</div>
                      </label>
                      <div className="flex__jb">

                        <OrderForm
                          limitFormData={marketFormDataBuy}
                          action="buy"
                          basePair={base_unit}
                          onChange={onChangeMarketBuy}
                          makeOrder={makeOrderMarket}
                          changeFormPrice={changeFormPrice}
                          args={["market", marketFormDataBuy.amount.value, "buy", pair]}
                        />
                        <div className="ex__tabs__line"></div>
                        <OrderForm
                          limitFormData={marketFormDataSell}
                          action="sell"
                          basePair={base_unit}
                          onChange={onChangeMarketSell}
                          makeOrder={makeOrderMarket}
                          changeFormPrice={changeFormPrice}
                          args={["market", marketFormDataSell.amount.value, "sell", pair]}
                        />

                      </div>
                    </TabPanel>
                  </Tabs>
                </div>

              </div>

              <Transition in={this.state.chatShow} timeout={300}>
                {(status) => (
                  <div className={`col__md ex__col__3 gray flex__jb__col ${status}`}>

                    <Switch>

                      <Route path={`/trading/${pair}`} >
                        <Chat
                          messages={messages}
                          makeMessage={makeMessage}
                        />
                      </Route>
                      <Route path={`/trading/${pair}/options`} >
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

  return {
    pairs: state.tradingReducer.pairs,
    loadingOrderBook: state.tradingReducer.loadingOrderBook,
    loadingDeals: state.tradingReducer.loadingDeals,
    limitFormDataBuy: state.orderReducer.limitFormDataBuy,
    limitFormDataSell: state.orderReducer.limitFormDataSell,
    marketFormDataBuy: state.orderReducer.marketFormDataBuy,
    marketFormDataSell: state.orderReducer.marketFormDataSell,
    bids: state.tradingReducer.orderBook.bids,
    asks: state.tradingReducer.orderBook.asks,
    orderBook: state.tradingReducer.orderBook,
    deals: state.tradingReducer.deals,
    wallet: state.walletReducer.wallet,
    messages: state.chatReducer.messages,
    info: state.tradingReducer.info,
    lastPrice: state.tradingReducer.lastPrice,
  }
};

let mapDispatchToProps = (dispatch) => {

  return {
    onChangeSell: (e) => dispatch(actions.order.onChangeSell(e)),
    onChangeBuy: (e) => dispatch(actions.order.onChangeBuy(e)),
    onChangeMarketBuy: (e) => dispatch(actions.order.onChangeMarketBuy(e)),
    onChangeMarketSell: (e) => dispatch(actions.order.onChangeMarketSell(e)),
    makeOrder: (...args) => dispatch(actions.order.makeOrder(...args)),
    makeOrderMarket: (...args) => dispatch(actions.order.makeOrderMarket(...args)),
    loadOrderBook: (pair) => dispatch(actions.trading.loadOrderBook(pair)),
    loadDeals: (pair) => dispatch(actions.trading.loadDeals(pair)),
    handleSocketOrderBook: (pair, base_unit, quote_unit, cable) => dispatch(actions.trading.handleSocketOrderBook(pair, base_unit, quote_unit, cable)),
    setLabel: (base_unit, quote_unit) => dispatch(actions.order.setLabel(base_unit, quote_unit)),
    loadWallet: (base_unit, quote_unit) => dispatch(actions.wallet.loadWallet(base_unit, quote_unit)),
    makeMessage: (text, lang) => dispatch(actions.chat.makeMessage(text, lang)),
    loadMessages: () => dispatch(actions.chat.loadMessages()),
    loadInfo: (pair) => dispatch(actions.info.loadInfo(pair)),
    changeFormPrice: (form,wallet) => dispatch(actions.order.changeFormPrice(form,wallet))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Ex);


