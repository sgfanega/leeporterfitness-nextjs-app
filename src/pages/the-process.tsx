import Image from "next/image"
import Link from "next/link"
import { Container, Col, Row } from 'react-bootstrap'
import PageBanner from '../../components/page-banner'
import DOMPurify from 'isomorphic-dompurify'
import data from '../../json/data.json'

interface TheProcess {
  theProcessContent: {
    title:              string,
    bannerImageUrl:     string,
    content:            string,
    profilePictureUrl:  string,
    name:               string,
    titleCertification: string
  }
}

export default function TheProcess({ theProcessContent } : TheProcess) {
  const sanitizedContent = DOMPurify.sanitize(theProcessContent.content)
  const imagePath = '/images/'

  return (
  <>
    <PageBanner title={theProcessContent.title} bannerImageUrl={imagePath + theProcessContent.bannerImageUrl}/>
    <section className="the-process__main d-flex justify-content-center align-items-center">
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col className="d-flex flex-column" lg={8}>
            <div className="bg-dark-gunmetal shadow-lg mb-5 rounded-5 px-4 py-3">
              <p className="fs-3 fc-halloween-orange fw-500">You did it!</p>
              <div className="fs-6 fc-bright-gray" dangerouslySetInnerHTML={{__html: sanitizedContent}}>
              </div>
              <Link className="btn btn-halloween-orange me-auto mt-3" href="/services" >Next</Link>
            </div>
          </Col>
          <Col lg={4}>
            <div className="px-4 py-3">
              <h2 className="text-center fc-halloween-orange">Meet Your Trainer</h2>
              <div className="profile-picture-container py-2">
                <Image 
                  className="profile-picture-image rounded-circle" 
                  src={imagePath + theProcessContent.profilePictureUrl} 
                  alt="Profile Picture"
                  quality={50}
                  fill={true}
                  sizes="(max-width: 1920px) 100vw"
                />
              </div>
              <p className="fs-4 text-center fc-bright-gray mb-0">
                {theProcessContent.name} - <span className=" fc-halloween-orange">{theProcessContent.titleCertification}</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      theProcessContent : data.data[0].pageContent.theProcess,
    }
  }
}