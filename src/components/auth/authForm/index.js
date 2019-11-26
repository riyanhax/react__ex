import React from 'react';


export default (props) => {
    let onChange = e => props.onChange(e);


    const { onSubmit, formData } = props;
    let formFields = [];
    for (let name in formData) {
        let item = formData[name];
        formFields.push(
            <div key={item.name} className="auth__form_inpContainer">
                <input className="auth_form__input"
                    required
                    name={item.name}
                    type={item.type}
                    value={item.value}
                    onChange={(e) => onChange(e)}
                    placeholder={item.placeholder} />
                <label>{item.placeholder}</label>
            </div>
        )
    }

    return (
        <>
            <form className="auth__form" onSubmit={onSubmit}>
                {formFields}
                {props.link}
                {props.checkBox}
                {props.button}
            </form>
        </>
    );

}

