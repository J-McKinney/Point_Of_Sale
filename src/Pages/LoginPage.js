import React, { Component } from "react";
import NumberPad from "../Components/NumberPad";
import KeyBoard from "../Components/KeyBoard";
import Keyboard from "react-simple-keyboard";

class LoginPage extends Component {
  render() {
    return (
      <>
        <NumberPad />
        <KeyBoard />
        <Keyboard />
      </>
    );
  }
}

export default LoginPage;
