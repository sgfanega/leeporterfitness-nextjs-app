import Link from "next/link"
import Image from "next/image"
import Container from "react-bootstrap/Container"

interface BottomBanner {
  bottomBanner: BottomBannerContent
}

interface BottomBannerContent {
  imageUrl: string
}

export default function BottomBanner({ bottomBanner } : BottomBanner) {
  const imagePath = '/images/'

  return (
    <section className="home__bottom-banner">
      <Image 
        className="home__bottom-banner-image"
        src={imagePath + bottomBanner.imageUrl}
        alt="Bottom Banner Image"
        fill
      />
      <Container className="d-flex flex-column align-items-center justify-content-center py-5">
        <p className="fs-4 fc-bright-gray">What Are You Waiting For?</p>
        <Link className="btn btn-halloween-orange" href="/contact-me">Contact Me!</Link>
      </Container>
    </section>
    )
}