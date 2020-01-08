import React, { Component } from 'react';
import Logo from './../logo/Logo';
import './NavigationBar.css';
import logo from './logo.svg';
import { withRouter } from 'react-router-dom';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.navigateUsuariosMostrar = this.navigateUsuariosMostrar.bind(this);
    this.navigateUsuariosCrear = this.navigateUsuariosCrear.bind(this);
    this.navigateCursosMostrar = this.navigateCursosMostrar.bind(this);
    this.navigateCursosCrear = this.navigateCursosCrear.bind(this);
    this.navigateModulosMostrar = this.navigateModulosMostrar.bind(this);
    this.navigateModulosCrear = this.navigateModulosCrear.bind(this);
    this.navigateLogin = this.navigateLogin.bind(this);
    this.navigateNotasCrear = this.navigateNotasCrear.bind(this);
    this.navigateNotasMostrar = this.navigateNotasMostrar.bind(this);
  }
  
  navigateUsuariosMostrar() {
    this.props.history.push('/users-mostrar');
  }

  navigateUsuariosCrear() {
    this.props.history.push('/users-crear');
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
    render() {
        return (
<div>

<div class="ui stackable menu">
  <div class="item"><img src="https://react.semantic-ui.com/logo.png" /></div>

  <div class="item">
<div class="ui compact menu">
  <div class="ui simple dropdown item">
    Users
    <i class="dropdown icon"></i>
    <div class="menu">
      <div onClick={this.navigateUsuariosCrear} class="item">Add</div>
      <div onClick={this.navigateUsuariosMostrar} class="item">Show</div>
    </div>
  </div>
</div>
  </div>

  <div class="item">
<div class="ui compact menu">
  <div class="ui simple dropdown item">
    Courses
    <i class="dropdown icon"></i>
    <div class="menu">
      <div onClick={this.navigateCursosCrear} class="item">Add</div>
      <div onClick={this.navigateCursosMostrar} class="item">Show</div>
    </div>
  </div>
</div>
  </div>

  <div class="item">
<div class="ui compact menu">
  <div class="ui simple dropdown item">
    Modules
    <i class="dropdown icon"></i>
    <div class="menu">
      <div onClick={this.navigateModulosCrear} class="item">Add</div>
      <div onClick={this.navigateModulosMostrar} class="item">Show</div>
    </div>
  </div>
</div>
  </div>

  <div class="item">
<div class="ui compact menu">
  <div class="ui simple dropdown item">
    Scores
    <i class="dropdown icon"></i>
    <div class="menu">
      <div onClick={this.navigateNotasCrear} class="item">Add</div>
      <div onClick={this.navigateNotasMostrar} class="item">Show</div>
    </div>
  </div>
</div>
  </div>

  <div class="right item">
<div class="ui compact menu">
  <div class="ui simple dropdown item">
    Options
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item">Configuration</div>
      <div onClick={this.navigateLogin} class="item">Exit</div>
    </div>
  </div>
</div>
  </div>

</div>

<Logo></Logo>




</div>
        )
    }
}
export default withRouter(NavigationBar);
