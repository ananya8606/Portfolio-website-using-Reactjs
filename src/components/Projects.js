import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
function Projects() {
  return (
    <Container fluid className="project-section">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p classname="fond">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Amazon clone using React"
              description="Clone of Popular e-commerce website Amazon build with Reactjs, Material-UI, and Firebase."
              link="https://github.com/ananya8606/Amazon-clone-using-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-commerce website using React"
              description="E-commerce website built using Reactjs and Material UI.It filters through items from own API, adds them to the cart, and we can also see similar items when we select a certain item."
              link="https://github.com/ananya8606/E-commerce-website-using-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Music player using Html and CSS"
              description="A simple music player template built using html and css."
              link="https://github.com/ananya8606/Music-Player-using-Html-Css"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false} 
              title="Shopping Cart using React"
              description="A fully functional shopping cart developed using ReactJS.
                This is a basic shopping cart which takes in a sample data in JSON format, displays it and enables the user to add items to the cart."
              link="https://github.com/ananya8606/Shopping-Cart-using-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Portfolio website using Reactjs"
              description="Simple portfolio 
             website built using Html,Css,Javascipt,Material UI and  Bootstrap."
             link="https://github.com/ananya8606/Portfolio-website-using-Reactjs"
            />
          </Col>
          </Row>
      </Container>
  );
}

export default Projects;
