import Image from "next/image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Introduction {
  introduction: IntroductionData
}

interface IntroductionData {
  firstName:    string,
  lastName:     string,
  description:  string,
  imageUrl:     string
}

export default function Introduction({ introduction } : Introduction) {
  return (
    <section className="home__introduction d-flex align-items-center">
      <Image
        key={introduction.imageUrl} 
        className="introduction__banner-image" 
        src={introduction?.imageUrl} 
        alt="Introduction Banner Image" 
        fill
      />
      <Container>
        <Row >
          <Col lg={{ span: 6, offset: 6}}>
            <p className="display-4 fc-bright-gray text-uppercase">Hi, I&apos;m {introduction.firstName}</p>
            <p className="display-1 fc-halloween-orange text-uppercase fw-bold">{introduction.lastName}</p>
            <p className="fs-3 fc-bright-gray" dangerouslySetInnerHTML={{__html: introduction.description}}></p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}