import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import microservices from "../../Assets/Projects/Microservices.png";
import emotion from "../../Assets/Projects/emotion.png";
import techBlog from "../../Assets/Projects/Tech Blog.png";
import foodOrdering from "../../Assets/Projects/foodOrdering.png";
import ochi from "../../Assets/Projects/Ochi Design.png";
import smart from "../../Assets/Projects/SmartContactManager.png";

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
              imgPath={foodOrdering}
              isBlog={false}
              title="Food Ordering Website"
              description="My Food Ordering Website allows users to browse restaurants, customize and order meals, with secure payment options and real-time order tracking. For admins, it provides tools to manage menus, orders, and customer data efficiently. This platform ensures a seamless experience for both users and administrators."
              ghLink="https://github.com/AyushMer44/foodOrdering"
              demoLink="https://ayush-foodordering.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart}
              isBlog={false}
              title="Smart Contact Manager"
              description="SMART CONTACT MANAGER is a web-based platform where users can securely store, manage, and access their contacts online. It offers an efficient solution for organizing contacts with easy web accessibility."
              ghLink="https://github.com/AyushMer44/SmartContactManager"
              demoLink="smartcontactmanager-production-0d44.up.railway.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techBlog}
              isBlog={false}
              title="TECH BLOG"
              description="Tech Blog is a platform for sharing and exploring the latest updates, tutorials, and insights on technology. It allows users to publish, read, and engage with tech-focused content in an interactive and informative environment."
              ghLink="https://github.com/AyushMer44/TechBlog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microservices}
              isBlog={false}
              title="MICROSERVICES"
              description="I made microservices which is an architectural style where applications are built as a collection of small, independent services. Each service runs in its own process, communicates via APIs, and can be developed, deployed, and scaled individually, providing flexibility and improved scalability for large applications."
              ghLink="https://github.com/AyushMer44/Microservices"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ochi}
              isBlog={false}
              title="OCHI DESIGN"
              description="Ochi Design is a human-centered design approach focused on creating accessible and intuitive user experiences. It emphasizes simplicity, clarity, and user empowerment by minimizing cognitive load and enhancing usability."
              ghLink="https://github.com/AyushMer44/Ochi-Design"
              demoLink="https://ochi-design-orpin.vercel.app/"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
