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

export const fetchPublicCurrencies = () => {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return makeRequest(
        '/api/v2/peatio/public/currencies?type=coin',
        init
    )
}

export const fetchtWalletAddress = (currency) => {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return makeRequest(
        `/api/v2/peatio/account/deposit_address/${currency}`,
        init
    )
};

export const fetchWithdrawsHistory = () => {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return makeRequest(
        '/api/v2/peatio/account/withdraws',
        init
    )
}
