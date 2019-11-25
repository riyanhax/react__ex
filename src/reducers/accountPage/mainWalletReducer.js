import { handleActions } from 'redux-actions';

const InitailState = {
    walletCurrency:{}
}

export const mainWalletCurrencyReducer = handleActions({
    setAccountWalletCurrency:(state,action)=>{
        let Currency = action.payload.walletCurrency;
        return{
            ...state,
            walletCurrency:Currency
        }
    }
}, InitailState)
