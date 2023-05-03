import Image from "next/image"
import { Container, Col, Row } from 'react-bootstrap'
import PageBanner from '../../components/page-banner'
import data from '../../json/data.json'

export default function AboutMe() {
  const aboutMeData = data?.data[0].pageContent.aboutMe

  return (
    <>
    <PageBanner title={aboutMeData.title} bannerImageUrl={aboutMeData.bannerImageUrl}/>
    <section className="about-me__main d-flex align-items-center bg-arsenic py-5">
      <Container>
        <Row className="justify-content-center justify-content-lg-between align-items-center ">
          <Col xs={12} md={6} lg={4} xl={3} className="pb-5 pb-lg-0">
            <div className="about-me__profile-picture-container">
              <Image
                className="about-me__profile-picture shadow"
                style={{objectFit: 'contain'}}
                src={aboutMeData.picture} 
                alt="Profile Picture"
                fill
                sizes="100vw"
                quality={50}
                priority
              />
            </div>
            <p className="fs-3 fc-bright-gray text-center fw-500">Lee Porter - <span className="fc-halloween-orange">ACSM-CPT</span></p>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="about-me__content bg-dark-gunmetal fc-bright-gray rounded-5 shadow px-4 pt-4 pb-2">
              <p className="fs-6">Hi, I’m Lee Porter, a <span className="fc-halloween-orange">Certified Personal
                Trainer</span>. I am the founder and creator of Lee Porter Fitness, a personal training company
                that is excited to help you achieve your fitness goals.</p>
              <p className="fs-6">Fitness has always been a passion of mine since I was doing sports in High School. 
                I went to college to obtain a degree in Physical Therapy, but instead changed to Exercise Science
                for my love to help others in becoming the best version of themselves. I wanted to learn all aspects
                of fitness: Physical Appearance, Mental Health, Physical Health, and Injury Rehab/Prevention.</p>
              <p className="fs-6">I have lived in India, Thailand, the United States, and now I’m back in Thailand.
                I am married to a beautiful man, and own two mischievous cats. I love crafting mehndi tattoos, and
                am obsessed with boba.</p>
              <p className="fs-6">My main goal as a professional physical trainer is to teach people how to workout 
                properly according to their goals, and give them the tools for success in the long term while
                learning to love the process and make progress!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}