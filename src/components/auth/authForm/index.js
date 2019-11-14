import React from 'react';


export default class AuthForm extends React.Component {
    onChange = e => this.props.onChange(e);
    render() {
        
        const {onSubmit, formData } = this.props;
        let formFields = [];
        for(let name in formData){
            let item = formData[name];
            formFields.push(
                <div key={item.name} className="auth__form_inpContainer">
                    <input className="auth_form__input"
                        required
                        name={item.name}
                        type={item.type}
                        value ={item.value}
                        onChange={(e)=>this.onChange(e)}
                        placeholder={item.placeholder} />
                    <label>{item.placeholder}</label>
                </div>
            )
        }
            
        return (
            <>
                <form className="auth__form" onSubmit={onSubmit}>
                    {formFields}
                    {this.props.link}
                    {this.props.checkBox}
                    {this.props.button}
                </form>
            </>
        );
    }
}

