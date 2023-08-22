import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Products = () => {
  const products = [
    {
      title: "VYOM",
      description: "HYBRID VERTICAL TAKEOFF & LANDING",
      imgUrl: projImg3,
    },
    {
      title: "VYOM",
      description: "LONG ENDURANCE USING HYBRID POWER SOURCE",
      imgUrl: projImg3,
    },
    {
      title: "VYOM",
      description: "MODULAR PAYLOAD SYSTEM FOR Delivery and Logistics",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="products" id="product">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Reasearch & Development</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">SPACE</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="section">UAV</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">ENERGY</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          Ikshana is a pioneering startup dedicated to revolutionizing space technology by focusing on advanced solutions for space debris. Leveraging cutting-edge research and innovation, Ikshana is committed to addressing the critical issue of orbital debris, employing ingenious strategies to ensure the long-term sustainability of space exploration and satellite operations.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          "Transforming possibilities with advanced hybrid UAV solutions."
                        </p>
                        <Row>
                          {products.map((product, index) => {
                            return <ProjectCard key={index} {...product} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                         Embracing the urgency of a greener future, sustainable energy startup pursues innovative pathways to harness renewable resources. Through groundbreaking research and development, this company aims to create accessible and efficient solutions that transition us away from fossil fuels, fostering a cleaner, more sustainable energy landscape for generations to come.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
