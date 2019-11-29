import { handleActions } from 'redux-actions';

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
