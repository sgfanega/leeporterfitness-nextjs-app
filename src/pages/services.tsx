import Link from "next/link"
import { Container, Col, Row } from 'react-bootstrap'
import PageBanner from '../../components/page-banner'
import data from '../../json/data.json'
import DOMPurify from 'isomorphic-dompurify'

interface Services {
  servicesContent: {
    title:          string,
    bannerImageUrl: string,
    content:        string,
    pricings:    PricingData[]
  }
}

interface PricingData {
  id:       number,
  title:    string,
  type:     string,
  monthly:  string,
  full:     string
}

export default function Services({ servicesContent } : Services) {
  const sanitizedContent = DOMPurify.sanitize(servicesContent.content)
  const pricingData = servicesContent.pricings
  const imagePath = '/images/'

  return (
    <>
      <PageBanner title={servicesContent.title} bannerImageUrl={imagePath + servicesContent.bannerImageUrl}/>
      <section className="services__main bg-arsenic">
        <Container className="services__main__container pt-5">
          <Row className="justify-content-center justify-content-md-evenly justify-content-lg-between">
            <Col xs={10} md={12}>
              <div className="fs-6 fc-bright-gray bg-dark-gunmetal shadow-lg mb-5 rounded-5 px-4 py-3" dangerouslySetInnerHTML={{__html: sanitizedContent}}></div>
            </Col>
            {pricingData.map(pricingInfo => (
              <Col xs={10} md={5} lg={4} xl={3} key={pricingInfo.id}>
                <div className="fs-5 fc-halloween-orange bg-dark-gunmetal shadow-lg text-center mb-5 rounded-5 px-4 py-3">
                  <h2 className="fs-5 fw-500">{pricingInfo.title}</h2>
                  <p className="fs-6 fc-bright-gray"><i>{pricingInfo.type}</i></p>
                  <p className="fs-6">Monthly: <Link href="/contact-me" className="link-bright-gray">{pricingInfo.monthly}</Link></p>
                  <p className="fs-6 mb-0">Full: <Link href="/contact-me" className="link-bright-gray">{pricingInfo.full}</Link></p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      servicesContent : data.data[0].pageContent.services,
    }
  }
}