import React, { Component } from 'react';
import Logo from './../logo/Logo';
import './NavigationBar.css';
import logo from './logo.png';
import { withRouter } from 'react-router-dom';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.navigateUsersShow = this.navigateUsersShow.bind(this);
        this.navigateUsersCreate = this.navigateUsersCreate.bind(this);
        this.navigateCursosMostrar = this.navigateCursosMostrar.bind(this);
        this.navigateCursosCrear = this.navigateCursosCrear.bind(this);
        this.navigateModulosMostrar = this.navigateModulosMostrar.bind(this);
        this.navigateModulosCrear = this.navigateModulosCrear.bind(this);
        this.navigateLogin = this.navigateLogin.bind(this);
        this.navigateNotasCrear = this.navigateNotasCrear.bind(this);
        this.navigateNotasMostrar = this.navigateNotasMostrar.bind(this);
    }
    navigateUsersShow() {
        this.props.history.push('/users-show');
    }
    navigateUsersCreate() {
        this.props.history.push('/users-create');
    }
    navigateCursosMostrar() {
        this.props.history.push('/courses-mostrar');
    }
    navigateCursosCrear() {
        this.props.history.push('/courses-crear');
    }
    navigateModulosMostrar() {
        this.props.history.push('/modules-mostrar');
    }
    navigateNotasCrear() {
        this.props.history.push('/scores-crear');
    }
    navigateNotasMostrar() {
        this.props.history.push('/scores-mostrar');
    }
    navigateModulosCrear() {
        this.props.history.push('/modules-crear');
    }
    navigateLogin(){
        this.props.history.push('/login');
    }
    render() { return (<div>
        <div className='navbar'>
            <div className="ui stackable menu">
                <div className="item">
                    <div className="ui compact menu">
                    <img src={logo} className="App-logo-bar" alt="logo" />
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i class="user icon"></i>
                            Users
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateUsersCreate} className="item">Add</div>
                                <div onClick={this.navigateUsersShow} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i class="book icon"></i>
                            Courses
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateCursosCrear} className="item">Add</div>
                                <div onClick={this.navigateCursosMostrar} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i class="pencil icon"></i>
                            Modules
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateModulosCrear} className="item">Add</div>
                                <div onClick={this.navigateModulosMostrar} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                          <i class="lightning icon"></i>
                            Scores
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div onClick={this.navigateNotasCrear} className="item">Add</div>
                                <div onClick={this.navigateNotasMostrar} className="item">Show</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right item">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">
                            <i class="setting icon"></i>
                            <div className="menu">
                                <div className="item">Conf</div>
                                <div onClick={this.navigateLogin} className="item">Exit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Logo></Logo>
    </div>)}
}
export default withRouter(NavigationBar);
