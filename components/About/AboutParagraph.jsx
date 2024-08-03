import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutParagraph() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sunita Patel </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently employed as a software developer at XYZ Comapny.
            <br />
            I have completed Integrated B.Tech in Computing at PQR college
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creative Stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutParagraph;
