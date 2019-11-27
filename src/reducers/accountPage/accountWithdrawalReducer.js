import { handleActions } from 'redux-actions';

const InitailState = {
   
}
export const accountWithdrawalReducer = handleActions({
    setWithdrawsHistory:(state,action)=>{
        let historyList = action.payload.history;
        return{
            ...state,
            historyList
        }
    },
    setWalletAddress:(state,action)=>{
        let walletAddress = action.payload.address;
        return{
            ...state,
            walletAddress
        }
    },
    setPublicCurrencies:(state,action)=>{
        let pubCurrencies = action.payload.currencies;
        return{
            ...state,
            pubCurrencies
        }
    },
    
}, InitailState)
