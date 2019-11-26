import { handleActions } from 'redux-actions';

const InitailState = {
   
}

export const withdrawsHistoryReducer = handleActions({
    setWithdrawsHistory:(state,action)=>{
        let historyList = action.payload.history;
        return{
            ...state,
            historyList
        }
    }
}, InitailState)