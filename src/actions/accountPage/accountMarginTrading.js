import {createActions} from 'redux-actions';

export const{getBalanceTable,
             setBalanceTable,
             setSearchValue,
             hideSmallBalances,
   }=createActions({
        getBalanceTable: ()=>({}),
        setBalanceTable: (balancesTable)=>({balancesTable}),
        setSearchValue: (e) => ({e}),
        hideSmallBalances: (flag) =>({flag}),
})