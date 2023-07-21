import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Loanapproval from "../../Assets/Projects/Loanapproval.jpg";
import maskdetection from "../../Assets/Projects/maskdetection.jpg";

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
              imgPath={maskdetection}
              isBlog={false}
              title="Face Mask Detection"
              description="Here we introduce a mask face detection model that is based on computer vision and deep learning. The proposed model can be integrated with surveillance cameras to detection of people who are wearing mask and Not."
              ghLink="https://github.com/VuthunooriRahul/face-mask-detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Loanapproval}
              isBlog={false}
              title="Loan Approval prediction"
              description="The Loan prediction analysis is a project aimed at developing a machine learning model that predicts the approval status of loan applications. The project aims to help financial institutions automate and streamline the loan approval process and also help in analysing the type of people getting loans"
              ghLink="https://github.com/VuthunooriRahul/Customer-loan-prediction-analysis-using-ml"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
