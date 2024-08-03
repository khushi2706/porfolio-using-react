import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import AboutParagraph from "./AboutParagraph";
import Techstack from "./TechStack";
import Github from "./Github";
function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">{"I'M"}</strong>
            </h1>
            <AboutParagraph />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
