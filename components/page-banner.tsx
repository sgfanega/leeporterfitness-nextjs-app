import Image from "next/image"
import Container from "react-bootstrap/Container"

interface PageBanner {
  title: string,
  bannerImageUrl: string
}

export default function PageBanner({ title , bannerImageUrl } : PageBanner) {
  return (
    <section className="page-banner">
      <Container>
        <Image 
          className="page-banner-image" 
          src={bannerImageUrl} 
          alt={title + ' Banner'} 
          style={{ objectFit: 'cover' }}
          quality={30}
          fill 
          priority 
        />
        <h1 className="display-1 fc-bright-gray fw-700 mb-auto">{title}</h1> 
      </Container>
    </section>
  )
}