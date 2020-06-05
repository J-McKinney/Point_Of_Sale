import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

class NumberPad extends Component {
  render() {
    return (
      <div>
        <Container id="numPadContainer">
          <Row id="numPadRow1-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Row>
          <Row id="numPadRow4-6">
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Row>
          <Row id="numPadRow7-9">
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NumberPad;
