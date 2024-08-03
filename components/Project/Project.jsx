import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Particle from "../Particles";

function Projects() {
  const ProjectList = [
    {
      imgPath: leaf,
      isBlog: false,
      title: "Leaf-Detection",
      description:
        "A machine learning model that detects and classifies leaves in images using TensorFlow and Keras. It's trained on a custom dataset of 100,000 images of leaves and their respective species.",
      ghLink: "https://github.com/khushi2706/Leaf-Detection",
      demoLink: "https://blog-app-using-mern-stack-beta.vercel.app/",
    },
    {
      imgPath: chatify,
      isBlog: false,
      title: "Blog website",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/khushi2706/Blog-App-using-MERN-stack",
      demoLink: "https://blog-app-using-mern-stack-beta.vercel.app/",
    },
    {
      imgPath: bitsOfCode,
      isBlog: false,
      title: "Bits-0f-C0de",
      description:
        "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      ghLink: "https://github.com/khushi2706/Bits-0f-C0de",
      demoLink: "https://blogs.soumya-jit.tech/",
    },
    {
      imgPath: editor,
      isBlog: false,
      title: "Editor.io",
      description:
        "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/khushi2706/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
    },
    {
      imgPath: emotion,
      isBlog: false,
      title: "Editor.io",
      description:
        "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/khushi2706/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
    },
    {
      imgPath: suicide,
      isBlog: false,
      title: "Editor.io",
      description:
        "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/khushi2706/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
    },
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectList.map((project) => (
            <>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
