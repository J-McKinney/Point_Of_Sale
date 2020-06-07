import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UserPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import Wrapper from "./Components/Wrapper";
// import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/UserPage" component={UserPage} />
            <Route exact path="/AdminPage" component={AdminPage} />
          </Wrapper>
        </div>
      </Router>
    </>
  );
}

export default App;
