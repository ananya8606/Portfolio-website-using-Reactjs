import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",color:"white"}}>
            Hi Everyone, I am <span className="purple">Ananya Gupta </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />I am a final year student pursuing Btech in CSE at IIIT Ranchi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#f25ca2" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ananya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
