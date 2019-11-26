//import './assets/css/global.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from 'pg/Homepage/';
import Trading from 'pg/Trading/';
import LoginPage from 'pg/auth/loginPage';
import RegistrationPage from 'pg/auth/registrationPage';
import RecoveryPasswordPage from 'pg/auth/recoveryPasswordPage';
import AccountPage from './pages/Account/index';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';
import PrivateRoute from 'cmp/PrivateRoute';
import { connect } from 'react-redux';
import actions from "act/"


class App extends React.Component {

  componentDidMount() {

    // fetch(`api/v2/peatio/public/markets/ethusd/header_info`, {
    //   credentials: 'include',

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
    this.props.checkUser()
    this.props.loadPairs()
  }

  render() {
    let isAuthenticated = false;
    let { isLoading, data, pairs } = this.props;
   
    if (data.uid) {
      isAuthenticated = true;
    }
    let pairsRoutes = ""

    if (pairs) {

      pairsRoutes = pairs.map((pair) => {
        return (
          <PrivateRoute path={`/trading/${pair.id}`}
            key={pair.id}
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}>
            <Trading
              base_unit={pair.base_unit}
              quote_unit={pair.quote_unit}
              pair={pair.id}
            />
          </PrivateRoute>
        )
      })

    }


    return (

      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/account/">
            <AccountPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegistrationPage />
          </Route>
          <Route path="/recovery" exact>
            <RecoveryPasswordPage />
          </Route>
          {pairsRoutes}
          <Route path="**" exact>
            <LoginPage />
          </Route>

        </Switch>
      </ConnectedRouter >


    );

  }

}
let mapStateToProps = (state) => {

  return {
    isLoading: state.userReducer.isLoading,
    data: state.userReducer.data,
    pairs: state.tradingReducer.pairs,
    loadingPairs: state.tradingReducer.loadingPairs
  };
}
let mapDispatchToProps = (dispatch) => {

  return {
    checkUser: () => dispatch(actions.user.checkUser()),
    loadPairs: () => dispatch(actions.trading.loadPairs()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);









