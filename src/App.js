import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UserPage from "./Pages/UserPage";
import AdminPage from "./Pages/AdminPage";
// import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/AdminPage" component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
