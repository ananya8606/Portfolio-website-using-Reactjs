import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
<Col xs={3} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
    </Row>
  );
}

export default Techstack;
