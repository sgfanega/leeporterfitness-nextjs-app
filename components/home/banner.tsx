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
  const imagePath = '/images/'

  return (
    <section className="home__banner">
      <Image 
        src={ imagePath + banner.bannerImageUrl }
        className="hero__banner-image" 
        alt="Banner Image"
        quality={30}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP0rQcAAR8AzpZX2ywAAAAASUVORK5CYII="
        style={{ objectFit: 'cover' }}
        fill
      />
      <Container className="hero__banner-content">
        <Row className="text-center justify-content-center text-lg-start">
          <Col className="mb-5 mb-lg-0" xs={{ span: 12 }} md={10} lg={{ span: 5 }}>
            <h2 className="display-8 fw-bold fc-bright-gray">
              What&apos;s Stopping <span className="fc-halloween-orange">You?</span>
            </h2>
            <p className="fs-4 fc-bright-gray">{banner?.title}</p>
            <Link className="btn btn-lg btn-outline-halloween-orange" 
              href={banner?.buttonUrl}>{banner?.buttonText}
            </Link>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 10 }} md={10} lg={{ span: 7 }}>
            <iframe 
              className="hero__banner-video"
              width="100%" 
              height="100%"
              src="https://www.youtube.com/embed/0Df8BviqDz4" 
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