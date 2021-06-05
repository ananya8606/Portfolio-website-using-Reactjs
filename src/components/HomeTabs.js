import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container} from "react-bootstrap";
import "../Tabs.css";
import Resumecontent from "./ResumeContent";
import Projects from './Projects'
import About from './About'
function HomeTabs() 
{ 
  return <div class="fluid-container"><Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects</Tab>
      <Tab >Experience/Participation</Tab>
      <Tab>Education/Achievements</Tab>
    </TabList>
    <TabPanel classname="b">
      <About />
    </TabPanel>
<TabPanel classname="b1">
      <Projects />
    </TabPanel>
<TabPanel classname="b2">
<Container fluid className="rank-section">
<h3 className="resume-title" style={{color:"#f25ca2"}}>Technical skills:</h3>
            <Resumecontent
              title="Strongest Areas"
              content={["Front-end Development ,Good knowledge of core subjects like Operating System, Computer Architecture and Organization, Computer Networks, Database Management System, Data Structure and Algorithms."]}
            />
            <Resumecontent
              title="Languages:"
              content={["Java(Basic),C,C++(Intermediate),Javascript(Basic),HTML,CSS,XML"]}
            />
 <Resumecontent
              title="Tools and Frameworks:"
              content={["Bootstrap,React.js,      Git,Node.js"]}
            />
 <Resumecontent
              title="Database:"
              content={["Firebase,MongoDB"]}
            />
            </Container>
<Container fluid className="rank-section">
<h3 className="resume-title" style={{color:"#f25ca2"}}>Soft Skills:</h3>
            <Resumecontent
              title="Languages:"
              content={[
               "Hindi,English."
              ]}
            />
    </Container>
<Container fluid className="rank-section">
<h3 className="resume-title" style={{color:"#f25ca2"}}>Positions of Responsibility:</h3>
            <Resumecontent
              title="Positon|Member:"
              content={[
"Art club,Technical club,singing club, fashion club of IIIT Ranchi."
              ]}
            />
    </Container>
    </TabPanel>
<TabPanel classname="b3">
<Container fluid className="education-section">
<h3 className="resume-title" style={{color:"#f25ca2"}}>Education</h3>
            <Resumecontent
              title="BTECH IN COMPUTER SCIENCE AND ENGINEERING [IIIT Ranchi] "
              date="2018 - Present"
              content={[`CGPA:8.62 (Till 5th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [ISC board] from Mother Teresa Mission Higher Secondary School,Kanpur"
              date="2015 - 2017"
              content={["Percentage:96.25%"]}
            />
            <Resumecontent
              title="10TH BOARD [ICSE board]
              from Mother Teresa Mission Higher Secondary School"
              date="2005 - 2015"
              content={["Percentage:94%"]}
            />
            </Container>
    </TabPanel>
  </Tabs></div>

}

export default HomeTabs;
