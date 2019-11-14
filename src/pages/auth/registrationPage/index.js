import React from 'react';
import AuthForm from '../../../components/authForm/index';
import { connect } from 'react-redux';
import LoginHeader from '../../../components/loginHeader/index';
import "../index.css";
import actions from "../../../actions/"
class RegistrationPage extends React.Component {
    state = {
        disabled: false
    }

    changeStyle = (event) => {
        event.target.checked ? this.setState((state) => ({ disabled: true }))
            : this.setState((state) => ({ disabled: false }));
    }
   
    componentDidMount() {
     // this.props.login("2nicinelir@imaild.com","0lDHd9ufs9t")
    }
    render() {

        // console.log(this.state.disabled)
      
        return (
            <>
                <section id="authForm">

                    <div className="container flexjcac column">
                        <LoginHeader text="Registration"
                            span="Do you already have an account?"
                            lnk="/login"
                            txtlnk="Sign in" />
                        <AuthForm
                            button={
                                <div className="auth_form__popup_btn">
                                    {this.state.disabled ?
                                        <button className={"auth__form__smb "} type="submit"   >Create your account</button>
                                        : <button className={"auth__form__smb "} type="submit" disabled >Create your account</button>
                                    }
                                </div>
                            }
                            checkBox={
                                <div className="auth__form_checkBoxContainer">
                                    <input id="check" name="terms" type="checkbox" className="auth_form_checkBox" onClick={(event) => this.changeStyle(event)}></input>
                                    <label htmlFor="check">
                                        <span>I AGREE with &nbsp;
                                        <a rel="noopener" target="blank" href="https://cdn.azbit.com/docs/en/terms-and-conditions.pdf">Terms and conditions </a>
                                        </span>
                                    </label>
                                </div>
                            }
                            data={this.props.formData}
                           
                        />
                    </div>
                </section>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        formData: state.signUpReducer.formData
    };
}
let mapDispatchToProps = (dispatch) => {

    return {
        login: (email,password) => dispatch(actions.auth.login(email, password))
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);