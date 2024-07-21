import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { TypeAnimation } from "react-type-animation";
import { palette } from "@/components/common";

function Hero() {
  return (
    <Container>
      <Row>
        <Col className="align-self-center text-end">
          <h1 style={{ color: palette.text }}>Marco Acea</h1>
        </Col>
        <Col className="align-self-center text-start">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "",
              1500, // Waits 1.5s
              "Developer",
              1500,
              "Designer",
              1500,
              "Maker",
              1500,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              color: palette.accent.default,
              fontSize: "2em",
              display: "inline-block",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

function LandingPageGuide() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <ChevronCompactDown size={96} />
        </Col>
      </Row>
    </Container>
  );
}

export default function LandingFrame() {
  return (
    <div className="frame overlay-content">
      <Container fluid className="h-100">
        <Row className="align-items-center" style={{ height: "80vh" }}>
          <Col>
            <Hero />
          </Col>
        </Row>
        <Row style={{ height: "15vh" }}>
          <Col>
            <LandingPageGuide />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
