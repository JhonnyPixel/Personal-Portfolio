import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import webProjImg1 from "../assets/img/whatsappClone.jpeg";
import webProjImg2 from "../assets/img/datingApp.jpeg";
import gameProjImg1 from "../assets/img/rumster.png";
import embedProjImg1 from "../assets/img/irrigationSystemESP32.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import ratingo from "../assets/img/ratingo-screens.png"
import crazypad from "../assets/img/launchpad_view.png"
import alto from "../assets/img/alto.jpeg"
import rapmonkey from "../assets/img/rapmonkey.png"
import buzz from "../assets/img/iconBZZ.png"

export const Projects = () => {


  const appProjects = [
    {
      title: "Ratingo",
      description: "Modern self-help app designed to support users in reducing porn addiction",
      imgUrl: ratingo,
    },
    {
      title: "Crazypad",
      description: "dynamic launchpad app for iPhone that lets users create, mix, and perform music with just a few taps.",
      imgUrl: crazypad,
    },
    {
      title: "Alto",
      description: "a sleek and minimalist app that lets you measure altitude with precision — entirely offline — using only your iPhone’s built-in barometer.",
      imgUrl: alto,
    },
    {
      title: "RapMonkey",
      description: "an interactive app designed to help users learn and practice freestyle rap in a fun and intuitive way. ",
      imgUrl: rapmonkey,
    },
    {
      title: "Buzz",
      description: " a safety-focused Apple Watch app designed to help prevent drowsiness while driving.",
      imgUrl: buzz,
    },
    
  ];

  const webProjects = [
    {
      title: "Chat App",
      description: "Design & Development in React.js",
      imgUrl: webProjImg1,
    },
    {
      title: "Dating App",
      description: "Design & Development in React.js",
      imgUrl: webProjImg2,
    }
  ];

  const gameProjects = [
    {
      title: "Rumster",
      description: "Design & Development in Unity Engine",
      imgUrl: gameProjImg1,
    }
    
  ];

  const embedProjects = [
    {
      title: "Remote Irrigation System",
      description: "ESP32 Development",
      imgUrl: embedProjImg1,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of the projects I developed to test the knowledge learned. This section continues to update as new projects and ideas arise every day 💡.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">APP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">WEB</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GAMES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">DEVICES</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                          {
                            appProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            gameProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="four">
                        <Row>
                          {
                            embedProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
