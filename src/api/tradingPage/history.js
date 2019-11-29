import { makeRequest } from "../makeRequest"

export const fetchOpenOrders = () => {
  const init = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return makeRequest(
    'api/v2/peatio/market/orders?state=wait',
    init
  )

};

export const fetchOrderHistory = () => {
  const init = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return makeRequest(
    'api/v2/peatio/market/orders',
    init
  )

};
export const fetchTradeHistory = () => {
  const init = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return makeRequest(
    'api/v2/peatio/market/trades',
    init
  )

};

export const fetchRemoveOrder = (id) => {
  const init = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(),
  };
  return makeRequest(
    `api/v2/peatio/market/orders/${id}/cancel`,
    init
  )

};