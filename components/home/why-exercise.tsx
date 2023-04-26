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
          <Col xs={4}>

            <h2 className="display-3 fc-halloween-orange fw-500">Why Exercise?</h2>
            <hr/>
          </Col>
          <Col xs={4} className="m-auto">
            <Carousel controls={false} indicators={false}>
              {whyExercise.map((reasons) => (
                <Carousel.Item interval={3000}>
                    <p className="fs-3 fc-bright-gray mb-0 text-end">{reasons.reason}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}