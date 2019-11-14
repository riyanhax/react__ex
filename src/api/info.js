import {makeRequest} from "./makeRequest"

   const fetchInfo = (pair) => {
      
    const init = {
     method: 'GET',
     credentials: 'include',
     headers: {
       'Content-Type': 'application/json'
      }
   };
     return makeRequest(
         `api/v2/peatio/public/markets/${pair}/header_info`,
         init
       )

   };