// React
import React from "react";
import ReactDOM from "react-dom";

// App Router
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);
