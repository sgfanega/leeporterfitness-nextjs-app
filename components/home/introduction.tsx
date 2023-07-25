import Image from "next/image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DOMPurify from 'isomorphic-dompurify'

interface Introduction {
  introduction: IntroductionContent
}

interface IntroductionContent {
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
      <Container className="py-lg-5">
        <Row className="justify-content-center py-5" style={{position:'relative'}}>
          <Col className="d-none d-lg-block" xs={{ span: 10 }} lg={{ span: 6 }}>
            <Image
              className="introduction__image" 
              src={imagePath + introduction.imageUrl} 
              alt="Introduction Banner Image" 
              fill
            /> 
          </Col>
           <Col className="py-3" xs={{ span: 11 }} lg={{ span: 6, offset: 6}} style={{position: 'relative'}}>
            <Image
                className="introduction__image d-block d-lg-none" 
                src={imagePath + introduction.imageUrl} 
                alt="Introduction Banner Image" 
                fill
              /> 
            <p className="display-5 fc-bright-gray text-uppercase mb-0">Hi, I&apos;m {introduction?.firstName}</p>
            <p className="display-1 fc-halloween-orange text-uppercase fw-bold">{introduction?.lastName}</p>
            <p className="fs-3 fc-bright-gray mb-0" dangerouslySetInnerHTML={{__html: sanitizedContent}}></p>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Row className="justify-content-center py-5 g-0 g-md-4" style={{position:'relative'}} >
          <Image
            className="introduction__image" 
            src={imagePath + introduction.imageUrl} 
            alt="Introduction Banner Image" 
            fill
          />          
          <Col xs={{ span: 10 }} lg={{ span: 6, offset: 6}} >
            <p className="display-5 fc-bright-gray text-uppercase">Hi, I&apos;m {introduction?.firstName}</p>
            <p className="display-1 fc-halloween-orange text-uppercase fw-bold">{introduction?.lastName}</p>
            <p className="fs-3 fc-bright-gray" dangerouslySetInnerHTML={{__html: sanitizedContent}}></p>
          </Col>
        </Row>
      </Container> */}
    </section>
  )
}