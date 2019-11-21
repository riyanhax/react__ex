import { makeRequest } from "./makeRequest"

export const fetchOrder = (args) => {

    const init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                market: args[3],
                side: args[2],
                volume: args[1],
                price: args[0]
            }
        ),
    };
    return makeRequest(
        'api/v2/peatio/market/orders',
        init
    )
};
export const fetchOrderMarket = (args) => {

    const init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                market: args[3],
                side: args[2],
                volume: args[1],
                ord_type: args[0]
            }
        ),
    };

    return makeRequest(
        'api/v2/peatio/market/orders',
        init
    )
};