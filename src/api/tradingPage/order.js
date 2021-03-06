import { makeRequest } from "../makeRequest"

export const fetchOrder = (price, amount, type, pair ) => {


    const init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                market: pair,
                side: type,
                volume: amount,
                price
            }
        ),
    };
    return makeRequest(
        'api/v2/peatio/market/orders',
        init
    )
};
export const fetchOrderMarket = (ord_type, amount, type, pair) => {

    const init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                market: pair,
                side: type,
                volume: amount,
                ord_type
            }
        ),
    };

    return makeRequest(
        'api/v2/peatio/market/orders',
        init
    )
};