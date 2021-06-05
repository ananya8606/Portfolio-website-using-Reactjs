import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
      <p className="tech-icons">
       <SiLinux /><span>"   "</span>
       <SiVisualstudiocode /><span>"   "</span>
       <SiJupyter />
    </p>
  );
}

export default Toolstack;
