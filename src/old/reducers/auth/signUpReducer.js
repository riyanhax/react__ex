const InitailState = {
    formData: [
            {
                    type: "email",
                    placeholder: "Email",
                    vaild: false
            },
            {
                    type: "password",
                    placeholder: "Password",
                    vaild: false
            },
            {
                type:"text",
                placeholder:"Promo Code",
                vaild: false
            },
            
    ]
}

export default function (state = InitailState,action){
    switch (action.type) {
        default:
            return state;
    }
}
