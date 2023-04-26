import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Image from "next/image"
import Logo from '../public/logo.svg';

interface MenuLink {
  id: number,
  label: string,
  url: string
}

interface MenuLinks {
  menuLinks: MenuLink[]
}

export default function Footer({ menuLinks } : MenuLinks) {
  return (
  <footer id="#footer">
    <Container>
      <Row className="pt-5 justify-content-between">
        <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-start pb-5 pb-md-0">
          <Link href="/">
            <Image src={Logo} alt="Lee Porter Fitness Logo"/>
          </Link>
        </Col>
        <Col xs={12} sm={4} md={2} className="text-center text-sm-end text-md-start order-1 order-sm-2 order-md-1">
          <ul>
            <li>
              <p className="fs-4 fc-halloween-orange fw-500 mb-0">Site Map</p>
            </li>
            {menuLinks.map(menuLink => (
              <li key={menuLink.id}>
                <Link href={menuLink.url}>{menuLink.label}</Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} sm={5} md={5} lg={4} className="text-center text-sm-start text--end order-2 order-sm-1 order-md-2">
          <ul>
            <li>
              <p className="fs-4 fc-halloween-orange fw-500 mb-0">Contact Info</p>
            </li>
            <li>
              <p className="fc-bright-gray">
                <i className="bi bi-pin-map-fill fc-halloween-orange pe-3"></i>
                Bangkok, Thailand
              </p>
              <a href="mailto:leeporterfitness@gmail.com">
                <p className="fc-bright-gray">
                  <i className="bi bi-envelope-fill fc-halloween-orange pe-3"></i>
                  leeporterfitness@gmail.com
                </p>
              </a>
              <a href="https://www.instagram.com/leeporterfitness/" target='_blank'>
                <p className="fc-bright-gray">
                  <i className="bi bi-instagram fc-halloween-orange pe-3"></i>
                  leeporterfitness
                </p>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}