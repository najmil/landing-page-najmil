import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import p3k from "../assets/img/p3k.png";
import hrga from "../assets/img/hrga.png";
import ipp from "../assets/img/ipp.png";
import todolist from "../assets/img/to-do-list2.png";
import catatanUang from "../assets/img/catatan-keuangan.png";
import calculator from "../assets/img/calculator.png";
import formRegist from "../assets/img/form-regist.png";
import crudCi from "../assets/img/crudci.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "P3K Checker",
      imgUrl: p3k,
    },
    {
      title: "Business Trip Authorization Form",
      imgUrl: hrga,
    },
    {
      title: "Suplies Requisition Form",
      imgUrl: hrga,
    },
    {
      title: "Individual Performance Planning and Performance Appraisal",
      imgUrl: ipp,
    },
    {
      title: "To Do List",
      imgUrl: todolist,
      link: 'https://github.com/najmil/to-do-list',
    },
    {
      title: "Laporan Keuangan",
      imgUrl: catatanUang,
    },
    {
      title: "Calculator",
      imgUrl: calculator,
    },
    {
      title: "Registration Form",
      imgUrl: formRegist,
    },
    {
      title: "CRUD with Codeigniter",
      imgUrl: crudCi,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I will show you several of the projects that i've made before.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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