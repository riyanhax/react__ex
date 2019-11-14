
import {createStore, applyMiddleware} from "redux";
import combine from "./reducers/";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { history } from './history';
import { routerMiddleware } from 'connected-react-router';
const sagaMiddleware = createSagaMiddleware()
let middlewares = [sagaMiddleware, routerMiddleware(history)];
export const store = createStore(
    combine,
    applyMiddleware(...middlewares)
    );
    sagaMiddleware.run(rootSaga)

