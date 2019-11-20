import { handleActions } from 'redux-actions';
import { setWallet } from 'act/wallet';
const InitailState = {
  
}



export const walletReducer = handleActions({
 
    setWallet: (state, action) => {
        
        let {wallet} = action.payload;
        return {
            ...state,
            wallet
        }
    },

   
   
}, InitailState);
