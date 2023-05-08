import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"

interface WhyExercise {
  whyExercise: WhyExerciseContent[]
}

interface WhyExerciseContent {
  id:     number
  reason: string  
}

export default function WhyExercise({ whyExercise } : WhyExercise) {
  return (
    <section className="home__why-exercise">
      <Container className="py-5">
        <Row className="justify-content-evenly">
          <Col className="text-center text-md-start" xs={6} lg={5} xl={4}>
            <h2 className="display-3 fc-halloween-orange fw-500">Why Exercise?</h2>
            <hr/>
          </Col>
          <Col xs={6} lg={5} xl={4} className="d-flex justify-content-center align-items-center text-center text-md-end">
            <Carousel controls={false} indicators={false}>
              {whyExercise.map((reasons) => (
                <Carousel.Item interval={3000} key={reasons.id}>
                    <p className="fs-3 fc-bright-gray mb-0">{reasons.reason}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}