import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function NumberPad() {
  return (
    <div>
      <Container id="numberPadContainer">
        <Row>
          <Button value="1" id="one" className="numbers">1</Button>
          <Button value="2" id="two" className="numbers">2</Button>
          <Button value="3" id="three" className="numbers">3</Button>
        </Row>
        <Row>
          <Button value="4" id="four" className="numbers">4</Button>
          <Button value="5" id="five" className="numbers">5</Button>
          <Button value="6" id="six" className="numbers">6</Button>
        </Row>
        <Row>
          <Button value="7" id="seven" className="numbers">7</Button>
          <Button value="8" id="eight" className="numbers">8</Button>
          <Button value="9" id="nine" className="numbers">9</Button>
        </Row>
        <Row>
          <Col>
            <Button value="0" id="zero" className="numbers">0</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NumberPad;
