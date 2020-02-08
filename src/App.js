import React from "react";
import { Header } from  "./Header"
import { Container, Row, Col, Card} from "react-bootstrap"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="header">KodeOp produces quality software for your company.</h1>
      
      <Container>
        <Row className="rowstyle">
          <Col lg={12} xl={6}>
          </Col>
          <Col lg={12} xl={6}>
          <h3 className="sectionheader">About Us</h3>
          <p className="sectiontext">We are a worker co-op based in Pomona, CA. We are talented individual programmers who met each other while they were studying at Cal Poly Pomona. Through the hardship of enduring Rodriguez's class, we developed a strong bond in order to survive. Although the struggle was intense and harsh, our skills as programmers have flourished and is at its peak performance. Coming together as a group of individuals, we plan to use our talents and skills to make a impression on the coding world.</p>
          </Col>
        </Row>
        <Row className="rowstyle">
          <Col lg={12} xl={6}>
          <h3 className="sectionheader">Our Mission</h3>
          <p className="sectiontext">Billions upon billions of brilliant syntheses a still more glorious dawn awaits cosmic ocean network of wormholes citizens of distant epochs. Birth gathered by gravity brain is the seed of intelligence kindling the energy hidden in matter as a patch of light made in the interiors of collapsing stars. Globular star cluster inconspicuous motes of rock and gas invent the universe another world intelligent beings inconspicuous motes of rock and gas and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
          </Col>
          <Col lg={12} xl={6}>
          </Col>
        </Row>
      </Container>

      <h3 className="sectionheader">Our Staff</h3>

      <div className="staffholder">
      <Container>
        <Row>
          <Col lg={12} xl={4}>
            <Card className="card" bg="dark" text="white">
              <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>David Allison</Card.Title>
                  <Card.Text>
                    CEO
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          <Col lg={12} xl={4}>
          <Card className="card" bg="dark" text="white">
            <Card.Img src="" />
              <Card.Body>
                <Card.Title>Rachel Scherer</Card.Title>
                <Card.Text>
                  Insert role here
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12} xl={4}>
          <Card className="card" bg="dark" text="white">
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Osiris</Card.Title>
                <Card.Text>
                  Insert role here
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xl={{span: 4, offset: 2}}>
            <Card className="card" bg="dark" text="white">
              <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Alex</Card.Title>
                  <Card.Text>
                    Insert role here
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12} xl={4}>
            <Card className="card" bg="dark" text="white">
              <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>June</Card.Title>
                  <Card.Text>
                    Insert role here
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>

      <h3 className="sectionheader">Deliverables</h3>
    </div>
  </div>


  );
}

export default App;