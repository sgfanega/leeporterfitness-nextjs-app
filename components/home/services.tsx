import Image from "next/image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"

interface Services {
  services: ServicesConent[]
}

interface ServicesConent {
  id: number,
  title: string,
  description: string,
  imageUrl: string
}

export default function Services( { services } : Services) {
  return (
    <section className="home__services bg-bright-gray py-5">
      <Container>
        <h2 className="display-3 text-center fw-500 fc-dark-gunmetal pb-5">My Services</h2>
        <Row className="justify-content-center justify-content-xl-evenly">
          {services.map((service) => (
            <>
            <Col xs={10} md={6} lg={4} xl={3} key={service.id}>
              <div className="image-container">
              <Image
                className="image img-fluid rounded shadow-lg mb-5"
                src={service.imageUrl} 
                alt={service.description + " Picture"}
                fill
                />
              </div>
            </Col>
            <Col className="mb-5" xs={10} md={6} lg={5} xl={3}>
              <h3 className="fs-3 fc-dark-gunmetal">{service.title}</h3>
              <p className="fs-5 fc-dark-gunmetal">{service.description}</p>
              <Link className="btn btn-halloween-orange" href="/services">Learn More!</Link>
            </Col>
            </>
          ))}
        </Row>
      </Container>
    </section>
  )
}0