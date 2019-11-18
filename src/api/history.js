import {makeRequest} from "./makeRequest"

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

  export const fetchOrderHistory= () => {
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
   export const fetchTradeHistory= () => {
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