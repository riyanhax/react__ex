
import { handleActions } from 'redux-actions';
import {setOpenOrders, loadOpenOrders } from '../actions/history';
const InitailState = {
    loading: true
}

function onLoad(state,payload){

    return {
        ...state,
        loading:false,
        payload,
        
    };
}

export  const historyReducer = handleActions({
    setOpenOrders: (state,action) => {
        
        return onLoad(state, action.payload.items);
    },
    loadOpenOrders: (state)=>{
       
        return {
            ...state,
        };
    }
  }, InitailState);
