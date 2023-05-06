import { Container, Col, Row } from 'react-bootstrap'
import PageBanner from '../../components/page-banner'
import ContactForm from '../../components/contact-form'
import data from '../../json/data.json'

interface ContactMe {
  contactMeContent: {
    title:          string,
    bannerImageUrl: string
  }
}

export default function ContactMe({ contactMeContent } : ContactMe) {
  const imagePath = '/images/'
  return (
    <>
    <PageBanner title={contactMeContent.title} bannerImageUrl={imagePath + contactMeContent.bannerImageUrl}/>
    <section className="contact-me__main bg-arsenic py-5">
      <Container className="py-5">
        <Row className="justify-content-evenly">
          <Col xs={10} md={6}>
            <div className="bg-dark-gunmetal rounded-5 shadow-lg px-4 py-3">
              <ContactForm/>
            </div>
          </Col>
          <Col xs={10} md={6}>
            <div style={{ aspectRatio: '1/1', width: '100%', borderRadius: '50%'}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248057.20375566365!2d100.46830167559294!3d13.724878466234827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1683128225257!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                className="rounded-5"
                style={{border: 0}}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"/>
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
      contactMeContent : data.data[0].pageContent.contactMe,
    }
  }
}