import React from 'react';
import LoginHeader from '../../../components/loginHeader';
import "../index.css";
import AuthForm from '../../../components/authForm/index';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import actions from "../../../actions/"
class LoginPage extends React.Component {
    componentDidMount() {
        //  this.props.login("admin@barong.io", "0lDHd9ufs9t@")
        
    }
    onSUbmit = (event) => {
        event.preventDefault();
        let formData = this.props.formData;
        this.props.login(formData.email.value, formData.password.value)
    }
    onChange = (e) => {
        let key = e.target.name;
        let formData = this.props.formData;
        formData[key].value = e.target.value
        this.setState({ formData });
    }
    render() {
        // console.log(this.props.formData.email.value)
        const { formData } = this.props;
        return (
            <section id="authForm">

                <div className="container flexjcac column">
                    <LoginHeader text="Welcome back!"
                        span="Not registered yet?"
                        lnk="/register"
                        txtlnk="Create your account" />
                    <AuthForm
                        link={
                            <div>
                                <NavLink to="/recovery" exact className="auth__form_recoveryLink">
                                    Forgot your password?
                                 </NavLink>

                            </div>
                        }
                        button={
                            <div>
                                <button className="auth__form__smb" type="submit">Sign in</button>
                            </div>
                        }
                        formData={formData}
                        onSubmit={this.onSUbmit}
                        onChange={this.onChange}
                    />
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    
    return {
        formData: state.authReducer.formData
    };
}
let mapDispatchToProps = (dispatch) => {

    return {
        login: (email, password) => dispatch(actions.auth.login(email, password))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);