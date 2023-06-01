import Image from "next/image"
import { Container, Col, Row } from 'react-bootstrap'
import PageBanner from '../../components/page-banner'
import DOMPurify from 'isomorphic-dompurify'
import data from '../../json/data.json'

interface AboutMe {
  aboutMeContent: {
    title:             string,
    bannerImageUrl:    string,
    content:           string,
    picture:           string,
    name:              string,
    certification:     string,
    introduction:      string,
    trivia:            string,
    missionStatement:  string
  }
}

export default function AboutMe({ aboutMeContent } : AboutMe ) {
  const sanitizedContent = DOMPurify.sanitize(aboutMeContent.content)
  const imagePath = '/images/'

  return (
    <>
    <PageBanner title={aboutMeContent.title} bannerImageUrl={imagePath + aboutMeContent.bannerImageUrl}/>
    <section className="about-me__main d-flex align-items-center bg-arsenic">
      <Container>
        <Row className="justify-content-center justify-content-lg-between align-items-center py-5">
          <Col xs={12} md={6} lg={4} xl={3} className="pb-5 pb-lg-0">
            <div className="about-me__profile-picture-container">
              <Image
                className="about-me__profile-picture shadow"
                style={{objectFit: 'contain'}}
                src={imagePath + aboutMeContent.picture} 
                alt="Profile Picture"
                fill
                sizes="(max-width: 768px) 100vw"
                quality={50}
                priority
              />
            </div>
            <p className="fs-3 fc-bright-gray text-center fw-500 mb-0">Lee Porter - <span className="fc-halloween-orange">ACSM-CPT</span></p>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="about-me__content bg-dark-gunmetal fs-6 fc-bright-gray rounded-5 shadow px-4 pt-4 pb-2" dangerouslySetInnerHTML={{__html: sanitizedContent}}/>
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
      aboutMeContent : data.data[0].pageContent.aboutMe,
    }
  }
}