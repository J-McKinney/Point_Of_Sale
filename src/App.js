import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UserPage from "./Pages/UserPage";
import AdminPage from "./Pages/AdminPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/AdminPage" component={AdminPage} />
      </Router>
    </>
  );
}

export default App;
