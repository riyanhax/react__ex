import {createActions} from 'redux-actions';

export const {
    getLoginHistory,
    setLoginHistory
}=createActions({
    getLoginHistory:()=>({}),
    setLoginHistory:(loginTable)=>({loginTable}),
})