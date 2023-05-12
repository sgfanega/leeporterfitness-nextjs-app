import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

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
  const imagePath = '/images/'
  return (
    <section className="home__services bg-bright-gray py-5">
      <Container>
        <h2 className="display-3 text-center fw-500 fc-dark-gunmetal pb-5">My Services</h2>
        <Row className="justify-content-center justify-content-xl-evenly" >
          {services.map((service) => (
            <Fragment key={service.id}>
              <Col className="mb-3 mb-sm-5 mb-xl-0" xs={10} md={6} lg={4} xl={3}>
                <div className="image-container">
                  <Image
                    className="image img-fluid rounded-3 shadow-lg"
                    src={imagePath + service?.imageUrl} 
                    alt={service?.description + " Picture"}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    />
                </div>
              </Col>
              <Col className="mb-5" xs={10} md={6} lg={5} xl={3}>
                <h3 className="fs-3 fc-dark-gunmetal">{service?.title}</h3>
                <p className="fs-5 fc-dark-gunmetal">{service?.description}</p>
                <Link className="btn btn-halloween-orange" href="/services">Learn More!</Link>
              </Col>
            </Fragment>
          ))}
          </Row>
      </Container>
    </section>
  )
}0