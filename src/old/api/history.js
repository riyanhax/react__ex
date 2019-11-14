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
        'api/v2/peatio/market/orders',
        init
      )

  };