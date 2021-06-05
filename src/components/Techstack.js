import React from "react";
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
      <p className="tech-icons">
        <CgCPlusPlus />
        <DiJavascript1 />
        <DiNodejs />
        <DiReact />
        <DiMongodb />
        <DiGit />
        <SiFirebase />
        <DiBootstrap />
        <DiHtml5 />
        <DiCss3 />
      </p>
  );
}

export default Techstack;
