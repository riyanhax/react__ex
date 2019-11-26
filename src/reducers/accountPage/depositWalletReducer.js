import { handleActions } from 'redux-actions';

const InitailState = {
   
}

export const depositWalletReducer = handleActions({
    setWalletAddress:(state,action)=>{
        let walletAddress = action.payload.address;
        return{
            ...state,
            walletAddress
        }
    }
}, InitailState)