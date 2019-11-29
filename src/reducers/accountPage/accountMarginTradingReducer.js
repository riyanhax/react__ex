import { handleActions } from 'redux-actions';

const InitailState = {

}

export const marginTradingReducer = handleActions({
    setBalanceTable: (state, action) => {
        let balancesTable = action.payload.balancesTable;
        return {
            ...state,
            balancesTable
        }
    },
    setSearchValue:(state,action)=>{
        let searchValue = action.payload.e;
        return{
            ...state,
            searchValue
        }
    },
    hideSmallBalances:(state,action) =>{
        let flag = action.payload.flag;
        return{
            ...state,
            flag
        }
    }
}, InitailState)