import Image from "next/image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DOMPurify from 'isomorphic-dompurify'

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
  const sanitizedContent = DOMPurify.sanitize(introduction.description)
  const imagePath = '/images/'
  return (
    <section className="home__introduction d-flex align-items-center">
      <Image
        className="introduction__banner-image" 
        src={imagePath + introduction.imageUrl} 
        alt="Introduction Banner Image" 
        fill
      />
      <Container>
        <Row >
          <Col lg={{ span: 6, offset: 6}}>
            <p className="display-4 fc-bright-gray text-uppercase">Hi, I&apos;m {introduction?.firstName}</p>
            <p className="display-1 fc-halloween-orange text-uppercase fw-bold">{introduction?.lastName}</p>
            <p className="fs-3 fc-bright-gray" dangerouslySetInnerHTML={{__html: sanitizedContent}}></p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}