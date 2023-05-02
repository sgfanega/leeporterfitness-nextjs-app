import Image from "next/image"
import { Container, Col, Row } from 'react-bootstrap'
import PageBanner from '../../components/page-banner'
import data from '../../json/data.json'
import Link from "next/link"

export default function AboutMe() {
  const aboutMeData = data?.data[0].pageContent.aboutMe

  return (
    <>
    <PageBanner title={aboutMeData.title} bannerImageUrl={aboutMeData.bannerImageUrl}/> 
    <section className="about-me__main bg-arsenic py-5">
      <Container className="about-me__container">
        <Row>
          <Col xs={12} md={5}>
            <div className="rounded-3 shadow bg-dark-gunmental px-4 py-3 mb-2">
              <h2 className="text-center fc-halloween-orange fw-400">Meet Your Trainer</h2>
              <div className="profile-picture-container py-2">
                <Image 
                  className="profile-picture-image rounded-3" 
                  src={aboutMeData.picture} 
                  alt="Profile Picture"
                  fill={true}
                  sizes="(max-width: 1920px) 100vw"
                  quality={50}
                />
              </div>
              <p className="fs-4 text-center fc-bright-gray mb-0">
                {aboutMeData.name} - <span className="text-decoration-underline fc-halloween-orange">{aboutMeData.certification}</span>
              </p>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <div className="rounded-3 shadow bg-dark-gunmental px-4 py-3 mb-2 mb-md-3 mb-lg-5">
              <p className="fs-5 fc-bright-gray fw-500">Hi, I'm Lee Porter. I am the founder and sole trainer of Lee Porter Fitness.</p>
              <p className="fs-6 fc-bright-gray">Fitness has been a passion of mine since I was in High School. I went to college to obtain a 
                degree in Physical Therapy, but changed to Exercise Science because I wanted to learn all aspects of fitness: Physical Appearance,
                Mental Health, Physical Health, and Injury Rehab/Prevention.
              </p>
            </div>
            <div className="rounded-3 shadow bg-dark-gunmental px-4 py-3 mb-2 mb-md-3 mb-lg-5">
              <p className="fs-5 fc-bright-gray fw-500">Additional Trivia:</p>
              <p className="fs-6 fc-bright-gray">I lived in India and Thailand from ages 10-18, and loved everything about it. I am married to a 
                beautiful man, and own two mischievous cats. I love crafting mehndi tattoos, and obsessed with boba.
              </p>
            </div>
            <div className="rounded-3 shadow bg-dark-gunmental px-4 py-3 mb-2 mb-md-3 mb-lg-5">
              <p className="fs-5 fc-bright-gray fw-500">Mission Statement:</p>
              <p className="fs-6 fc-bright-gray">To teach people how to workout according to their goals, and be able to do it on their own. To
              give the tools for success long term while learning to love the process and make progress!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}