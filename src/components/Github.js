import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row} from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "white",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <Row>
      <h1 className="project-headings">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ananya8606"
        blockSize={80}
        blockMargin={10}
        theme={colourTheme}
        fontSize={25}
        paddingbottom={20}
      />
      </Row>
  );
}

export default Github;
