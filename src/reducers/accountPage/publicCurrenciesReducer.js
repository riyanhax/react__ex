import { handleActions } from 'redux-actions';

const InitailState = {
   
}

export const publicCurrenciesReducer = handleActions({
    setPublicCurrencies:(state,action)=>{
        let pubCurrencies = action.payload.currencies;
        return{
            ...state,
            pubCurrencies
        }
    }
}, InitailState)