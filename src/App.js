import React, { Component } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
// Redux
import { createStore } from "redux";
import reducer from "./redux/reducers/CounterReducer";
import "./App.css";

// Components
import Content from "./components/content/Content";

// Mock data
import { users } from "./mock-data/users.json";
import { courses } from "./mock-data/courses.json";
import { modules } from "./mock-data/modules.json";

const counter = 0;

const initialState = {
  users,
  courses,
  modules,
  counter
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
          <Content body={children}></Content>
        </div>
      </Provider>
    );
  }
}

export default App;
