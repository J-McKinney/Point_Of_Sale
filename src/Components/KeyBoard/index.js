import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import "./style.css";

class KeyBoard extends Component {
  state = {
    layoutName: "default",
    input: "",
  };

  onChange = (input) => {
    this.setState({ input });
    console.log("Input changed", input);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);
    // If you want to handle the shift and caps lock buttons
    if (button === "{shift}" || button === "{lock}") this.handleShift();
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
