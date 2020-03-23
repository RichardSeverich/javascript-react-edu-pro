import React, { Component } from "react";
import NavigationBar from "./../nav-bar/NavigationBar";
import "./Show.css";

class Show extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { modules, remove } = this.props;
    const rows = modules.map((module, i) => {
      let _id = module._id;
      return (
        <tr key={module._id}>
          <td scope="col">
            <input type="checkbox"></input>
          </td>
          <td scope="col">{module._id}</td>
          <td scope="col">{module.name}</td>
          <td scope="col">
            <button className="ui basic button">
              <i className="search plus icon"></i>
              Details
            </button>
          </td>
          <td scope="col">
            <button className="ui basic button">
              <i className="edit icon"></i>
              Edit
            </button>
          </td>
          <td scope="col">
            <button onClick={() => remove(_id)} className="ui basic button">
              <i className="remove sign icon"></i>
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div align="center">
          <div className="card-modules">
            <div className="margin-bottom">
              <h3 align="center">Modules</h3>
            </div>
            <div className="card-body">
              <table className="ui striped selectable celled table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">_id</th>
                    <th scope="col">name</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Show;
