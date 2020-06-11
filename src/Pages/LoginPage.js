import React, { Component } from "react";
import Wrapper from "../Components/Wrapper";
import KeyBoard from "../Components/KeyBoard";

class LoginPage extends Component {
  state = {
    loginID: "",
  };

   loginCreds = () => {
    // Using the getInput Method to get the input
    let input = this.keyboard.getInput();
    console.log("LoginCreds: " + input);
    // setting the state of LoginID to the input for credential authorization
    this.setState({ loginID: this.state.input });
    this.keyboard.clearInput();
  };

  render() {
    return (
      <>
        <Wrapper>
          <KeyBoard />
        </Wrapper>
      </>
    );
  }
}

export default LoginPage;
