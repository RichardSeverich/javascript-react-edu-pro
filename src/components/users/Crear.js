import React, { Component } from 'react';
import { users } from './../../mock-data/users.json';
import NavigationBar from './../nav-bar/NavigationBar';
import './Crear.css';

class Crear extends Component{
    constructor(){
        super();
        this.state = {
            users
        }
    }
    render() {
        return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="">
            <div className="">
                <div className="margin-bottom">
                  <h3 align="center">
                    Users
                  </h3>
                </div>
                <div className="" align="center">
                  <form className="ui form">
                    <div className="field inline fields input">
                      <div className='label'><label>Id</label></div>
                      <input type="text" className="form-control" maxLength="7"></input>
                    </div>
                    <div className="field inline fields input">
                        <div className='label'><label>nickname</label></div>
                        <input suggested="my_nickname" className="" minLength="3" maxLength="10" readonly></input>
                    </div>
                    <div className="field inline fields input">
                        <div className='label'><label>Password</label></div>
                        <input suggested="mypass123" type="password" className="form-control" minLength="3" maxLength="10"></input>
                    </div>
                    <div className="field inline fields input">
                        <div className='label'><label>Names</label></div>
                        <input type="text" className="form-control" minLength="3" maxLength="24"></input>
                    </div>
                    <div className="field inline fields input">
                        <div className='label'><label>Last Names</label></div>
                        <input type="text" className="form-control" minLength="3" maxLength="24"></input>
                    </div>
                    <div className="field inline fields input">
                        <div className='label'><label>Email</label></div>
                        <input type="text" className="form-control" maxLength="32"></input>
                    </div>
                    <div className="field inline fields input">
                      <div className='label'><label>Tipo</label></div>
                        <select className="">
                            <option value="Admin">Admin</option>
                            <option value="Student">Student</option>
                            <option value="Proffesor">Professor</option>
                            <option value="Trainer">Trainer</option>
                            <option value="Engineer">Engineer</option>
                        </select>
                    </div>
                    <div className="field text-center">
                      <button className="ui basic button">Registrar</button>
                      <button className="ui basic button">Cancelar</button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
        )
    }
}
export default Crear;
