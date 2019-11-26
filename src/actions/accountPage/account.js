import {createActions} from 'redux-actions';

export const {getAccountWalletCurrency,
              setAccountWalletCurrency,
              getPublicCurrencies,
              setPublicCurrencies,
              getWalletAddress,
              setWalletAddress,
              getWithdrawsHistory,
              setWithdrawsHistory
            } = createActions({
    getAccountWalletCurrency: ()=>({}),
    setAccountWalletCurrency: (walletCurrency)=>({walletCurrency}),
    getPublicCurrencies: ()=>({}),
    setPublicCurrencies: (currencies)=>({currencies}),
    getWalletAddress: (currency)=>({currency}),
    setWalletAddress: (address) => ({address}),
    getWithdrawsHistory:() =>({}),
    setWithdrawsHistory:(history) =>({history})

})