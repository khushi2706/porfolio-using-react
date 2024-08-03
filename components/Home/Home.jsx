// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../../Assets/home-main.svg";
import TypeEffect from "./Type";
import Particle from "../Particles";

function Home() {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-heder mt-5">
                <h1 className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>

                <h1 className="heading-name">
                  {" I'M "}
                  <strong className="main-name"> SUNRITA PATEL</strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  {" "}
                  <TypeEffect />
                </div>
              </Col>
              <Col md={5}>
                <img src={homeImage} style={{ maxHeight: "450px" }} />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Home;
