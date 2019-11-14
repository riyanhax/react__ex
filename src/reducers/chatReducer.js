import { handleActions } from 'redux-actions';
import { setChat } from 'act/chat';
const InitailState = {
    messages: [

    ]
}



export const chatReducer = handleActions({

    setChat: (state, action) => {
        if (action.data) {
            let messages = [...state.messages];
            messages.push(action.data)
            return {
                ...state,
                messages
            }
        }
        if (action.payload.data) {
            let messages = action.payload.data;
            return {
                ...state,
                messages
            }
        }

    },




}, InitailState);
