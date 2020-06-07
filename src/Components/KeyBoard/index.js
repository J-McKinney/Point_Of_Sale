import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Keyboard from "react-simple-keyboard";

function Keys(props) {
  return (
    <div>
      <Container id="keyBoardContainer">
        <Row>
          <Button value="Q" id="Q" className="letters">
            Q
          </Button>
          <Button value="W" id="W" className="letters">
            W
          </Button>
          <Button value="E" id="E" className="letters">
            E
          </Button>
          <Button value="R" id="R" className="letters">
            R
          </Button>
          <Button value="T" id="T" className="letters">
            T
          </Button>
          <Button value="Y" id="Y" className="letters">
            Y
          </Button>
          <Button value="U" id="U" className="letters">
            U
          </Button>
          <Button value="I" id="I" className="letters">
            I
          </Button>
          <Button value="O" id="O" className="letters">
            O
          </Button>
          <Button value="P" id="P" className="letters">
            P
          </Button>
        </Row>
        <Row>
          <Button value="A" id="A" className="letters">
            A
          </Button>
          <Button value="S" id="S" className="letters">
            S
          </Button>
          <Button value="D" id="D" className="letters">
            D
          </Button>
          <Button value="F" id="F" className="letters">
            F
          </Button>
          <Button value="G" id="G" className="letters">
            G
          </Button>
          <Button value="H" id="H" className="letters">
            H
          </Button>
          <Button value="J" id="J" className="letters">
            J
          </Button>
          <Button value="K" id="K" className="letters">
            K
          </Button>
          <Button value="L" id="L" className="letters">
            L
          </Button>
        </Row>
        <Row>
          <Button value="Z" id="Z" className="letters">
            Z
          </Button>
          <Button value="X" id="X" className="letters">
            X
          </Button>
          <Button value="C" id="C" className="letters">
            C
          </Button>
          <Button value="V" id="V" className="letters">
            V
          </Button>
          <Button value="B" id="B" className="letters">
            B
          </Button>
          <Button value="N" id="N" className="letters">
            N
          </Button>
          <Button value="M" id="M" className="letters">
            M
          </Button>
        </Row>
      </Container>
      <Keyboard />
    </div>
  );
}

export default Keys;
