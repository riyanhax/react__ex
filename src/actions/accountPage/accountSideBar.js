import {createActions} from 'redux-actions';

export const{getAccountWalletCurrency,
             setAccountWalletCurrency,
            }=createActions({
                getAccountWalletCurrency: ()=>({}),
                setAccountWalletCurrency: (walletCurrency)=>({walletCurrency}),
})