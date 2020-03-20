import React, { Component } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
// Redux
import { createStore, combineReducers } from "redux";
import reducerCounter from "./redux/reducers/ReducerCounter";
import reducerUser from "./redux/reducers/ReducerUser";
import reducerCourse from "./redux/reducers/ReducerCourse";

import "./App.css";

// Components
import Content from "./components/content/Content";

// Mock data
import { users } from "./mock-data/users.json";
import { courses } from "./mock-data/courses.json";
import { modules } from "./mock-data/modules.json";

let rootReducer = combineReducers({
  users: reducerUser,
  courses: reducerCourse,
  counter: reducerCounter
});

const initialState = {
  users: users,
  courses: courses,
  counter: 0
};

const store = createStore(
  rootReducer,
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
