import { makeRequest } from "./makeRequest"

export const getUser = () => {

  const init = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return makeRequest(
    'api/v2/barong/resource/users/me',
    init
  )

};