import { handleActions } from 'redux-actions';


const InitailState = {
       
        formData: {
                email: {
                        name: "email",
                        type: "text",
                        placeholder: "Email",
                        vaild: false,
                        value: ""
                },
                password: {
                        name: "password",
                        type: "text",
                        placeholder: "Password",
                        vaild: false,
                        value: ""
                },

        }
}


export const authReducer = handleActions({

        fetchLogout: (state) => {
                return {
                        ...state,
                };
        }
}, InitailState);