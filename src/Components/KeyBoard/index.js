import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
// import { Link } from "react-router-dom";
import "./style.css";

class KeyBoard extends Component {
  state = {
    layoutName: "default",
    input: "",
    loginID: "",
  };

  componentDidUpdate() {
    console.log("componentDidUpdate: " + this.state.loginID);
  }

  onChange = (input) => {
    this.setState({ input });
    console.log("Input changed: ", input);
  };

  onKeyPress = (button) => {
    console.log("Button pressed: ", button);
    // If you want to handle the shift and caps lock buttons
    if (button === "{shift}" || button === "{lock}") this.handleShift();
    // need to get the {enter} button to log in users with authentication
    if (button === "{enter}") this.loginCreds();
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;
    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };

  onChangeInput = (event) => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  };

  loginCreds = () => {
    // Using the getInput Method to get the input
    let input = this.keyboard.getInput()
    console.log("LoginCreds: " + input)
    // setting the state of LoginID to the input for credential authorization
    this.setState({ loginID: this.state.input });
    this.keyboard.clearInput();
  };

  render() {
    return (
      <>
        <input
          value={this.state.input}
          placeholder={"Login Identification"}
          onChange={this.onChangeInput}
        />
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          theme={"hg-theme-default myTheme1"} // This is the dark theme mode
          layoutName={this.state.layoutName}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
      </>
    );
  }
}

export default KeyBoard;
