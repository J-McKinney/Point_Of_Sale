import React, { Component } from "react";
import NumberPad from "../Components/NumberPad";
import KeyBoard from "../Components/KeyBoard";

class LoginPage extends Component {
  render() {
    return (
      <>
        <NumberPad />
        <KeyBoard />
      </>
    );
  }
}

export default LoginPage;
