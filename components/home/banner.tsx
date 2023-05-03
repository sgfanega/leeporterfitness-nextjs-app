import Image from "next/image"
import Link from "next/link"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

interface Banner {
  banner: BannerContent
}

interface BannerContent {
  title:          string,
  videoUrl:       string,
  bannerImageUrl: string,
  buttonText:     string,
  buttonUrl:      string
}

export default function Banner({ banner } : Banner) {
  return (
    <section className="home__banner">
      <Image 
        className="hero__banner-image" 
        src={banner?.bannerImageUrl} 
        alt="Banner Image" 
        fill
      />
      <Container className="hero__banner-content">
        <Row className="text-center text-lg-start">
          <Col xs={{ order: 2}} lg={{ span: 5, order: 1}}>
            <h2 className="display-8 fw-bold fc-bright-gray">
              What&apos;s Stopping <span className="fc-halloween-orange">You?</span>
            </h2>
            <p className="fs-4 fc-bright-gray">{banner?.title}</p>
            <Link className="btn btn-lg btn-outline-halloween-orange" 
              href={banner?.buttonUrl}>{banner?.buttonText}
            </Link>
          </Col>
          <Col xs={{ order: 1}} lg={7}>
            <iframe 
              className="hero__banner-video"
              width="100%" 
              height="100%"
              src="https://www.youtube.com/embed/2v3CWM5FmHs" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </Col>
        </Row>
      </Container>
    </section>
  )
}