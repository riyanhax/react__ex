import {makeRequest} from "./makeRequest"
export const fetchPairs = () => {

  const init = {
   method: 'GET',
   credentials: 'include',
   headers: {
     'Content-Type': 'application/json'
    }
 };
   return makeRequest(
       'api/v2/peatio/public/markets',
       init
     )

 };
  export const fetchOrderBook = (pair) => {

   const init = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
     }
  };
    return makeRequest(
        `api/v2/peatio/public/markets/${pair}/order-book`,
        init
      )

  };
  export const fetchDeals = (pair) => {

    const init = {
     method: 'GET',
     credentials: 'include',
     headers: {
       'Content-Type': 'application/json'
      }
   };
     return makeRequest(
         `api/v2/peatio/public/markets/${pair}/trades`,
         init
       )
 
   };


