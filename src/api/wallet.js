import {makeRequest} from "./makeRequest"

   const fetchWalletBase = (base_unit) => {
      
    const init = {
     method: 'GET',
     credentials: 'include',
     headers: {
       'Content-Type': 'application/json'
      }
   };
     return makeRequest(
         `api/v2/peatio/account/balances/${base_unit}`,
         init
       )

   };
    const fetchWalletQote = (quote_unit) => {
    
    const init = {
     method: 'GET',
     credentials: 'include',
     headers: {
       'Content-Type': 'application/json'
      }
   };
     return makeRequest(
         `api/v2/peatio/account/balances/${quote_unit}`,
         init
       )

   };
export const fetchWallet = async (base_unit,quote_unit) => {
    return await Promise.all([fetchWalletBase(base_unit), fetchWalletQote(quote_unit)])
  };

