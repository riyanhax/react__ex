import {makeRequest} from "../makeRequest"

  export const loginUser = (email, password) => {
   const init = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
     },
    body: JSON.stringify({email, password}),
  };
    return makeRequest(
        'api/v2/barong/identity/sessions',
        init
      )

  };