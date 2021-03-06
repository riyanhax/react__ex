import { makeRequest } from '../makeRequest';

export const fetchAccountWalletCurrency = () => {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return makeRequest(
        '/api/v2/peatio/user/main-wallet',
        init
    )

};