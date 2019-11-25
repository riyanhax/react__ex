import {createActions} from 'redux-actions';

export const {getAccountWalletCurrency,setAccountWalletCurrency,getPublicCurrencies,setPublicCurrencies} = createActions({
    getAccountWalletCurrency: ()=>({}),
    setAccountWalletCurrency: (walletCurrency)=>({walletCurrency}),
    getPublicCurrencies: ()=>({}),
    setPublicCurrencies: (currencies)=>({currencies}),

})