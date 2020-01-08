import React, { Component } from 'react';
import Logo from './../logo/Logo';
import LogoSemantic from './../logo-semantic/LogoSemantic';
import './Login.css';

class Login extends Component{
    constructor(props) {
        super(props);
        this.navigateNavbar = this.navigateNavbar.bind(this);
    }
    navigateNavbar() {
        this.props.history.push('/nav-bar');
    }
    render() {
        return (
<div>
    <div className="Login-header">
    <Logo></Logo> 
    <LogoSemantic></LogoSemantic> 
    <Logo></Logo>
    </div>

    <div className="ui centered grid container">
        <div className="six wide column">
            <div className="ui fluid card">
                <div className="content">
                    <form className="ui form">
                        <div className="field">
                            <label>User</label>
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="user" placeholder="User"></input>
                            </div>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="pass" placeholder="Password"></input>
                            </div>
                        </div>
                        <button onClick={this.navigateNavbar} className="ui positive labeled icon button" type="submit">
                            <i className="unlock alternate icon"></i>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
}
export default Login;
