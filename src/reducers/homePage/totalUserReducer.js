import { handleActions } from 'redux-actions';


const InitailState = {
    totalUserData:{}
}

export const TotalUsersReducer = handleActions({
    setTotalUsers:(state,action)=>{
        
        let totalUserData = action.payload.totalUsers  
        return{
                ...state,
                totalUserData:totalUserData
            }
    }
}, InitailState);