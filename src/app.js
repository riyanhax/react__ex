//import './assets/css/global.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ex from 'pg/Ex/index';
import LoginPage from 'pg/auth/loginPage';
import RegistrationPage from 'pg/auth/registrationPage';
import RecoveryPasswordPage from 'pg/auth/recoveryPasswordPage';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';
import PrivateRoute from 'cmp/PrivateRoute';
import { connect } from 'react-redux';
import actions from "act/"
import Widget from "./ConversationList"
import { ActionCableProvider } from "react-actioncable-provider";

class App extends React.Component {

  componentDidMount() {
    // fetch(`api/v2/peatio/chat/messages/en`, {
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
    let { isLoading, data, pairs, loadingPairs } = this.props;

    if (data) {
      isAuthenticated = true;
    }
    let pairsRoutes = ""
    
    if (!loadingPairs) {
      pairsRoutes = pairs.map((pair) => {
        return (
          <PrivateRoute path={`/trading/${pair.id}`}
            key={pair.id}
            component={Ex} isAuthenticated={isAuthenticated}
            exact
            isLoading={isLoading} />
        )
      })
     
    }


    return (


      // <ActionCableProvider url="ws://localhost:8099/websocket">
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/register" exact>
              <RegistrationPage />
            </Route>
            <Route path="/recovery" exact>
              <RecoveryPasswordPage />
            </Route>
            {pairsRoutes}
            {/* <PrivateRoute path="/trading/" component={Ex} isAuthenticated={isAuthenticated} isLoading={isLoading} /> */}
            <Route path="**" exact>
              <LoginPage/>
            </Route>
            <RecoveryPasswordPage />

          </Switch>
        </ConnectedRouter >
      // </ActionCableProvider>
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









