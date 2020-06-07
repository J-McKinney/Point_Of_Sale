import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
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
        <Container id="keyBoardContainer">
          <Row id="keyBoardRow">
            <input
              value={this.state.input}
              placeholder={"Tap on the virtual keyboard to start"}
              onChange={this.onChangeInput}
            />
            <Keyboard
              keyboardRef={(r) => (this.keyboard = r)}
              layoutName={this.state.layoutName}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default KeyBoard;
