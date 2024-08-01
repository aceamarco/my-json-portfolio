import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// import { useEffect } from "react";

import { SocialsButton, CategoryPillContainer } from "@/components/Common";
import tepig_img from "@/assets/images/498.png";

import "@/styles/Projects.css";

// const importImages = async (paths) => {
//   await Promise.all(
//     paths.map(async (path) => {
//       try {
//         await import(`${path}`);
//       } catch (error) {
//         console.error(`Error importing ${path}:`, error);
//       }
//     })
//   );
// };

function ProjectCard({
  image_paths = [tepig_img], // Default image path
  tags = ["python"], // Default tag
  name = "Pokemon Air Force 1’s", // Default project name
  date_range = "April 2024 - Present", // Default date range
  description = "Built with Python, uses Selenium to navigate the Nike website and build Air Force One's inspired by the color palette of any pokemon!", // Default description
  social_media_links = [
    { type: "github", url: "https://github.com/aceamarco" },
  ], // Default social media link
}) {
  // useEffect(() => {
  //   // Dynamically import images on component mount
  //   const loadImages = async () => {
  //     // await importImages(image_paths);
  //   };

  //   loadImages();
  // }, [image_paths]);

  return (
    <Card
      text="light"
      style={{ width: "18rem", background: "rgba(0, 0, 0, 0.12)" }}
    >
      {image_paths.length > 1 ? (
        <Carousel>
          {image_paths.map((path, index) => (
            <Carousel.Item key={index}>
              <img
                src={`./${path}`}
                className="d-block w-100 project-card-img"
                alt={`slide-${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <img
          src={image_paths[0]}
          className="d-block w-100 project-card-img"
          alt="single-image"
        />
      )}
      <Card.Body>
        <CategoryPillContainer tags={tags} />
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{date_range}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <div>
          {social_media_links.map(({ type, url }, index) => (
            <SocialsButton key={index} variant={type} link={url} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

function ProjectsDashboard({ portfolio }) {
  return (
    <Container
      className="projects-container"
      fluid
      style={{
        width: "80%",
        height: "100vh",
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
    >
      <Row className="align-items-center h-100">
        {portfolio.map((project, index) => (
          <Col key={index}>
            <ProjectCard
              image_paths={project.imagePaths}
              tags={project.tags}
              name={project.title}
              date_range={project.status}
              description={project.description}
              social_media_links={
                project.links
                  ? Object.entries(project.links).map(([type, url]) => ({
                      type,
                      url,
                    }))
                  : []
              }
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default function ProjectsFrame({ projects = null }) {
  return (
    <>
      {projects ? (
        <ProjectsDashboard portfolio={projects} />
      ) : (
        <>
          <Col md={6}>
            <ProjectCard />
          </Col>
          <Col md={6}>
            <ProjectCard />
          </Col>
        </>
      )}
    </>
  );
}
