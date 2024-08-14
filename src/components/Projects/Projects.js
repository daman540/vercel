import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import minimax from "../../Assets/Projects/Connect4_MINMAX_GUI.png";
import hindsight from "../../Assets/Projects/hindsight.png";
import text_sentiment from "../../Assets/Projects/Text_Sentiment_Graph.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hindsight}
              date="Spring 2024"
              isBlog={false}
              title="Hindsight Web App"
              description="{Flask App (Python, JavaScript, HTML, CSS, SQL)} - Developed a finance learning platform with user accounts for tracking personalized content.
              Focused on delivering actional insights to aid informed financial decisions."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text_sentiment}
              date="Spring 2024"
              isBlog={false}
              hasFile={true}
              fileLink={null}
              title="Text Sentiment Analysis ML"
              description=""
              ghLink="https://github.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minimax}
              date="Spring 2023"
              isBlog={false}
              hasFile={true}
              fileLink={null}
              title="Connect 4 AI"
              description="{Python} - Developed a Connect 4 AI using MiniMax algorithm with alpha-beta pruning for Computer vs. Computer gameplay.
              Optimized evaluation functions and board state checks for decision making. Results displayed in GUI and documented in technical report."
              ghLink="https://github.com/daman540"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={null}
              isBlog={false}
              title="Template"
              description="Template"
              ghLink=""
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
