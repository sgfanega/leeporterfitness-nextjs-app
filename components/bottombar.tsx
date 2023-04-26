import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Link from "next/link"

export default function BottomBar() {
  return (
    <Container fluid className="bottom-bar">
      <Container>
        <Row className="justify-content-between">
            <Col xs={12} md={5} className="text-center text-sm-start d-flex justify-content-center justify-content-md-start">
              <p>
                Copyrighted &copy; 2023 Lee Porter Fitness
              </p>
            </Col>
            <Col xs={12} md={2} className="text-center text-sm-start">
              <p>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </p>
            </Col>
            <Col xs={12} md={5} lg={4} className="text-center text-sm-start">
              <p>
                Developed by SWF Codes
              </p>
            </Col>
          </Row>
      </Container>
    </Container>
  )
}