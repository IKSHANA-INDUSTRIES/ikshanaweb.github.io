import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="about" id="About">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About us</h2>
              <p>
                Ikshana is an innovative aerospace, healthcare and defense
                startup dedicated to driving advancements in technology and
                solutions for the modern world. <br></br> Our mission is to
                revolutionize the aerospace and defense industry through
                cutting-edge innovations that enhance security, efficiency, and
                sustainability.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Research-driven</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Sustainability</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Technical Excellence</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Ethical Practices</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
