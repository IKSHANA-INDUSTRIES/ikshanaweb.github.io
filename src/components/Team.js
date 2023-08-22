import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Team = () => {
  const team = [
    {
      title: "CEO & COFOUNDER",
      description: "TONY STARK",
      imgUrl: projImg3,
    },
    {
      title: "CTO & DIRECTOR",
      description: "GAURAV HALDAR",
      imgUrl: projImg3,
    },
    {
      title: "COO",
      description: "GAURESH TALAWADEKAR",
      imgUrl: projImg3,
    },
    {
      title: "LEAD R&D",
      description: "AADITI KADAM",
      imgUrl: projImg3,
    },
    {
      title: "LEAD HARDWARE ENGINEER",
      description: "SANCHIT PAWAR",
      imgUrl: projImg3,
    },
    {
      title: "LEAD SOFTWARE ENGINEER",
      description: "SHARVIL PALVEKAR",
      imgUrl: projImg3,
    },
  ];
return (
  <section className="team" id="Team">
    <TrackVisibility>
      {({ isVisible }) => (
        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <h2>Our Team</h2>
          <p>
            "Transforming possibilities in aerospace and defense through
            advanced hybrid UAV solutions."
          </p>
          <Tab.Container id="projects-tabs" defaultActiveKey="forst">
            <Nav
              variant="pills"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey="forst">Our Team</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              id="slideInUp"
              className={
                isVisible ? "animate__animated animate__slideInUp" : ""
              }
            >
              <Tab.Pane eventKey="forst">
                <Row>
                  {team.map((Team, index) => {
                    return <ProjectCard key={index} {...Team} />;
                  })}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      )}
    </TrackVisibility>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
);
};