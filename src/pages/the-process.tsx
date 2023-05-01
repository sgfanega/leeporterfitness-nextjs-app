import Image from "next/image"
import { Container, Col, Row } from 'react-bootstrap'
import PageBanner from '../../components/page-banner'
import data from '../../json/data.json'
import Link from "next/link"

export default function TheProcess() {
  const theProcessData = data?.data[0].pageContent.theProcess

  return (
  <>
    <PageBanner title={theProcessData.title} bannerImageUrl={theProcessData.bannerImageUrl}/>
    <section className="the-process__main d-flex justify-content-center align-items-center">
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col className="d-flex flex-column" lg={8}>
            <div className="bg-dark-gunmental shadow-lg p-3 mb-5 rounded px-4 py-3">
              <p className="fs-1 fc-halloween-orange fw-500">You did it!</p>
              <div className="fs-5 fc-bright-gray" dangerouslySetInnerHTML={{__html:theProcessData.content}}>
              </div>
              <Link className="btn btn-halloween-orange me-auto mt-3" href="/services" >Next</Link>
            </div>
          </Col>
          <Col lg={4}>
            <div className="rounded-3 shadow bg-dark-gunmental px-4 py-3">
              <h2 className="text-center fc-halloween-orange">Meet Your Trainer</h2>
              <div className="profile-picture-container py-2">
                <Image 
                  className="profile-picture-image rounded-3" 
                  src={theProcessData.profilePictureUrl} 
                  alt="Profile Picture"
                  quality={50}
                  fill={true}
                  sizes="(max-width: 1920px) 100vw"
                />
              </div>
              <p className="fs-4 text-center fc-bright-gray mb-0">
                {theProcessData.name} - <span className="text-decoration-underline fc-halloween-orange">{theProcessData.titleCertification}</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
  )
}