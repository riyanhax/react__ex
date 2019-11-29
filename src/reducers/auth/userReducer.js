
import { handleActions } from 'redux-actions';

const InitailState = {
    data: { },
    isLoading:true
}

export  const userReducer = handleActions({
  
    checkUser: (state) => {
        return {
            ...state,
            isLoading:true,
        };
    },
    successUser: (state,action) => {
        return {
            ...state,
            data: action.payload.data,
            isLoading:false
        };
    },
    failUser: (state) => {
        return {
            ...state,
            isLoading:true,
        };
    }
  }, InitailState);
