import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
        <Row style={{ justifyContent: "center", padding: "2px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "5px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",color:"#f25ca2"}}>
              Know Who <strong>I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
          </Col>
        </Row>
        <Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        </Row>
            <Row style={{ paddingtop:"10px"}}>
            <Github />
            </Row>
<Row>
</Row>
    </Container>
  );
}

export default About;
