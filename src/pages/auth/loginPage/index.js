import React from 'react';
import LoginHeader from 'cmp/auth/loginHeader';
import "../index.css";
import AuthForm from 'cmp/auth/authForm/';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import actions from "act/"
class LoginPage extends React.Component {
    componentDidMount() {
    
        //  this.props.login("admin@barong.io", "0lDHd9ufs9t@")
        this.props.loadPairs()
    }
    onSUbmit = (event) => {
        event.preventDefault();
        let formData = this.props.formData;
        this.props.login(formData.email.value, formData.password.value, this.props.pairs[0])
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
        formData: state.authReducer.formData,
        pairs: state.tradingReducer.pairs,
    };
}
let mapDispatchToProps = (dispatch) => {

    return {
        login: (email, password, initPair) => dispatch(actions.auth.login(email, password, initPair)),
        loadPairs: () => dispatch(actions.trading.loadPairs()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);