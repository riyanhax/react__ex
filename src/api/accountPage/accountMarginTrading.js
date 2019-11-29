import { makeRequest } from '../makeRequest';

export const fetchBalancesTable = () => {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return makeRequest(
        '/api/v2/peatio/account/balances',
        init
    )

};