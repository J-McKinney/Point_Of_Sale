import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NumberPad(props) {
  return (
    <div>
      <Container id="numberPadContainer">
        <Row>
          <Button id="one" className="numbers">1</Button>
          <Button id="two" className="numbers">2</Button>
          <Button id="three" className="numbers">3</Button>
        </Row>
        <Row>
          <Button id="four" className="numbers">4</Button>
          <Button id="five" className="numbers">5</Button>
          <Button id="six" className="numbers">6</Button>
        </Row>
        <Row>
          <Button id="seven" className="numbers">7</Button>
          <Button id="eight" className="numbers">8</Button>
          <Button id="nine" className="numbers">9</Button>
        </Row>
        <Row>
          <Col>
            <Button id="zero" className="numbers">0</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NumberPad;
