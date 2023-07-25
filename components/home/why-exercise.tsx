import { Container, Row, Col, Carousel } from "react-bootstrap"

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
      <Container className="py-4">
        <Row className="justify-content-between">
          <Col className="text-center text-md-start" xs={6} lg={5} xl={4}>
            <h2 className="display-3 fc-halloween-orange fw-500">Why Exercise?</h2>
          </Col>
          <Col xs={6} lg={5} xl={4} className="d-flex justify-content-center align-items-center text-center">
            <Carousel controls={false} indicators={false}>
              {whyExercise.map((reasons) => (
                <Carousel.Item interval={2000} key={reasons.id}>
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