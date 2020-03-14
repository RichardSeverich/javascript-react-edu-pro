import React, { Component } from "react";
import { users } from "./../../mock-data/users.json";
import NavigationBar from "./../nav-bar/NavigationBar";
import "./Create.css";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      users
    };
  }
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div className="ui centered grid container">
          <div className="six wide column">
            <div className="ui fluid card">
              <div className="margin-bottom-one"></div>
              <h3 align="center">Users</h3>
              <div className="margin-bottom-one"></div>
              <div className="content" align="center">
                <form className="ui form">
                  <div className="field">
                    <div className="label">
                      <label>Id</label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      maxLength="7"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Nickname</label>
                    </div>
                    <input
                      suggested="my_nickname"
                      className=""
                      minLength="3"
                      maxLength="10"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Password</label>
                    </div>
                    <input
                      suggested="mypass123"
                      type="password"
                      className="form-control"
                      minLength="3"
                      maxLength="10"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Names</label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      minLength="3"
                      maxLength="24"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Last Names</label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      minLength="3"
                      maxLength="24"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Career</label>
                    </div>
                    <select className="">
                      <option value="System enginee">System engineer</option>
                      <option value="Civil engineer">Civil engineer</option>
                      <option value="Electronic engineer">
                        Electronic engineer
                      </option>
                      <option value="Finance engineer">Finance engineer</option>
                      <option value="Economy">Commercial Engineer</option>
                      <option value="Business administrato">
                        Business administrator
                      </option>
                      <option value="Architecture">Architecture</option>
                      <option value="Developer">Developer</option>
                      <option value="Economy">Economy</option>
                    </select>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Email</label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      maxLength="32"
                    ></input>
                  </div>
                  <div className="field">
                    <div className="label">
                      <label>Type</label>
                    </div>
                    <select className="">
                      <option value="Admin">Admin</option>
                      <option value="Student">Student</option>
                      <option value="Proffesor">Professor</option>
                      <option value="Trainer">Trainer</option>
                      <option value="Engineer">Engineer</option>
                    </select>
                  </div>
                  <div className="field text-center">
                    <button type="button" className="ui basic button">
                      <i className="save icon"></i>
                      Add
                    </button>
                    <button type="button" className="ui basic button">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
