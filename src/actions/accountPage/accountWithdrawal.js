import {createActions} from 'redux-actions';

export const {
              getPublicCurrencies,
              setPublicCurrencies,
              getWalletAddress,
              setWalletAddress,
              getWithdrawsHistory,
              setWithdrawsHistory
            } = createActions({
    getPublicCurrencies: ()=>({}),
    setPublicCurrencies: (currencies)=>({currencies}),
    getWalletAddress: (currency)=>({currency}),
    setWalletAddress: (address) => ({address}),
    getWithdrawsHistory:() =>({}),
    setWithdrawsHistory:(history) =>({history})

})