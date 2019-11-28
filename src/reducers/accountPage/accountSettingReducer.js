import { handleActions } from 'redux-actions';

const InitailState = {

}

export const accountSettingsReducer = handleActions({
    setLoginHistory: (state, action) => {
        let loginTable = action.payload.loginTable;
        return {
            ...state,
            loginTable
        }
    }
}, InitailState)